const http = require("http");

const server = http.createServer((req, res) => {
    console.log("request recevied");
    console.log(req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-Foo', 'bar');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`
    <html maaa=a>
    <head>
      <style>
        body div #myid{
            width:100px;
            background-color:#fff;
        }
        body div img{
            width:30px;
            background-color:#eee; 
        }
      </style>
    </head>
    <body>
        <div>
            <img id="myid/>
            <img/>
        </div>

    </body>
    </html>`);
});

server.listen(8088);