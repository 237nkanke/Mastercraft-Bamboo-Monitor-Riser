
let nka = document.querySelector('#az');
console.log(nka)
nka.addEventListener('click' , show)

function show()
{
    document.getElementById('ti').style.display='block';
    document.getElementById('d1').style.display='block';

}
let cc = document.querySelector('#c1');
console.log(cc)
cc.addEventListener('click' , come)

function come()
{
    document.getElementById('h1').style.display='block';
    document.getElementById('d1').style.display='block';

}
let ee= document.getElementById('ii');
ee.addEventListener('click' , hey)

function hey()
{
    document.getElementById('ti').style.display="none"
    document.getElementById('d1').style.display='none';

}
let dd= document.getElementById('j1');
dd.addEventListener('click' , go)

function go()
{
    document.getElementById('h1').style.display="none"
    document.getElementById('d1').style.display='none';
 
}

let p1= document.querySelector('#p1');
p1.addEventListener('change' , display)

function display()
{

    document.getElementById('p11').style.display="flex";
    document.getElementById('h1').style.height="135vh";
    

}