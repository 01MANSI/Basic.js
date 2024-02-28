const heading=document.getElementById('head')
heading.style.backgroundColor='skyblue'
heading.style.textAlign='right'
heading.style.padding='20px'
const subheading=document.getElementById('subhead')
subheading.style.color='brown'
const ul=document.querySelector('.fruits')
ul.style.backgroundColor='grey'
ul.style.padding='30px'
ul.style.borderRadius='10px'
const list=document.querySelectorAll('.fruit')
for(i=0;i<list.length;i++)
{
    list[i].style.backgroundColor='lightgrey'
    list[i].style.padding='10px'
    list[i].style.margin='5px'
    list[i].style.listStyleType='none'
    list[i].style.borderRadius='10px'
}
const evenfruit=document.querySelectorAll('.fruit:nth-child(even)')
for(i=0;i<evenfruit.length;i++)
{
    evenfruit[i].style.backgroundColor='brown'
}