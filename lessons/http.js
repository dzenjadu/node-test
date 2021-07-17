const http = require('http')

// console.log(http)
const server = http.createServer((req, res) => {
    // console.log(req.url)
    // console.log(req.method)

    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })
        // res.write('<h1>Hello</h1>')
        res.end(`
            <form method='POST' action='/'>
                <input type='text'>
                <button type='submit'>Send</button>
            </form>
        `) 
    } else if (req.method === 'POST') {
        
    }
    
})

server.listen(3000, () => {
    console.log('Server is running...')
})