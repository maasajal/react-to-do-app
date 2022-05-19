const http = require('http')

const hostname = '127.0.0.1'
const port = 8000

const server = http.createServer((req, res) => {
  
  const items = {
    todos: [
      {
        id: 0,
        task: 'To Do Items',
        done: true
      },
      {
        id: 1,
        task: 'To Do Items',
        done: false
      },
      {
        id: 2,
        task: 'To Do Items',
        done: true
      },
      {
        id: 3,
        task: 'To Do Items',
        done: false
      }
    ]
  };
  let json = JSON.stringify(items);

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end(json);
  
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
