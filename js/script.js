var countLike1 = 10;
var countLike2 = 13;
var countLike3 = 10;

function add_like(element){
    let contador;
    if(element == '1'){
        contador = countLike1++;
    }else if(element == '2'){
        contador = countLike2++;
    }else if(element == '3'){
        contador = countLike3++;
    }
    let like = document.querySelector('#user_like_' + element);
    like.innerText = contador + " like(s)";
}