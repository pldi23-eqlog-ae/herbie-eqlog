import sys
import json
import matplotlib
import matplotlib.pyplot as plt
from statistics import median

matplotlib.rcParams['pdf.fonttype'] = 42
matplotlib.rcParams['ps.fonttype'] = 42
matplotlib.rcParams['savefig.bbox'] = 'tight'

assert (len(sys.argv) == 6)
results_file_vanilla = sys.argv[1]
results_file_eqlog = sys.argv[2]
output_plot_error = sys.argv[3]
macro_file = sys.argv[4]
output_dir = sys.argv[5]

output_plot_hist = output_dir + "/errorhist.pdf"
output_plot_time_hist = output_dir + "/timehistsecs.pdf"
output_plot_time_eqlog_better_hist = output_dir + "/timehistsecs_eqlog_better.pdf"
output_plot_size_hist = output_dir + "/sizehist.pdf"

vanilla_data = json.load(open(results_file_vanilla))["tests"]
eqlog_data = json.load(open(results_file_eqlog))["tests"]


tests_unfiltered = set(map(lambda row: row["name"], vanilla_data))
other_tests = set(map(lambda row: row["name"], eqlog_data))
difference = other_tests.difference(tests_unfiltered)
assert (len(tests_unfiltered) == len(vanilla_data))
print(len(vanilla_data), flush=True)
print(len(eqlog_data), flush=True)
print(difference)

assert (len(vanilla_data) == len(eqlog_data))

vanilla_tests = dict(map(lambda row: (row["name"], row), vanilla_data))
eqlog_tests = dict(map(lambda row: (row["name"], row), eqlog_data))


tests = set(filter(lambda test: vanilla_tests[test]["start"] > 0.5, tests_unfiltered))


def program_size(test):
  str = test["output"]
  return str.count("(")

def test_error_diff(test):
  return eqlog_tests[test]["end"] - vanilla_tests[test]["end"]

def test_size_diff(test):
  return program_size(eqlog_tests[test]) - program_size(vanilla_tests[test])

def test_time_diff_secs(test):
  return eqlog_tests[test]["time"]/1000.0 - vanilla_tests[test]["time"]/1000.0

def test_time_X_faster(test):
  return float(vanilla_tests[test]["time"])/float(eqlog_tests[test]["time"])

def plot_error():
  tests_sorted = list(tests)
  tests_sorted.sort(key = lambda test: test_error_diff(test))
  for test in tests_sorted:
   print(eqlog_tests[test]["name"])
  
  xs = range(len(tests_sorted))
  ys = list(map(lambda test: test_error_diff(test), tests_sorted))

  fig = plt.figure()
  ax = fig.add_subplot()
  ax.scatter(xs, ys, color = "black", marker = "o", linestyle = "None", facecolors='none')
  plt.savefig(output_plot_error)  

HIST_CUTOFF = 60

def makecdf(data):
  copy = data.copy()
  copy.sort()
  cdfdata = []
  sum = 0
  xs = []
  for val in copy:
    xs.append(val)
    cdfdata.append(sum)
    sum += 1
    
  return (xs, cdfdata)


def histogram_error():
  fig = plt.figure()
  errors = list(map(lambda test: test_error_diff(test), tests))
  error_filtered = list(filter(lambda error: error < HIST_CUTOFF, errors))
  bins = list(range(-HIST_CUTOFF-1, HIST_CUTOFF+1))
  bins_filtered = list(filter(lambda bin: bin % 2 == 1, bins))

  plt.hist(error_filtered, bins = bins_filtered, color = "blue", alpha = 0.5)
  plt.yscale("log")
  plt.savefig(output_plot_hist)  

def histogram_size():
  fig = plt.figure()
  errors = list(map(lambda test: test_size_diff(test), tests))

  bins = list(range(-HIST_CUTOFF-1, HIST_CUTOFF+1))
  bins_filtered = list(filter(lambda bin: bin % 2 == 1, bins))

  plt.hist(errors, bins = bins_filtered, color = "blue", alpha = 0.5)
  plt.savefig(output_plot_size_hist) 


