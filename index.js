
function dadosNaTela(dados){
    document.querySelector(".cidade1").innerHTML="Tempo em: "+dados.name
    document.querySelector(".temp").innerHTML= dados.main.temp+" ºC"
    document.querySelector(".texto-previsao").innerHTML=dados.weather[0].description
    document.querySelector(".humidade").innerHTML= "Humidade "+dados.main.humidity+"%"
    document.querySelector(".inco-previsao").src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".grau").innerHTML= dados.main.sea_level+ " Nível do mar"
    

    console.log(dados);
}


async function buscar(cidade){
    const dados= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta=> resposta.json())
     dadosNaTela(dados);
}


const key="bbf6bb38e43d1b6e8aea5ff4025e1663"
function cliquei(){
   const cidade= document.querySelector(".cidade").value;

    buscar(cidade);
}