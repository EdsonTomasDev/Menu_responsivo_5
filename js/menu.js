function ativar_menu(){
    //Captura o elemento pelo id
    const obj = document.querySelector("#lista_menu");
    const classes = obj.classList;

    //alert(classes);

    //Adiciona a classe que faz aparecer a ul
    classes.toggle('menu_lista-ativa');



}

//Seleciona o atributo da div que contém as barras
const botao = document.querySelector('[ativar-menu]');
//Adiciona o evento click para chamar a função ativa_menu
botao.addEventListener('click', ativar_menu);