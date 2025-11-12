const promise = new Promise((resolve,reject)=>{
    const number = Math.floor(Math.random()*2);
    setTimeout(()=> number > 4 ? resolve(number) : reject())
})

