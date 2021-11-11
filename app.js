
let contador =  0;

let imgArr = [
    "img/batman.jpg",
    "img/homem-aranha.jpg",
    "img/Captain-America.jpg",
];

const iniciar = ()=>{

    document.getElementById("imagem").src = imgArr[contador];
    contador++;

    if (contador == imgArr.length) 
    {
        contador = 0;
    }

}

const button = document.getElementById('btn').addEventListener('click', iniciar)