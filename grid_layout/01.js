var currentMenu;
var menu = document.querySelector('.menu');

function deactivate(elem){
    elem.classList.remove('on');
}

function activate(elem){
    elem.classList.add('on');
    currentMenu = elem;
}
function menuClickHandler(e){
    if(currentMenu){
        deactivate(currentMenu);
    }
    activate(e.target);
}

menu.addEventListener('click', menuClickHandler);