const button = document.querySelectorAll('.btn')
const body = document.querySelector('body')

button.forEach(function (buttun) {
    buttun.addEventListener('click',function(e){
        console.log(e);
    if(e.target.id === 'red'){
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id === 'grey'){
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id === 'blue'){
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id === 'green'){
        body.style.backgroundColor=e.target.id;

    }
})
})