document.getElementById("resumen").onclick = function(){
    var cantidad = parseFloat(document.getElementById("cantidad").value);
    var categoria = document.getElementById("categoria").value;
    // alert(cantidad);
    // alert(categoria);
    if(cantidad>0){
        if(categoria=="Estudiante"){
            cantidad=cantidad*0.8;
        }
        else if(categoria=="Trainee"){
            cantidad=cantidad*0.5;
        }
        else if(categoria=="Junior"){
            cantidad=cantidad*0.15;
        }
        document.getElementById("pagar").innerText = "Total a pagar: $" + cantidad;
    }
    else{
        alert("El valor a pagar debe ser mayor a 0");
    }    
}
document.getElementById("borrar").onclick = function(){
    document.getElementById("cantidad").value = "";
    document.getElementById("pagar").innerText = "Total a pagar: $";
    // document.getElementById("categoria").value =  ;
}