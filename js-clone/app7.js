const h1=document.querySelector("div.abc:first-child h1");

function handleTitleClick(){
    
    h1.classList.toggle("clicked");
    /*const clickedClass="clicked";
   if(h1.classList.contains(clickedClass)){
    h1.classList.remove(clickedClass);
   }
   else{
    h1.classList.add(clickedClass);
   }*/
}
h1.addEventListener("click",handleTitleClick);