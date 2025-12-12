# Hypertitles

A live supertitles/subtitles control console and editor with support for HTML markup.

## Development

Hypertitles is made with Vue.js 3 and Rust for fast, reliable performance.

### Prerequisites

- [Node.js](https://nodejs.org/en/download)
- [Rust](https://rust-lang.org/tools/install) (needed for Tauri)

### Setting up the dev environment

1. Clone branch
2. `cd hypertitles` to enter the cloned dir
3. `npm install` to install npm packages

Then choose which way to launch the app below. Vite does not have access to system-level content like fonts and displays, so not everything will be fully functional. Tauri uses the vite server internally.

#### Vite

4. `npm run dev` to start the vite dev server for running in the browser [DONE]

OR

#### Tauri

4. `npm run build` to build the vite bundle for tauri
5. `cd src-tauri` to enter the rust src dir
6. `cargo install` to install rust packages
7. `npm run tauri` to launch the tauri app
