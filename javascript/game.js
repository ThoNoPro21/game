/*------------------------------Header------------------*/

const header=document.getElementById('header')
const headerr=document.querySelector('.header')
const menuMobile=document.getElementById('menu-bar')

menuMobile.onclick=function()
{
  const closed=header.clientHeight===46
  if(closed){
      headerr.style.height='auto';
      header.style.height='auto'
      menuMobile.style.background='yellow'
      
  }
  else{
      header.style.height=null;
      headerr.style.height=null;
      menuMobile.style.background='red'
  }
}



/*------------------------------HEADER LOGO RIGHT------------------*/
const toggleLogo = document.querySelector(".fa-gear")
    toggleLogo.addEventListener("click", function(event) {
    event.target.nextElementSibling.classList.toggle("active")
})
const exit=document.getElementById('js-exit')
const openn=document.getElementById('setting')  
    function exitform(){
        openn.classList.remove("active")
    }
    
   exit.addEventListener('click',exitform)
/*  -----------------------------------   slider ---------------------------      */
/* 
let slideIndex = 0;
   showSlides();

function showSlides() {
  let i;
  let slides = document.querySelectorAll(".slider");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = "block";  
  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
 */
/* ----------------------------------------------------------------------------- */
var formheat=document.querySelector(".form_heat")
function show_heart(){
  if(formheat.style.display==='none')
  {
     formheat.style.display='block'
  }
  else{
    formheat.style.display='none'
  }
  }


/* --------------------------------------------------------------------------- */
var bgnapthe=document.querySelector(".bg_form-napthe")
function shownapthe(){
    bgnapthe.style.display='block'
}

function hidenapthe(){
  if(bgnapthe.style.display==='block')
  {       bgnapthe.style.display='none'
}
}


/*------------------------------MESSENGER-----------------------------------*/
const mess=document.querySelectorAll(".js-icon")
const showMess=document.querySelector(".js-showForm-chat")
const closeMess=document.querySelector(".js-close")
function showmess(){
    
showMess.classList.add('open')
}
for(const mes of mess){
    mes.addEventListener('click',showmess) 
  
}
function hidemess(){
    showMess.classList.remove('open')
}
closeMess.addEventListener('click',hidemess)

/*------------------------------CONTENT------------------*/



const buyBtns = document.querySelectorAll('.js-buys')
const dangnhap = document.querySelector('.js-dangnhap')
const close=document.querySelector('.login-close')
const thanhtoan_game=document.querySelector('.thanhtoan_game')
const close_thanhtoan=document.getElementById('close_thanhtoan')
const closedk=document.querySelector('.login-closes')
const dangkii=document.querySelector('.dangki')
function showForm() {
  dangnhap.classList.add('open')
}
function hideForm() {
  dangnhap.classList.remove('open')
}
   close.addEventListener('click',hideForm)




   function showFormm() {
    dangkii.classList.add('open')
  }
  function hideFormm() {
    dangkii.classList.remove('open')
  }
    
     closedk.addEventListener('click',hideFormm)





function showForms() {
  thanhtoan_game.classList.add('open')
}
function hideForms() {
  thanhtoan_game.classList.remove('open')
}
   for(const buyBtn of buyBtns) {
       buyBtn.addEventListener('click', showForms)
   }
   close_thanhtoan.addEventListener('click',hideForms)


/*-------------------------------showtextmess---------------------------*/
function showtext() {
    const newText=document.getElementById('newtext').value
    document.getElementById('show-text').innerText=newText;

 }
 /*-------------------------------ACtive nav------------------------*/

