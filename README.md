# Rolldown Benchmark

## Source apps

- Apps containing a mix of React JSX components and plain JS from `node_modules`, with total modules ranging from 2.4k to 19k:
  - `apps/1000`: 2413 modules(1000 JSX components + 1413 JS modules in node_modules)
  - `apps/3000`: 5714 modules(3000 JSX components + 2714 JS modules in node_modules)
  - `apps/5000`: 9014 modules(5000 JSX components + 4014 JS modules in node_modules)
  - `apps/10000`: 19014 modules(10000 JSX components + 9014 JS modules in node_modules)
- The original esbuild `three10x` benchmark
- `rome` based on https://github.com/rome/tools/tree/archived-js, total 1195 typescript file

## Configuration

All tools are configured to use a minimal configuration that:
* enables production mode
    * enables minification
    * enables sourcemaps
* disables gzip

## How to run

1. Install deps with `pnpm install` in workspace root
2. `cd` to the apps you want to benchmark, e.g. `apps/10000`
3. An individual tool's benchmark can be run via its corresponding npm script in that app.
4. We recommend running the benchmarks with `node --run` or `bun run` to minimize package manager script runner overhead, and use [hyperfine](https://github.com/sharkdp/hyperfine) for comparing across tools:

  ```
  hyperfine --warmup 1 --runs 3 \
    'node --run build:rolldown' \
    'node --run build:esbuild' \
    'node --run build:rspack'
  ```

### Result Variance

Due to different native languages and architectural differences, the results may have heavy variance depending on what operating system and hardware you are using the run the benchmarks. This is why we recommend you run the benchmark on your own system to determine the number's relevance to your daily work.

## Reference Results

### Notes

- The following results are run on specific system / hardware and may not match results on different systems. They are for reference only. We strongly recommend you run it on systems close to your work environment.

- Included tools are publishing new versions with improvements constantly. While we try our best to update them periodically, numbers published here are not guaranteed to be always up-to-date.

- Results are automatically updated via GitHub Actions CI running on Ubuntu, macOS, and Windows runners whenever a tool is updated.

### Benchmark Results for `apps/10000`

<!-- BENCHMARK_START -->

### Ubuntu Latest (updated 2026-09-11)

| Tool     | Version | Time (mean ± σ)           | Comparison | JS      | CSS       | Sourcemaps |
| -------- | ------- | ------------------------: | ---------- | ------- | --------- | ---------- |
| bun      | 1.4.2   |        700.07 ±  14.69 ms | 1.0x       | 4.92 MB | not found | 12.24 MB   |
| rolldown | 1.2.8   |       1273.17 ±  20.53 ms | 1.8x       | 4.97 MB | not found | 12.90 MB   |
| esbuild  | 0.28.2  |       1479.32 ±  29.07 ms | 2.1x       | 5.65 MB | 38 B      | 14.10 MB   |
| vite     | 8.2.2   |       1973.34 ±  21.31 ms | 2.8x       | 4.95 MB | 1 B       | 12.73 MB   |
| rspack   | 2.2.3   |       3160.63 ±  35.35 ms | 4.5x       | 4.93 MB | not found | 12.09 MB   |
| rsbuild  | 2.2.4   |       3596.74 ±  43.54 ms | 5.1x       | 4.93 MB | not found | 11.92 MB   |
| rollup   | 4.63.1  |      53601.20 ± 339.12 ms | 76.6x      | 5.08 MB | not found | 12.30 MB   |


### macOS Latest (updated 2026-09-11)

| Tool     | Version | Time (mean ± σ)           | Comparison | JS      | CSS       | Sourcemaps |
| -------- | ------- | ------------------------: | ---------- | ------- | --------- | ---------- |
| bun      | 1.4.2   |       1099.99 ± 160.31 ms | 1.0x       | 4.92 MB | not found | 12.24 MB   |
| vite     | 8.2.2   |       2335.80 ± 187.40 ms | 2.1x       | 4.95 MB | 1 B       | 12.73 MB   |
| rolldown | 1.2.8   |       2385.12 ± 375.47 ms | 2.2x       | 4.97 MB | not found | 12.90 MB   |
| esbuild  | 0.28.2  |       2404.50 ± 413.43 ms | 2.2x       | 5.65 MB | 38 B      | 14.10 MB   |
| rsbuild  | 2.2.4   |       4125.43 ± 920.07 ms | 3.8x       | 4.93 MB | not found | 11.92 MB   |
| rspack   | 2.2.3   |       4339.39 ± 323.82 ms | 3.9x       | 4.93 MB | not found | 12.09 MB   |
| rollup   | 4.63.1  |     54640.15 ± 6697.56 ms | 49.7x      | 5.08 MB | not found | 12.30 MB   |


### Windows Latest (updated 2026-09-11)

| Tool     | Version | Time (mean ± σ)           | Comparison | JS      | CSS       | Sourcemaps |
| -------- | ------- | ------------------------: | ---------- | ------- | --------- | ---------- |
| bun      | 1.4.2   |       1538.96 ±  87.01 ms | 1.0x       | 4.92 MB | not found | 12.66 MB   |
| rolldown | 1.2.8   |       2239.73 ±  18.88 ms | 1.5x       | 4.97 MB | not found | 13.33 MB   |
| esbuild  | 0.28.2  |       2351.35 ±  50.06 ms | 1.5x       | 5.65 MB | 38 B      | 14.52 MB   |
| vite     | 8.2.2   |       3160.98 ± 264.98 ms | 2.1x       | 4.95 MB | 1 B       | 13.15 MB   |
| rspack   | 2.2.3   |       4683.82 ± 127.19 ms | 3.0x       | 4.93 MB | not found | 12.51 MB   |
| rsbuild  | 2.2.4   |       5047.52 ±  39.83 ms | 3.3x       | 4.93 MB | not found | 12.34 MB   |
| rollup   | 4.63.1  |   123875.60 ± 11023.93 ms | 80.5x      | 5.08 MB | not found | 12.67 MB   |


<!-- BENCHMARK_END -->
