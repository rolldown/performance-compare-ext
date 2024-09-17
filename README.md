# Why not using [performance-compare](https://github.com/farm-fe/performance-compare)
1. `performance-compare` case is relatively small(1000 modules with only dependency `react` and `react-dom`), 
it would be pretty easy to exceeds 1000 modules in real world app.
2. The test cases cannot reflect the changes in build time of the bundler as the application scale increases.
3. Using `Regex` to match build time in std out is subjective, different bundler may have different measurement method for build time, 
so we use process executed time to keep measurement consistent.

# Benchmark setup
1. [bun](https://github.com/oven-sh/bun), use `bunx` to execute package `bin`
2. [hyperfine](https://github.com/sharkdp/hyperfine) A popular command-line benchmarking tool.


# Benchmark result
run `hyperfine --warmup 1 --runs 3 'bunx vite build' 'bunx rsbuild build' 'bunx farm build'` for each app under `apps/`
## 1000 modules
```bash
Benchmark 1: bunx vite build
  Time (mean ± σ):     341.7 ms ±   6.7 ms    [User: 685.3 ms, System: 285.7 ms]
  Range (min … max):   334.7 ms … 348.1 ms    3 runs
 
Benchmark 2: bunx rsbuild build
  Time (mean ± σ):     579.3 ms ±   4.6 ms    [User: 1987.2 ms, System: 753.6 ms]
  Range (min … max):   574.1 ms … 582.8 ms    3 runs
 
Benchmark 3: bunx farm build
  Time (mean ± σ):     790.5 ms ±   4.8 ms    [User: 2691.4 ms, System: 799.0 ms]
  Range (min … max):   786.1 ms … 795.6 ms    3 runs
 
Summary
  'bunx vite build' ran
    1.70 ± 0.04 times faster than 'bunx rsbuild build'
    2.31 ± 0.05 times faster than 'bunx farm build'

```
## 3000 modules
```bash
Benchmark 1: bunx vite build Time (mean ± σ):     558.4 ms ±  17.4 ms    [User: 1324.8 ms, System: 514.0 ms]
  Range (min … max):   539.9 ms … 574.4 ms    3 runs
 
Benchmark 2: bunx rsbuild build
  Time (mean ± σ):      1.073 s ±  0.004 s    [User: 3.949 s, System: 1.364 s]
  Range (min … max):    1.069 s …  1.076 s    3 runs
 
Benchmark 3: bunx farm build
  Time (mean ± σ):      1.019 s ±  0.015 s    [User: 4.803 s, System: 1.528 s]
  Range (min … max):    1.005 s …  1.035 s    3 runs
 
Summary
  'bunx vite build' ran
    1.83 ± 0.06 times faster than 'bunx farm build'
    1.92 ± 0.06 times faster than 'bunx rsbuild build'

```

## 5000 modules
```bash
Benchmark 1: bunx vite build
  Time (mean ± σ):     806.0 ms ±  24.8 ms    [User: 1970.6 ms, System: 766.5 ms]
  Range (min … max):   783.8 ms … 832.7 ms    3 runs
 
Benchmark 2: bunx rsbuild build
  Time (mean ± σ):      1.534 s ±  0.029 s    [User: 6.308 s, System: 2.179 s]
  Range (min … max):    1.505 s …  1.562 s    3 runs
 
Benchmark 3: bunx farm build
  Time (mean ± σ):      1.308 s ±  0.015 s    [User: 7.385 s, System: 2.618 s]
  Range (min … max):    1.293 s …  1.322 s    3 runs
 
Summary
  'bunx vite build' ran
    1.62 ± 0.05 times faster than 'bunx farm build'
    1.90 ± 0.07 times faster than 'bunx rsbuild build'

```
## 10000 modules

```bash
Benchmark 1: bunx vite build
  Time (mean ± σ):      1.487 s ±  0.014 s    [User: 4.064 s, System: 1.580 s]
  Range (min … max):    1.474 s …  1.502 s    3 runs
 
Benchmark 2: bunx rsbuild build
  Time (mean ± σ):      3.138 s ±  0.005 s    [User: 12.747 s, System: 4.005 s]
  Range (min … max):    3.132 s …  3.142 s    3 runs
 
Benchmark 3: bunx farm build
  Time (mean ± σ):      2.076 s ±  0.003 s    [User: 13.737 s, System: 4.899 s]
  Range (min … max):    2.073 s …  2.079 s    3 runs
 
Summary
  'bunx vite build' ran
    1.40 ± 0.01 times faster than 'bunx farm build'
    2.11 ± 0.02 times faster than 'bunx rsbuild build'

```
