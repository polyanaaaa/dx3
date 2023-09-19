function Zerox1(){
    const imagem = document.querySelector("img1");
    const titulo = document.querySelector("h1");
    const A = document.querySelector("#valor1").value;
    const B = document.querySelector("#valor2").value;
    const C = document.querySelector("#valor3").value;
    

    if(A=='1' && B =='1' && C=='0'||A=='0' && B =='0' && C=='1'){
        titulo.innerHTML = "C Ganhou!";
        imagem.setAttribute("src","./img/vencedor.png");
        imagem.setAttribute("width","300px");
    }
    else if(A=='1' && B =='0' && C=='1'||A=='0' && B =='1' && C=='0'){
        titulo.innerHTML = "B Ganhou!";
        imagem.setAttribute("src","./img/vencedor.png");
        imagem.setAttribute("width","300px");
    }
    else if(A=='1' && B =='0' && C=='0'||A=='0' && B =='1' && C=='1'){
        titulo.innerHTML = "A Ganhou!";
        imagem.setAttribute("src","./img/vencedor.png");
        imagem.setAttribute("width","300px");
    }
    else{
      alert("deu ruim")
    }

}
function Resultado(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const x = document.querySelector('#x').value;
    const y = document.querySelector('#y').value;
    
    if((x <= 432)&&(x > 0) && (y <= 468)&&(y > 0)){
        texto.innerHTML = "Dentro";
        imagem.setAttribute("src","./img/win.webp");
        imagem.setAttribute("width","300px");
    }

   else {
        texto.innerHTML = "Bola perdida... :(";
        imagem.setAttribute("src","./img/lose.webp");
        imagem.setAttribute("width", "70%");
    }
}
function Viceganhador(){
    var val1 = parseInt(document.querySelector('#valor1').value);
    var val2 = parseInt(document.querySelector('#valor2').value);
    var val3 = parseInt(document.querySelector('#valor3').value);
    const texto = document.querySelector("h1");
    
    
    if ((val1 > val2 && val1 < val3) || (val1 < val2 && val1 > val3)){
    texto.innerHTML = (val1);
    }
    else if ((val2 > val1 && val2 < val3) || (val2 < val1 && val2 > val3)){
    texto.innerHTML= (val2);
    }
    else if ((val3 > val1 && val3 < val2) || (val3 < val1 && val3 > val2)){
    texto.innerHTML =  (val3);
    }
    else if ( ( val1 == val2)){
    texto.innerHTML =  (  "os dois vices são de valores: " + val1) 
    }
    else if ( ( val1 == val3)){
     texto.innerHTML =(  "os dois vices são de valores: " + val1) 
    }
    else if ( ( val3 == val2)){
    texto.innerHTML = ( "os dois vices são de valores: " + val3) 
    }
    
    
    
     }
