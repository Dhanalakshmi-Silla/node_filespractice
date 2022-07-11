const fs=require('fs')
const path=require('path')
fs.readFile(path.join(__dirname,"hello.txt"),'utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log('read async file data',data)
    }
})

fs.writeFile(path.join(__dirname,"hello2.txt"),"Hello",'utf-8',(err)=>{
    if(err){
        console.log(err)
    }
    console.log('file created')
})

fs.mkdir(path.join(__dirname,'Meta'),(err)=>{
    if(err){
        console.log(err)
    }
    console.log('dir created')
    fs.rename(path.join(__dirname,"hello2.txt"),path.join(__dirname,'Meta','new_hello.txt'),(err)=>{
        if(err){
            console.log(err)
        }
        console.log('rename done')
    })
})