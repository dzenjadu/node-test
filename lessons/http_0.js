const http = require('http')

// console.log(http)
const server = http.createServer((req, res) => {
    // console.log(req.url)

    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        // res.write('<h1>Hello</h1>')
        res.end(`
            <form method='POST' action='/'>
                <input name='pam' type='text'>
                <button type='submit'>Send</button>
            </form>
        `) 
    } else if (req.method === 'POST') {
        const body = []

        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        req.on('data', (data) => {
            // console.log('data', data)
            body.push(Buffer.from(data))
        })

        req.on('end', () => {
            const message = body.toString().split('=')[1]
            res.end(`<div>Your message: ${message}</div>`)
        })
    }
    
})

server.listen(3000, () => {
    console.log('Server is running...')
})