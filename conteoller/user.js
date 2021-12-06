
const http = require('http')
module.exports =http.createServer((request, response)=>{ 
    if(request.method=="POST"){
        response.write(" i am from POST")
        response.end()
    }
    if(request.method=="DELETE"){
        response.write("i am from DELETE")
        response.end()
    }
    if(request.method=="UPDATE"){
        response.write("i am from UPDATE")
        response.end()
    }
   if ( request.method=="GET"&&request.url=="/students"){
       console.log(request.url)
     response.writeHead(200,{"Content-Type":"text/html"})
     response.write("<html><body><h1>hello</h1></body></html>")
    response.end()
    }
    else{
 response.end()
 console.log("response is not found")
    }
    

})