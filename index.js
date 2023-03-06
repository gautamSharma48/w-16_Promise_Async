
import fetch  from "node-fetch";

let url= 'https://jsonplaceholder.typicode.com/users';

function promiseFetch(){
    let fetchData = new Promise((resolve, reject) => {
        fetch(url).then(response=>response.json()).then(data=>resolve(data)).catch(err=>reject(err))
    });
    fetchData.then((msg)=>console.log(msg,"promise and await")).catch((msg)=>console.log(msg));
}



async function fetchCharacter(){
    try{
        let response=await fetch(url);
        let data = await response.json();
        console.log(data,"async await");

    }catch(err){
        console.log(err);
    }
}

promiseFetch();
fetchCharacter();
