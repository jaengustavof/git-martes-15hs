//Navigation Menu
    menuBtn = document.querySelector('nav .button');
    menuLst = document.querySelector('nav .menu');

    menuBtn.onclick = () => {
        
        menuLst.classList.toggle('active') ? 
        menuBtn.innerHTML = '&times;' : 
        menuBtn.innerHTML = '&equiv;'; //Si existe lo quita, si no existe lo agrega eso lo hace el toggle. Si no esta, cambia el contenido del boton por un reloj '&times;'. de lo contrario lo cambia por las tres lineas del menu hamburguesa
    }