import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const app = express()

const root_dir = path.dirname(fileURLToPath(import.meta.url))
// console.log(root_dir)

// tell express to server our static files
app.use(express.static(path.join(root_dir, 'public'), { index: false }))

// routes
app.get('/', (req, res) => res.send('index'))

app.get('/about', (req, res, next) => {
    // path created: /home/john/node_2026/serving-files/public/about.html
    res.sendFile(path.join(root_dir, 'public', 'about.html'), err => {
        if (err) { next(err) }
        else { console.log('file served') }
    })
})

app.get('/contact', (req, res) => res.send('contact'))

// any other route should result in 404 being sent. Remember that res.send / res.sendFile both end the req-res cycle
app.use((req, res, next) => {
    res.sendFile(path.join(root_dir, 'public', '404.html'), err => {
        if (err) { next(err) }
        else { console.log('404 served') }
    })
})

// use the port defined in .env file or 3000
const PORT = process.env.PORT || 3000

app.listen(PORT, (err) => {
    if (err) {
        throw err
    }
    console.log(`listening on port ${PORT}`)
})