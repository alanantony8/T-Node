const http = require('http');

 arr=[1,2,3,4]
 

http.createServer(function (req, res) {
    console.log(req.method);
    console.log(req.url);
    
    let x=(req.url).split('/');
    if(x[1]=="elements"){
        if(req.method==='GET'){
            console.log(arr)
            res.write(JSON.stringify(arr));
            res.end()
            
        }
        else if(req.method==='POST'){
  
            // let body = '';

            // req.on('data', function (chunk) {
            //     body += chunk;
            // });
            // req.on('end', function () {
            //     let dt=body.split("=")
            //     arr.push(Number(dt[1]))
            //     res.write(JSON.stringify(arr));
            //     res.end();
            // });
            let data=req.url.split("/")
            console.log(data[2]);
            index=data[2];
            console.log("------------------------");
            //arr.splice(index,1);
            res.write(JSON.stringify(arr[index]))
            res.end()
   


        }

        else if(req.method==='PUT'){

            let body ='',dt;
            req.on('data', function (chunk) {
                body += chunk;
            })

            let data=req.url.split("/")
            console.log(data[2]);
            index=data[2];
            
            req.on('end', function () {
                console.log(body)
                console.log("***");
                dt=body.split("=")
                console.log(dt);
                value=Number(dt[1])
                arr[index]=value;
                console.log(arr);
                res.write(JSON.stringify(arr))
                res.end()
            });
            
        }
        else{  
            let data=req.url.split("/")
            console.log(data[2]);
            index=data[2];
            console.log("------------------------");
            arr.splice(index,1);
            res.write(JSON.stringify(arr))
            res.end()                     // DELETE          
        }

    }

   


}).listen(3000, function() {
    console.log("server start at port 3000"); 
});