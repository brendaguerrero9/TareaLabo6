function menu(){
    console.log("Bienvenida que desea realizar: ");
    console.log("1.Agregar Producto");
    console.log("2.Modificar Stock");
    console.log("3.Registrar venta y reducir stock");
    console.log("4.Mostrar promedio de ventas realizadas");
    console.log("5.Mostrar productos con Stock 0");
    console.log("0.Salir del sistema");
}

function agregarProd(arreglo){
    var producto = new Object();
    producto.cod = prompt("Ingrese el codigo");
    producto.descriprod = prompt("Descripcion del producto");
    producto.tipo = prompt("Tipo de producto");
    producto.compra = prompt("Precio de compra");
    producto.venta = prompt("Precio de venta");
    producto.stock = prompt("Stock del producto");
    arreglo.push(producto);
    return arreglo;
}

function modificar(num, arreglo){
    var nuevoStock = prompt("Ingrese el nuevo stock:");
    nuevoStock = parseInt(nuevoStock);
    if(typeof nuevoStock != "number" || nuevoStock<0){
        console.log("Intentelo de nuevo, valores no correspondientes");
    }else{
       arreglo[num].stock = nuevoStock;
    }
}
function vender(num, arreglo){
    var v = prompt("Cantidad de productos a vender");
    v = parseInt(v);
    if(v < 0 || v <= arreglo[num].stock){
        console.log("No se puede realizar accion, intentelo de nuevo");
    }else {
        arreglo[num].stock = arreglo[num].stock - v; 
        return arreglo[num].venta * v;
    }
}

function mostrar(arreglo){
    var contador = 0;
    for(let i in arreglo){
        console.log( contador + "Codigo" + i.cod + "Stock" + i.stock);
    }
}

function mostrarStock(arreglo){
    for(let i of arreglo){
        if(i.stock == 0){
            console.log("Codigo: "+ i.codigo +" Stock: "+ i.stock);
        }        
}


function sistem(){
    var opc = 1;
    let arr = [];
    let acum = 0;
    while(opc != 0){
        menu();
        opc = prompt("Ingrese una opcion");
        if(opc === 0){
            break;
        }else if(opc ==1){
            console.log("Agregando");
            var aux = agregar(arr);
        }else if(opc == 2){
            console.log("Posicion del stock a modificar o introduzca 0 para cancelar");
            mostrar(aux);
            var n = prompt("Ingrese un numero: ");
            (n==0)? "" : modificar(n, aux);
            
        }else if(opc == 3){
            console.log("Posicion del producto que desea vender o introduzca 0 para cancelar");
            mostrar(aux);
            var n = prompt("Ingrese un numero: ");
            (n==0)? "" : acum = acum + vender(n, aux);
        }else if(opc == 4){
            console.log("El total adquirido por ventas es:"+ acum);
        }
        else if(opc == 5){
            mostrarStock(aux);
        }
    }   
}
}
