const net = require("net");
const parser = require("./parser.js");
const render = require("./render.js");
const images = require('images');

class Request {
    // method,url = host+port+path
    // body:k/v
    // header
    constructor(options) {
            this.method = options.method || "GET";
            this.host = options.host;
            this.part = options.path || 80;
            this.path = options.path || "/";
            this.body = options.body || {};
            this.headers = options.headers || {};
            if (!this.headers["Content-Type"]) {
                this.headers["Content-Type"] = "application/x-www-form-urlencided"
            } else if (this.headers["Content-Type"] === "application/json") {
                this.bodyText = JSON.stringify(this.body);
            } else if (this.header["Content-Type"] === "application/x-www-form-urlencided") {
                this.bodyText = Object.keys(this.body).map(key => `${key}=${this.body[key]}`).join("&");

                this.headers["Content-Length"] = this.bodyText.length;
            }
        }
        // toString() {
        //     return `${this.method} ${this.path} HTTP/1.1\r\nHost:127.0.0.1\r\n${ Object.keys(
        //         this.headers,)
        //         .map((key) =>`${key}:${this.headers[key]}`)
        //         .join('\r\n') }\r\n\er\n${this.bodyText}\r\n\r\n`;
        // }

    toString() {
            return `${this.method}  ${this.path} HTTP/1.1\r
            ${Object.keys(this.header )
          .map((key) => `${key}: ${this.headers[key]}`)
          .join('\r\n')}\r\r
          ${this.bodyText}`;
      }

    send(connection) {
        return new Promise((resolve, reject) => {
            const parser = new ResponseParser; 
            if (connection){
                 connection.write(this.toString());
             } else {
                const connection = net.createConnection({ host: this.host, port: this.port },
                    () => {
                        connection.write(this.toString());
                    })
            }
            connection.on('data', (data) => {
               parser.receive(data.toString());
                // resolve(data.toString());
                if(parser.isFinished){
                    resolve(parser.response)
                }
                connection.end();
            });
            connection.on('error', (err) => {
                reject(err);
                connection.end();
            });
        })
    };

};
class Response {

}

class ResponseParser{
    constructor(){
        this.WAITING_STATUS_LINE=0;
        this.WAITING_STATUS_LINE_END=1;
        this.WAITING_HEADER_NAME=2;
        this.WAITING_HEADER_SPACE=3;
        this.WAITING_HEADER_VALUE=4;
        this.WAITING_HEADER_LINE_END=5;
        this.WAITING_HEADER_BLOCK_END=6;
        this.WAITING_BODY =7;

        this.current = this.WAITING_STATUS_LINE;
        this.statusLine="";
        this.headers = {};
        this.headerName ="";
        this.headerValue = "";
        this.bodyParser = null;
    }

    get isFinished(){
        return this.bodyParser && this.bodyParser.isFinished;
    }

    get response(){
        this.statusLine.match(/HTTP\1.1([0-9+]) ([\s\S]+)/);
        return{
            statusCode:RegExp.$1,  
            sattusText:RegExp.$2,
            header:this.headers,
            body:this.bodyParser.content.join('') 
        }
    }
    receive(string){
        for(let i =0;i<string.length;i++){
            this.receiveChar(string.charAt(i));
        }
    }
    receiveChar(char){
        if(this.current===this.WAITING_STATUS_LINE){
                if(char ==='\r'){
                    this.current=this.WAITING_HEADER_LINE_END;
                }else{
                    this.statusLine += char;
                }
            }else if(this.current===this.WAITING_STATUS_LINE_END){
                if(char=='\n'){
                    this.current=this.WAITING_HEADER_NAME;
                }
            }else if(this.current===this.WAITING_HEADER_NAME){
                if(char ==':'){
                    this.current=this.WAITING_HEADER_SPACE;
                }else if(char==='\r'){
                    this.current=this.WAITING_HEADER_BLOCK_END;
                    if(this.headers['Transfer-Ecoding']==='chunked')
                    this.bodyParser=new TrunkedBodyParser();
                }else{
                    this.headerName += char;
                }
            }else if(this.current===this.WAITING_HEADER_SPACE){
                if(char===''){
                    this.current=this.WAITING_HEADER_VALUE;
                }
            }else if(this.current===this.WAITING_HEADER_VALUE){
                if(char==='\r'){
                    this.current=this.WAITING_HEADER_LINE_END;
                    this.headers[this.headerName]=this.headerValue;
                    this.headerName="";
                    this.headerValue="";
                }else{
                    this.headerValue+=char;
                }
            }else if(this.current==this.WAITING_HEADER_LINE_END){
                if(char==='\n'){
                    this.current=this.WAITING_HEADER_NAME;
                }
            }else if(this.current===this.WAITING_HEADER_BLOCK_END){
                if(cahe=='\n'){
                    this.current=this.WAITING_BODY;
                }
            }else if(this.current===this.WAITING_BODY){
                this.bodyParser.receiveChar(char);
            }
        }
    }


