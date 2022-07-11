const users=require('./users')
const http=require('http')
console.log(users)

function getAllUsers(){
    // const start=(page-1)*per_page
    // const end=(start)*per_page
    // return users.slice(start,end)
    return users
}
function getUserbyid(index){
    const user=users.find(u=>u.id==index)
    if(!user){return null}
    else{
        return user
    }

    function adduser(name){
        const user={
            id:users.length+1,
            name:name
        }
        users.push(user)
        return user
    }
//    if(index>0&&index<users.length) {
//     return users[index]
//    }else{
//     return null
//    }
}
const server=http.createServer((req,res)=>{
    // res.writeHead(200,{'Content-Type':'application/json'})
    // res.end(JSON.stringify(users))
    try{
        const [url,query]=req.url.split('?')
        if(url==='/users'){
            if(req.method==='GET'){
                res.writeHead(200,{'Content-Type':'application/json'})
                res.end(JSON.stringify(getAllUsers()))
            }else if(req.method==='POST'){
                const q=new URLSearchParams(`?{query}`)
                console.log(q)
                const user=q.get('name')
                res.writeHead(200,{'Content-Type':'application/json'})
                res.end(JSON.stringify(adduser(user)))
            }
        }else if(url.startsWith('/users/')){
            const id=Number(url.split('/')[2])
            res.writeHead(200,{'Content-Type':'application/json'})
                res.end(JSON.stringify(getUserbyid(id)))
        }
    }
    catch(err){
        
        console.log(err)
    }
})
server.listen(3000,()=>{
    console.log('listing to 3000')
})