var Lis = header.getElementsByClassName("LI");
for (var i = 0; i < Lis.length; i++) {
  Lis[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

/* --f--------------------------------------------------------------------- */
const ic_h=document.querySelectorAll('#adds_card')
for(const ic_hs of ic_h){
  ic_hs.parentElement.addEventListener('click',function(){
    if(ic_hs.style.color==='red')
    {
      ic_hs.style.color='black'
    }
   else
   {
    ic_hs.style.color='red'
  }})
}

/* ---------------------------------------------------------------- */
/* const addcards=document.querySelectorAll('#add_card')
for(const adcard of addcards)
{
  adcard.addEventListener('click',function(){
        
            if(ic_hs.style.color==='red')
            {
              ic_hs.style.color='black'
            }
           else
           {
            ic_hsstyle.color='red'
           }
     })
    
    }
   */
 /* --------------------------------------showheart------------------------------------------- */
 const addcard=document.querySelectorAll('#add_card')
 for(const adcard of addcard){
  adcard.addEventListener('click',function(event){{
  var btnItem=event.target
  var product=btnItem.parentElement
  var productma=product.querySelector(".headingma").innerText
   addcardItem(productma)
 }})

 }
function addcardItem(productma){
  var addtr=document.createElement("tr")
  var addItem=document.querySelectorAll(".form_heat tr")
  for(var i=0;i<addItem.length;i++)
  {
    var prma=document.querySelectorAll(".title")
  
    if(prma[i].innerHTML==productma){
  
      return;
    }
  }
  
  var trcard='<tr><span class="title">'+productma+'</span></tr>'
  addtr.innerHTML=trcard
  var tablecard=document.querySelector(".form_heat")
  tablecard.append(addtr)
}

/* ---------------------------------------------Showleft-------------------------------------------------------- */
const container_header=document.querySelector(".container_header")
const btnicon=document.getElementById("menu_headerleft")
const content=document.querySelector(".content")
const list=document.querySelector(".list")
const contact=document.querySelector(".contact")
const footer=document.querySelector("footer")
function showheaderleft(){
  var btnleft=document.querySelector(".Nav_LEFT")
  if(btnleft.style.width==='0px')
  {
    btnleft.style.display='block'
    btnleft.style.width='15rem'
    btnicon.style.left="14rem"
    container_header.style.padding=''
    content.style.padding=''
    contact.style.padding=''
    footer.style.padding=''
  }
  else{
    btnleft.style.display='none'
  btnleft.style.width='0px'
  btnicon.style.left="0"
  container_header.style.padding='0'
  content.style.padding='0'
  contact.style.padding='0'
  footer.style.padding='0'
 
}
}
/* -------------------------------------------------------------------------------------- */
/* function Register(e){
event.preventDefault()

var dname=document.getElementById('dname').value
var dkhau=document.getElementById('dkhau').value
var dangki={
  dname:dname,
  dkhau:dkhau,
}
var json=JSON.stringify(dangki)
localStorage.setItem(dname,json)
alert("Đăng kí thành công")
document.getElementById('dname').value=''
document.getElementById('dkhau').value=''

}

function Login(){
  event.preventDefault()
  var ddname=document.getElementById('ddname').value
  var ddkhau=document.getElementById('ddkhau').value
  var dangki=localStorage.getItem(ddname)
  var data=JSON.parse(dangki)
  if(ddname===data.dname&&ddkhau===data.dkhau)
  {
  alert("Đăng nhập thành công")
  document.getElementById('show_TTnhap').innerHTML='('+ddname+')'
  document.getElementById('ddname').value=''
  document.getElementById('ddkhau').value=''
  }
  
} */

  var fname=localStorage.getItem('ds')
  var a=JSON.parse(fname)
  document.getElementById('Taikhoan').innerHTML=a.dname
  document.getElementById('Email').innerHTML=a.dmail
  document.getElementById('Ngaysinh').innerHTML=a.ddate
  

function dangxuat(){
  document.getElementById('Taikhoan').innerHTML=null
  document.getElementById('Email').innerHTML=null
  document.getElementById('Ngaysinh').innerHTML=null
}
function nut_TT(){
if(document.getElementById("TTnhap").style.display==='flex'){
  document.getElementById("TTnhap").style.display='none'
}
else{
document.getElementById("TTnhap").style.display='flex'
}
}
function Napthe(){
  var list1=[]
  var list2=[]
  var list3=[]
  var list4=[]
  var n = 1;
  var x = 0;
  var d=new Date();
    
  /* var fname=localStorage.getItem('ds')
  var a=JSON.parse(fname) */
    var e= document.getElementById("loaithe1")
    var giaTri = e.options[e.selectedIndex].text
    var AddRown = document.getElementById('show_napthe')
    var NewRow = AddRown.insertRow(n);

    list1[x] = document.getElementById("loaithe").value
    list2[x] = giaTri
    list3[x] = d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear()
    list4[x]=a.dname

    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);
 
    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];



    n++;
    x++;
  }