class TrunkedBodyParser{
    constructor(){
        this.WAITING_LENGTH=0;
        this.WAITING_LENGTH_LINE_END=1;
        this.READING_TRUNK=2;
        this.WAITING_NEW_LINE=3;
        this.WAITING_NEW_LINE_END=4;
        this.length=0;
        this.content=[];
        this.isFinish=false;
        this.current=this.WAITING_LENGTH;
    }

    receiveChar(char){
        // console.log(JSON.stringify(char));
        if(this.current===this.WAITING_LENGTH){
            if(char ==='\r'){
                if(this.length===0){
                    this.isFinish=true;
                }
                this.current===this.WAITING_STATUS_LINE_END;
            }else{
                this.length *= 16 ;
                this.length += parseInt(char,16);
            }
        }else if(this.current===this.WAITING_STATUS_LINE_END){
            if(char ==='\n'){
                this.current === this.READING_TRUNK;
            }
        }else if(this.current === this.READING_TRUNK){
            this.content.push(char);
            this.length --;
            if(this.length === 0){
                this.current = this.WAITING_NEW_LINE;
            }
            }else if(this.current === this.WAITING_NEW_LINE){
                if(char ==='\r'){
                    this.current = this.WAITING_NEW_LINE_END;
                }
            }else if(this.current === this.WAITING_NEW_LINE_END){
                if(char ==='\n'){
                    this.current === this.WAITING_LENGTH;
                }
            }
        }
        

    }

void async function() {
    let request = new Request({
        method: "POST",
        host: "127.0.0.1",
        port: "8088",
        path: "/",
        headers: {
            ["X-Foo2"]: "customed"
        },
        body: {
            name: "Li"
        }
    });
    let = response = await request.send();
    console.log(response);
    let dom =parser.parseHTML(response.body);
    console.log(dom);
    let viewport = images(800,600);

    render(viewport,dom);
    viewport.save("viewport.jpg")

}();


// const client = net.createConnection({
//     host: "127.0.0.1",
//     port: 8088
// }, () => {
//     // 'connect'listener.
//     console.log('connected to server ');
//     client.write(
//         ` POST/HTTP/1.1\r
//             Content-Type:application/x-www-form-urlencoded\r
//             Content-Length:11\r
//             \r
//             name=Li`);
// });

// client.on('date', (date) => {
//     console.log(date.toString());
//     client.end();

// })

// let headers = Object.keys(options.headers).map(name => `${name}:${options.headers[name]}`).join("\n");

// if (connection)
//     connection.write(requestLine + "\r\n" + headers + "\r\n\r\n" + b)
// else {
//     const connection = net.createConnection({ host: options.host, port: options.port || 80 },
//         () => {
//             connection.write(requestLine + "\r\n" + headers + "\r\n")
//         })
// }


// const net = require('net');

// //
// class Request {
//   // method, url = host + port + path
//   // body: k/v
//   // headers

//   constructor(options) {
//     this.method = options.method || 'GET';
//     this.host = options.host;
//     this.path = options.path || '/';
//     this.port = options.port || 80;
//     this.body = options.body || {};
//     this.headers = options.headers || {};

//     if (!this.headers['Content-Type']) {
//       this.headers['Content-Type'] = 'application/x-www-form-urlencoded';
//     }

//     if (this.headers['Content-Type'] === 'application/json') {
//       this.bodyText = JSON.stringify(this.body);
//     }

//     if (this.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
//       this.bodyText = Object.keys(this.body)
//         .map((key) => {
//           return `${key}=${encodeURIComponent(this.body[key])}`;
//         })
//         .join('&');
//       this.headers['Content-Length'] = this.bodyText.length;
//     }
//   }

//   toString() {
//     return `${this.method} / HTTP/1.1\r\nHost: 127.0.0.1\r\n${Object.keys(
//       this.headers,
//     )
//       .map((key) => `${key}: ${this.headers[key]}`)
//       .join('\r\n')}\r\n\r\n${this.bodyText}\r\n\r\n`;
//   }

//   open(method, url) {}

//   send(connection) {
//     return new Promise((resolve, reject) => {
//       if (connection) {
//         connection.write(this.toString());
//       } else {
//         connection = net.createConnection(
//           {
//             host: this.host,
//             port: this.port,
//           },
//           () => {
//             console.log('connected to server!');
//             connection.write(this.toString());
//           },
//         );

//         connection.on('data', (data) => {
//           new Response(data);
//           console.log(data.toString());
//           connection.end();
//         });
//         connection.on('end', () => {
//           console.log('disconnected from server');
//         });
//         connection.on('error', (err) => {
//           console.log(err);
//           connection.end();
//         });
//       }
//     });
//   }
// }