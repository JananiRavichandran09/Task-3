// 1) How to compare two JSON have the same properties without order.
let obj1 = {
    name:"person 1",
    age:5
} 
let obj2 = {
    age:5,
    name:"person 1"
}

let result1 = obj1.name===obj2.name;
let result2 = obj1.age===obj2.age;
let output = result1===result2;

console.log(output); 


// 2) Display all the country flag in the console.

let request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true);
request1.send();
request1.onload=function (){
    let data = request1.response;
    let result = JSON.parse(data);
    console.log(result);
    for(let  i=0; i<result.length; i++)
    {
        console.log(result[i].flags.png);
    }
}

// 3) (i)=> Display the all country names.

let request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all",true);
request2.send();
request2.onload=function (){
    let data = request2.response;
    let result = JSON.parse(data);
    console.log(result);
    for(let  i = 0; i < result.length; i++)
    {
        console.log(result[i].name.common);
    }
}

// (ii)=> Display the all country region.

let request3 = new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v3.1/all",true);
request3.send();
request3.onload=function (){
    let data = request3.response;
    let result = JSON.parse(data);
    console.log(result);
    for(let  i = 0; i < result.length; i++)
    {
        console.log(result[i].region);
    }
}

// (iii)=> Display the all country subregion.

let request4 = new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v3.1/all",true);
request4.send();
request4.onload=function (){
    let data = request4.response;
    let result = JSON.parse(data);
    console.log(result);
    for(let  i = 0; i < result.length; i++)
    {
        console.log(result[i].subregion);
    }
}

// (iv)=> Display the all country population.

let request5 = new XMLHttpRequest();
request5.open("GET","https://restcountries.com/v3.1/all",true);
request5.send();
request5.onload=function (){
    let data = request5.response;
    let result = JSON.parse(data);
    console.log(result);
    for(let  i = 0; i < result.length; i++)
    {
        console.log(result[i].population);
    }
}

//               -----------------------------------*****************-----------------------------------------