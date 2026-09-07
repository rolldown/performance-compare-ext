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

### Ubuntu Latest (updated 2026-09-07)

| Tool     | Version | Time (mean ± σ)           | Comparison | JS      | CSS       | Sourcemaps |
| -------- | ------- | ------------------------: | ---------- | ------- | --------- | ---------- |
| bun      | 1.4.2   |        717.61 ±  11.87 ms | 1.0x       | 4.92 MB | not found | 12.24 MB   |
| rolldown | 1.2.7   |       1318.90 ±  15.14 ms | 1.8x       | 4.97 MB | not found | 12.90 MB   |
| esbuild  | 0.28.2  |       1480.52 ±  26.92 ms | 2.1x       | 5.65 MB | 38 B      | 14.10 MB   |
| vite     | 8.2.2   |       1989.41 ±  10.84 ms | 2.8x       | 4.95 MB | 1 B       | 12.73 MB   |
| rspack   | 2.2.2   |       3227.33 ±  77.80 ms | 4.5x       | 4.93 MB | not found | 12.09 MB   |
| rsbuild  | 2.2.3   |       3663.24 ±  31.42 ms | 5.1x       | 4.93 MB | not found | 11.92 MB   |
| rollup   | 4.63.1  |      54579.89 ± 694.91 ms | 76.1x      | 5.08 MB | not found | 12.30 MB   |


### macOS Latest (updated 2026-09-07)

| Tool     | Version | Time (mean ± σ)           | Comparison | JS      | CSS       | Sourcemaps |
| -------- | ------- | ------------------------: | ---------- | ------- | --------- | ---------- |
| bun      | 1.4.2   |        615.17 ±  94.72 ms | 1.0x       | 4.92 MB | not found | 12.24 MB   |
| rolldown | 1.2.7   |       1145.22 ± 213.33 ms | 1.9x       | 4.97 MB | not found | 12.90 MB   |
| esbuild  | 0.28.2  |       1411.93 ± 176.72 ms | 2.3x       | 5.65 MB | 38 B      | 14.10 MB   |
| vite     | 8.2.2   |       1927.27 ± 349.13 ms | 3.1x       | 4.95 MB | 1 B       | 12.73 MB   |
| rsbuild  | 2.2.3   |       3550.38 ± 559.66 ms | 5.8x       | 4.93 MB | not found | 11.92 MB   |
| rspack   | 2.2.2   |      4132.77 ± 1022.70 ms | 6.7x       | 4.93 MB | not found | 12.09 MB   |
| rollup   | 4.63.1  |     39703.08 ± 4574.95 ms | 64.5x      | 5.08 MB | not found | 12.30 MB   |


### Windows Latest (updated 2026-09-07)

| Tool     | Version | Time (mean ± σ)           | Comparison | JS      | CSS       | Sourcemaps |
| -------- | ------- | ------------------------: | ---------- | ------- | --------- | ---------- |
| bun      | 1.4.2   |       1746.05 ±  34.39 ms | 1.0x       | 4.92 MB | not found | 12.66 MB   |
| rolldown | 1.2.7   |       2344.07 ± 101.02 ms | 1.3x       | 4.97 MB | not found | 13.33 MB   |
| esbuild  | 0.28.2  |       2771.53 ±  40.18 ms | 1.6x       | 5.65 MB | 38 B      | 14.52 MB   |
| vite     | 8.2.2   |       2949.86 ±  72.89 ms | 1.7x       | 4.95 MB | 1 B       | 13.15 MB   |
| rspack   | 2.2.2   |       4536.04 ±  45.64 ms | 2.6x       | 4.93 MB | not found | 12.51 MB   |
| rsbuild  | 2.2.3   |       4939.84 ±  58.18 ms | 2.8x       | 4.93 MB | not found | 12.34 MB   |
| rollup   | 4.63.1  |    104554.51 ± 5110.98 ms | 59.9x      | 5.08 MB | not found | 12.67 MB   |


<!-- BENCHMARK_END -->
