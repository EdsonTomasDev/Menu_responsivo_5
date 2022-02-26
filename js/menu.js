function ativar_menu(){
    //Captura o elemento pelo id
    const obj = document.querySelector("#lista_menu");
    const classes = obj.classList;

    // alert(classes);

    //Adiciona a classe que faz aparecer a ul
    classes.toggle('menu_lista-ativa');
    
    //Percorre as 3 barras e adiciona uma classe para cada
    for(i=1; i <= 3; i++){

        let id_nome = "linha" + i;
    
        
        const obj_barras = document.querySelector("#" + id_nome);
        const classe_barras = obj_barras.classList;
        //Adiciona a classe que modificará a posição de cada barra
        classe_barras.toggle('mobile_menu_line' + i);
    }

}

//Seleciona o atributo da div que contém as barras
const botao = document.querySelector('[ativar-menu]');
//Adiciona o evento click para chamar a função ativa_menu
botao.addEventListener('click', ativar_menu);