
document.addEventListener("DOMContentLoaded", function(){
      var btncalcular = document.getElementById("btn-calcular")

       btncalcular.addEventListener("click", function(){
         var precioPieza=parseFloat(document.getElementById("input-precio").value)
         var largo =parseFloat(document.getElementById("input-largo").value)
         var ancho = parseFloat(document.getElementById("input-ancho").value)
         if(isNaN(largo) || isNaN(ancho)){
            alert("Por favor ingrese valores numéricos válidos para el largo y el ancho.")
            return
         }
         var area=(largo*100)*(ancho*100) 
         var areaAzulejo=25*25

         var cantidad=(area/areaAzulejo)
         var precioTotal=(cantidad*precioPieza)
         alert("El area es "+ area + " cm²"+
            "\nLa cantidad de azulejos necesarios es: " + cantidad
            +"\nEl precio total es: " + precioTotal + "$"
         )
         
         
      })
   
    })
