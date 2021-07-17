// const http = require('http')

// const server = http.createServer((req, res) => {
//     console.log(req.url)
//     console.log(req.method)

//     if (req.method === 'GET') {
//         res.writeHead(200, {
//             'Content-Type': 'text/html; charset=utf-8'
//         })
    
//         res.end(`
//             <form method='post' action='/'>
//                 <input type='text'>
//                 <button type='submit'>Send</button>
//             </form>
//         `)
//     } else if (req.method === 'POST') {
//         const body = []

//         res.writeHead(200, {
//             'Content-Type': 'text/html; charset=utf-8'
//         })

//         req.on('data', data => {
//             console.log(data)
//             console.log(1111111111)
//             body.push(Buffer.from(data))
//         })

//         req.on('end', () => {
//             console.log(22222222)
//             const message = body.toString().split('=')[1]

//             res.end(`
//             <div>Ваше сообщение: ${message}</div>
//         `)
//         })
//     }
    
// })

// server.listen(3000, () => {
//     console.log('Server is running...')
// })

