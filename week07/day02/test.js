const asyncPromise = new Promise((resolve, reject) => {
    if(true){
        resolve('Stuff is worked');
    } else {
        reject('Error,it broke');
    }
})

asyncPromise
    .then(result => console.log(result))
    .catch(() => alert("error"))