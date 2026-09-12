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

### Ubuntu Latest (updated 2026-09-12)

| Tool     | Version | Time (mean ± σ)           | Comparison | JS      | CSS       | Sourcemaps |
| -------- | ------- | ------------------------: | ---------- | ------- | --------- | ---------- |
| bun      | 1.4.2   |        582.16 ±  25.25 ms | 1.0x       | 4.92 MB | not found | 12.24 MB   |
| rolldown | 1.2.8   |       1052.13 ±  86.39 ms | 1.8x       | 4.97 MB | not found | 12.90 MB   |
| esbuild  | 0.28.2  |       1162.17 ±  34.78 ms | 2.0x       | 5.65 MB | 38 B      | 14.10 MB   |
| vite     | 8.2.2   |       1457.09 ±  12.55 ms | 2.5x       | 4.95 MB | 1 B       | 12.73 MB   |
| rspack   | 2.2.3   |       2447.86 ±  38.23 ms | 4.2x       | 4.93 MB | not found | 12.09 MB   |
| rsbuild  | 2.2.5   |       2716.62 ±  36.95 ms | 4.7x       | 4.93 MB | not found | 11.92 MB   |
| rollup   | 4.63.1  |      37763.74 ± 131.79 ms | 64.9x      | 5.08 MB | not found | 12.30 MB   |


### macOS Latest (updated 2026-09-12)

| Tool     | Version | Time (mean ± σ)           | Comparison | JS      | CSS       | Sourcemaps |
| -------- | ------- | ------------------------: | ---------- | ------- | --------- | ---------- |
| bun      | 1.4.2   |        554.58 ±  49.65 ms | 1.0x       | 4.92 MB | not found | 12.24 MB   |
| esbuild  | 0.28.2  |       1677.83 ± 329.46 ms | 3.0x       | 5.65 MB | 38 B      | 14.10 MB   |
| rolldown | 1.2.8   |       1843.84 ± 566.37 ms | 3.3x       | 4.97 MB | not found | 12.90 MB   |
| vite     | 8.2.2   |       2051.93 ± 235.53 ms | 3.7x       | 4.95 MB | 1 B       | 12.73 MB   |
| rspack   | 2.2.3   |       3002.10 ± 415.50 ms | 5.4x       | 4.93 MB | not found | 12.09 MB   |
| rsbuild  | 2.2.5   |       3770.43 ± 532.08 ms | 6.8x       | 4.93 MB | not found | 11.92 MB   |
| rollup   | 4.63.1  |     37985.41 ± 5521.50 ms | 68.5x      | 5.08 MB | not found | 12.30 MB   |


### Windows Latest (updated 2026-09-12)

| Tool     | Version | Time (mean ± σ)           | Comparison | JS      | CSS       | Sourcemaps |
| -------- | ------- | ------------------------: | ---------- | ------- | --------- | ---------- |
| bun      | 1.4.2   |       1627.59 ±  92.30 ms | 1.0x       | 4.92 MB | not found | 12.66 MB   |
| rolldown | 1.2.8   |       2236.34 ±  16.45 ms | 1.4x       | 4.97 MB | not found | 13.33 MB   |
| esbuild  | 0.28.2  |       2484.69 ±  41.15 ms | 1.5x       | 5.65 MB | 38 B      | 14.52 MB   |
| vite     | 8.2.2   |       3195.65 ±  16.01 ms | 2.0x       | 4.95 MB | 1 B       | 13.15 MB   |
| rspack   | 2.2.3   |       5121.69 ± 349.95 ms | 3.1x       | 4.93 MB | not found | 12.51 MB   |
| rsbuild  | 2.2.5   |       5583.31 ± 197.37 ms | 3.4x       | 4.93 MB | not found | 12.34 MB   |
| rollup   | 4.63.1  |   139306.94 ± 15309.28 ms | 85.6x      | 5.08 MB | not found | 12.67 MB   |


<!-- BENCHMARK_END -->