def histogram_time():
  fig = plt.figure()
  errors = list(map(lambda test: test_time_diff_secs(test), tests))

  bins = list(range(-HIST_CUTOFF-1, HIST_CUTOFF+1))
  bins_filtered = list(filter(lambda bin: bin % 2 == 1, bins))

  plt.hist(errors, bins = bins_filtered, color = "blue", alpha = 0.5)
  plt.savefig(output_plot_time_hist) 

def histogram_time_eqlog_better():
  fig = plt.figure()
  filtered = list(filter(lambda test: test_error_diff(test) < 0.0, tests))
  errors = list(map(lambda test: test_time_diff_secs(test), filtered))

  bins = list(range(-HIST_CUTOFF-1, HIST_CUTOFF+1))
  bins_filtered = list(filter(lambda bin: bin % 2 == 1, bins))

  plt.hist(errors, bins = bins_filtered, color = "blue", alpha = 0.5)
  plt.savefig(output_plot_time_eqlog_better_hist)


def cdf_error():
  fig = plt.figure()
  errors = list(map(lambda test: test_error_diff(test), tests))
  error_filtered = list(filter(lambda error: error < HIST_CUTOFF, errors))

  (xs, ys) = makecdf(error_filtered)
  plt.plot(xs, ys)
  plt.savefig(output_plot_hist)  



plot_error()
histogram_error()
histogram_size()
histogram_time()
histogram_time_eqlog_better()

#plt.savefig('eqlogreport/error.pdf')

macro_port = open(macro_file, "w")

def save_macro(name, val):
  macro_port.write("\\newcommand{\\%s}{%s\\xspace}\n" % (name, val))

def save_macro_round(name, val):
  save_macro(name, round(val, 2))

def save_macro_percent(name, val):
  save_macro(name, str(round((val * 100.0), 2)) + "\\%")

def generate_macros():
  num_tests = len(tests)
  save_macro("numtests", num_tests)
  num_better_error = len(list(filter(lambda test: test_error_diff(test) < 0, tests)))
  save_macro("numbettererror", num_better_error)
  num_worse_error = len(list(filter(lambda test: test_error_diff(test) > 0, tests)))
  save_macro("numworseerror", num_worse_error)

  save_macro("numwithinone", len(list(filter(lambda test: abs(test_error_diff(test)) <= 1, tests))))
  save_macro("numgreaterone", len(list(filter(lambda test: abs(test_error_diff(test)) > 1, tests))))
  save_macro("numlessnegone", len(list(filter(lambda test: test_error_diff(test) < -1, tests))))

  save_macro_round("timeeqlogminutes", sum(map(lambda test: eqlog_tests[test]["time"], tests)) / (1000 * 60.0))
  save_macro_round("timevanillaminutes", sum(map(lambda test: vanilla_tests[test]["time"], tests)) / (1000.0 * 60.0))
  save_macro_percent("besttimepercentofvanilla", min(map(lambda test: (eqlog_tests[test]["time"] / vanilla_tests[test]["time"]), tests)))

  save_macro("numhistcutoff", len(list(filter(lambda test: test_error_diff(test) > HIST_CUTOFF, tests))))

  save_macro("numeqlogfaster", len(list(filter(lambda test: test_time_diff_secs(test) < 0, tests))))
  save_macro("medianeqlogXasfast", median(list(map(lambda test: test_time_X_faster(test), tests))))
  save_macro("numeqlog2xasfast", len(list(filter(lambda test: test_time_X_faster(test) > 2.0, tests))))

  save_macro("medianeqlogXasfastFilteredEqlogImproved", median(list(map(lambda test: test_time_X_faster(test), list(filter(lambda test: test_error_diff(test) < 0, tests))))))
  save_macro("numeqlog2xasfastFilteredEqlogImproved", len(list(filter(lambda test: test_time_X_faster(test) > 2.0, list(filter(lambda test: test_error_diff(test) < 0, tests))))))
  save_macro("numeqlog1point25XasfastFilteredEqlogImproved", len(list(filter(lambda test: test_time_X_faster(test) > 1.25, list(filter(lambda test: test_error_diff(test) < 0, tests))))))


  
generate_macros()
