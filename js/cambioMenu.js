/*let titulo=document.getElementById("titulo");
titulo.textContent="BUENAS TARDES HA SIDO HACKEADO";*/
/*jQuery('document').ready(function($){

    var menuBtn = $('.menu-icon'),
        menu = $('.navigation ul');

    menuBtn.click(function(){

        if(menu.hasClass('show') ){

            menu.removeClass('show');
        } 
        else{
            menu.addClass('show');
        }
    });
})*/

window.addEventListener("scroll",cambiarColor)
function cambiarColor(){

    let menu=document.getElementById("menu2");

    console.log(document.documentElement.scrollTop)
    if(document.body.scrollTop||document.documentElement.scrollTop<=590){
        menu.classList.add("navbar-t");
        menu.classList.remove("navbar-c");
    }
    else{
        menu.classList.add("navbar-c");
        menu.classList.remove("navbar-t");
    }
}