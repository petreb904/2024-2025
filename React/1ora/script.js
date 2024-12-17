document.getElementById('doboz').style.backgroundColor ="green";
document.getElementById('doboz').style.color ="white";
fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(res => console.log(res));
 
fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(res => document.getElementById('doboz').innerHTML = res[0].title);