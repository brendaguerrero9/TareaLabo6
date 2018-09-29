
function convertirMt(medida,unidad,tipoMedida){
    var uni="m";
    if(unidad == uni){
        console.log(medida * 100 + "cm");
    }else{
        console.log(medida * 0.01 + "m");
    }
}

function convertirKm(medida,unidad,tipoMedida){
    var uni = "km";
    if(unidad == uni){
        console.log(medida * 1000 + "m");
    }else{
        console.log(medida * 0.001 + "km");
    }
}

function convertirPie(medida,unidad,tipoMedida){
    var uni = "pie";
    if(unidad == uni){
        console.log(medida * 0.3048 + "m");
    }else{
        console.log(medida * 3.2808 + "pie");
    }
}

function convertirCelsiusFahrenheit(medida,unidad,tipoMedida){
    var uni = "f";
    if(unidad == uni){
        console.log((medida - 32)/1.8 + "C");
    }else{
        console.log((medida * 1.8)+ 32 + "F");
    }
}

function convertirKelvinFahrenheit(medida,unidad,tipoMedida){
    var uni = "k";
    if(unidad == uni){
        console.log(1.8*(medida - 273) + 32 + "F");
    }else{
        console.log((medida + 459.67) * 5/9 + "K");
    }
}

function convertirKelvinCelsius(medida,unidad,tipoMedida){
    var uni = "k";
    if(unidad == uni){
        console.log(medida - 273.15 + "C");
    }else{
        console.log(medida + 273.15 + "K");
    }
}



