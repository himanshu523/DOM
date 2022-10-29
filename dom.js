//console.log(document.body)
//console.log(document.title)
//document.querySelector('title').innerText="DOM MANIPULATION";
//console.log(document.all)
//console.log(document.all[5])


//const headertitle= document.getElementById('header-title');
//console.log(headertitle);

//GETELEMENTBYID

//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header =document.getElementById('main-header');
//console.log(headertitle);
//headerTitle.textContent ='hello';
//headerTitle.innerText='good bye';
//headerTitle.innerHTML='<h3>helloo</h3>';
//header.style.borderBottom='solid 3px #000';

//changing additem to bold and green

//var item =document.querySelector('.title');
//item.style.fontWeight ="bold";
//item.style.color ="green";

//GETELEMENTBYCLASS

//var item = document.getElementsByClassName('list-group-item');
//console.log(item);
//item[0].style.fontWeight='bold';
//item[1].style.fontWeight='bold';
//item[2].style.fontWeight='bold';
//item[3].style.fontWeight='bold';
//item[2].style.backgroundColor='green';
//for(var i=0;i<item.length;i++)
//{
//    item[i].style.fontWeight='bold';
//}

//GETELEMENTBYTAGNAME

//var li =document.getElementsByTagName('li')
//console.log(li);
//console.log(li[4]);

//QUERYSELECTOR

//var header = document.querySelector('#main-header');
//header.style.borderBottom ='solid 4px #ccc';


//var input = document.querySelector('input');
//input.value="value";

//var submit = document.querySelector('input[type="submit"]');
//submit.value ="send";

//var lastitem =document.querySelector('.list-group-item:last-child');
//lastitem.style.color='blue';

//var seconditem = document.querySelector('.list-group-item:nth-child(2)');
//seconditem.style.backgroundColor ='green';

//var thirditem = document.querySelector('.list-group-item:nth-child(3)');
//thirditem.style.display='none';



//QUERYSELECTORALL

//var titles =document.querySelectorAll('.title');
//titles[1].backgroundColor='green';

//var odd = document.querySelectorAll('li:nth-child(odd)');
//var even =document.querySelectorAll('li:nth-child(even');

//for(var i=0;i<odd.length;i++)
//{
//   odd[i].style.backgroundColor='green';
//    even[i].style.backgroundColor ='#ccc';
//}


//TRAVERSING THE DOM
var itemList =document.querySelector('#items');

//PARENTNODE
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='red';
//console.log(itemList.parentNode.parentNode);

//PARENTELEMENT
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor='red';
//console.log(itemList.parentElement.parentElement);

//CHILDNODES
//console.log(itemList.childNodes);
//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor='yellow';

//Firstchild
//console.log(itemList.firstChild);

//FIRSTELEMENTCHILD
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent='hello 1';

//LASTCHILD
//console.log(itemList.lastChild);
//LASTELEMENTCHILD
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent='hello 4';

//NEXTSIBLING
//console.log(itemList.nextElementSibling);
//NEXTELEMENTSIBLING
//console.log(itemList.nextElementSibling);

//PREVIOUSSIBLING
//console.log(itemList.previousSibling);
//PREVIOUSELEMENTSIBLING
//itemList.previousElementSibling.getElementsByClassName.color='green';



//createElement

//create a div
//var newDiv =document.createElement('div');

//add class
//newDiv.className='hello';

//add id
//newDiv.id='hello1';

//add attr
//newDiv.setAttribute('titile','hello div');

//create text node
//var newDivText = document.createTextNode('hello world');

//add text to div
//newDiv.appendChild(newDivText);
//var container = document.querySelector('header .container');
//var h2= document.querySelector('header h2');

//console.log(newDiv);

//newDiv.style.fontSize='30px';
//container.insertBefore(newDiv,h2);

//
// IMPORTANT TASK
//var parent = document.querySelector('#items');
//parent.innerHTML =`<li class="list-group-item">hello </li>${parent.innerHTML}`;

//var head = document.querySelector('#header-title');

//head.innerHTML ='<h3>hello world</h3>'+ head.innerHTML;


