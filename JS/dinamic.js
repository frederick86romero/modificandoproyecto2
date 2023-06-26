const ini=document.querySelectorAll('#menu-a');
ini.forEach(function(item){
    item.addEventListener('click', function(e){
        const currenItem=document.querySelector('.modificado');
        currenItem.classList.remove('modificado');
        e.target.classList.add('modificado');
    });
});

const menuhamburguesa = document.querySelector('#menu-hamburguesa'),
menu = document.querySelector('#menu');

menuhamburguesa.addEventListener('click', (e)=>{

    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    const rutaActual = e.target.getAttribute('src');
    if(rutaActual== 'img/icons8-menú-24.png'){
        e.target.setAttribute('src', 'img/icons8-menú-24.png');

    }else{   e.target.setAttribute('src', 'img/icons8-menú1-24.png');
} 

});
