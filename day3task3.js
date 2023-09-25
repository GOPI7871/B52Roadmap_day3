var xhr =new XMLHttpRequest();

xhr.open("GET","https://restcountries.com/v3.1/all");

xhr.send();

 xhr.onload = function(){

    var api = JSON.parse(xhr.response);
    console.log(api);
    for(let i=0;i<api.length;i++){
        console.log(`NAMES:${api[i].name.common} REGION:${api[i].region} SUB-REGION:${api[i].subregion} POPULATION:${api[i].population}`)
    }
}