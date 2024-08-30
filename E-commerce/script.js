var menuItems =document.getElementById('menuItems');
var menu=document.getElementById('menu-icon');
var body=document.querySelector('.container')
menu.addEventListener('click',()=>{
    menuItems.style.display='block'
})
body.addEventListener('click',()=>{
  menuItems.style.display='none'
})
/* ---------------------------------  page Product ------------------------- */

let pageProduct=document.querySelector('.pageProduct')
let smallImg=document.getElementsByClassName('small-img')
smallImg[0].onclick=()=>{
  pageProduct.src=smallImg[0].src
}

smallImg[1].onclick=()=>{
  pageProduct.src=smallImg[1].src
}

smallImg[2].onclick=()=>{
  pageProduct.src=smallImg[2].src
}

smallImg[3].onclick=()=>{
  pageProduct.src=smallImg[3].src
}
/* --------------------------- loginPage --------------------- */
