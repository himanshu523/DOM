console.log(document.body)
console.log(document.title)
document.querySelector('title').innerText="DOM MANIPULATION";
console.log(document.all)
console.log(document.all[5])


const headertitle= document.getElementById('header-title');
console.log(headertitle);

//GETELEMENTBYID

console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header =document.getElementById('main-header');
console.log(headertitle);
headerTitle.textContent ='hello';
headerTitle.innerText='good bye';
headerTitle.innerHTML='<h3>helloo</h3>';
header.style.borderBottom='solid 3px #000';

//changing additem to bold and green

var item =document.querySelector('.title');
item.style.fontWeight ="bold";
item.style.color ="green";

//GETELEMENTBYCLASS

var item = document.getElementsByClassName('list-group-item');
console.log(item);
//item[0].style.fontWeight='bold';
//item[1].style.fontWeight='bold';
//item[2].style.fontWeight='bold';
//item[3].style.fontWeight='bold';
item[2].style.backgroundColor='green';
for(var i=0;i<item.length;i++)
{
    item[i].style.fontWeight='bold';
}