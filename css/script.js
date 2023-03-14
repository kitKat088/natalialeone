let menuVisible = false;
//funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;  
        }
    }
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//funcion de animacion a las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("maq");
        habilidades[1].classList.add("est");
        habilidades[2].classList.add("arte");
        habilidades[3].classList.add("vest");
        habilidades[4].classList.add("amb");
        habilidades[5].classList.add("com");
        habilidades[6].classList.add("crea");
        habilidades[7].classList.add("manej");
        habilidades[8].classList.add("resp");
        habilidades[9].classList.add("ded");
    }
}
    
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}