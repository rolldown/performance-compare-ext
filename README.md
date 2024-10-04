# Benchmark setup
1. `node`(22.7.0), or any node version could use `node --run`
> [!note]
> Also you could use `bunx` run command directly instead of `npm scripts`  
> Both of `bunx` and `node --run` has similar low overhead compare to `pnpm run` and `npm run`
2. [hyperfine](https://github.com/sharkdp/hyperfine) A popular command-line benchmarking tool.


# Benchmark result

> [!note]
> **Environment**  
> - OS: Linux Ubuntu 22.04 LTS  
> - CPU: (32) x64 AMD Ryzen 9 5950X 16-Core Processor  
> - Memory: 64 GB  

## Command
run `hyperfine --warmup 1 --runs 3 'node --run build:vite' 'node --run build:rsbuild' 'node --run build:farm'` for each app under `apps/`

## 2413 modules(1000 component + 1413 modules in node_modules)
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
## 5714 modules(3000 component + 2714 modules in node_modules)
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

## 9014 modules(5000 component + 4014 modules in node_modules)
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
## 19014 modules(10000 component + 9014 modules in node_modules)

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

### Extra round

Comparing `rolldown`  and `esbuild` without html
using `hyperfine --warmup 1 --runs 3 'node --run build:rolldown' 'node --run build:esbuild'`

```bash
Benchmark 1: bunx rolldown build --config rolldown.config.mjs
  Time (mean ± σ):     634.4 ms ±  12.2 ms    [User: 1979.6 ms, System: 1344.5 ms]
  Range (min … max):   622.9 ms … 647.2 ms    3 runs
 
Benchmark 2: bunx esbuild --bundle --minify=false  --outdir=dist src/index.jsx
  Time (mean ± σ):      1.225 s ±  0.024 s    [User: 3.412 s, System: 1.333 s]
  Range (min … max):    1.199 s …  1.245 s    3 runs
 
Summary
  'bunx rolldown build --config rolldown.config.mjs' ran
    1.93 ± 0.05 times faster than 'bunx esbuild --bundle --minify=false  --outdir=dist src/index.jsx'
```

### Results on Macs

- 19k modules case (`./apps/10000`)
- 2023 Macbook Pro / M2 Pro (12 cores - 8 performance and 4 efficiency) / 32GB memory / Node.js v22.7.0
- `bun build` using Bun v1.1.29

```bash
hyperfine --warmup 1 --runs 3 'node --run build:vite' 'node --run build:rsbuild' 'node --run build:farm' 'node --run build:rolldown' 'node --run build:esbuild' 'node --run build:bun'
```

```bash
Benchmark 1: node --run build:vite
  Time (mean ± σ):      1.620 s ±  0.037 s    [User: 2.381 s, System: 9.815 s]
  Range (min … max):    1.586 s …  1.660 s    3 runs

Benchmark 2: node --run build:rsbuild
  Time (mean ± σ):      2.880 s ±  0.024 s    [User: 5.507 s, System: 10.755 s]
  Range (min … max):    2.863 s …  2.908 s    3 runs

Benchmark 3: node --run build:farm
  Time (mean ± σ):      2.222 s ±  0.025 s    [User: 8.091 s, System: 5.401 s]
  Range (min … max):    2.200 s …  2.249 s    3 runs

Benchmark 4: node --run build:rolldown
  Time (mean ± σ):     747.5 ms ±  15.8 ms    [User: 1104.8 ms, System: 3890.1 ms]
  Range (min … max):   734.0 ms … 764.8 ms    3 runs

Benchmark 5: node --run build:esbuild
  Time (mean ± σ):     867.7 ms ±   5.3 ms    [User: 1844.2 ms, System: 2747.9 ms]
  Range (min … max):   861.6 ms … 871.5 ms    3 runs

Benchmark 6: node --run build:bun
  Time (mean ± σ):     843.8 ms ±   6.9 ms    [User: 642.6 ms, System: 2649.9 ms]
  Range (min … max):   836.7 ms … 850.3 ms    3 runs

Summary
  node --run build:rolldown ran
    1.13 ± 0.03 times faster than node --run build:bun
    1.16 ± 0.03 times faster than node --run build:esbuild
    2.17 ± 0.07 times faster than node --run build:vite
    2.97 ± 0.07 times faster than node --run build:farm
    3.85 ± 0.09 times faster than node --run build:rsbuild
```

# Why not using [performance-compare](https://github.com/farm-fe/performance-compare)
1. `performance-compare` case is relatively small(1000 modules with only dependency `react` and `react-dom`), 
it would be pretty easy to exceeds 1000 modules in real world app.
2. The test cases cannot reflect the changes in build time of the bundler as the application scale increases.
3. Using `Regex` to match build time in std out is subjective, different bundler may have different measurement method for build time, 
so we use process executed time to keep measurement consistent.
