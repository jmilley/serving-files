# Notes for next class

using ESM over CJS
    - must change type to 'module' in `package.json`
    - must define root directory another way (no `__dirname`)
        1. `import { fileURLToPath } from 'node:url'`
        2. `const root_dir = path.dirname(fileURLToPath(import.meta.url))`

express.static magic
    - once a folder is set up to serve static files, some files are served automatically (if they exist).
        - index.html
        - favicon.ico