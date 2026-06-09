function orderPizza()
{
    return new Promise((resolve,reject)=>{
        let Pizzaready = true;
    if(Pizzaready)
    {
        resolve("Pizza is ready");
    }
    else{
        reject("Pizza not ready");
    }
});
}
orderPizza()
.then(result => console.log(result))
.catch(error => console.log(error))
.finally(()=>{ console.log("order delevered ok")});