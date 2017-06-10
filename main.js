// # Desafío Latam / Bootcamp Front-end
// ### Evaluación JavaScript
// - Leer la prueba completa antes de comenzar.
// - Se puede utilizar internet, google, stackoverflow, blogs, y material previo del curso, etc .
// - Copia de código a compañeros será castigada con nota 0.
// - El código debe ser subido a la plataforma empieza en formato zip.
// ## Mini Twitter

// ### Se pide constuir una plataforma tipo *Twitter* de un sólo usuario:
// - Utilizando sistema de *grids* se debe dividir el viewport en **2 columnas** (Se recomienda Bootstrap):
//     - En la columna de la izquierda: Crear un campo de texto donde el usuario pueda ingresar el texto del *tweet* y un botón para confirmar la creación.
//     - El la columna de la derecha: Los *tweets* deben ser listados en bloques. (Cada *tweet* un nuevo *row*)

// - Cada *tweet* de la lista debe tener a su lado un link que contenga un *favicon* para dar *like*, un contador de likes (por defecto es cero) y un botón para eliminar el *tweet*.
// - El link del *favicon* debe dar like al *tweet*. Al hacer esto el *favicon* debe cambiar de color y el contador de *likes* -de ese tweet- debe aumentar en uno.
// - El link del *favicon* debe tener una clase **class='likeable'**. (jQuery)
// - Seleccionar con jQuery la clase *likeable* y agregar el evento **.onclick** para aumentar el contador en uno.
// - El botón de eliminar debe remover el *tweet* de la lista.

// ### Evaluación:
// - Utilización correcta de etiquetas semánticas HTML5.
// - Correcta implementación de sistema de grids: rows y cols.
// - El selector de jQuery funciona de manera correcta con la clase solicitada.
// - El evento onclick cambia el color del favicon y aumenta el contador en 1 del tweet específico.
// - El botón de eliminar remueve de la lista sólo el twit seleccionado.


/** iniciar contador de post en 1
 *  por cada post adicional +1
 *  a cada post asiganrle un id segun contador de post
 *  cada vez que se elimine un post contador de post - 1
 * 
 */
var cont1 = 0
var cont2 = 0
var w = "'none'"
var x = '<div class="w3-container w3-display-container w3-card-2 w3-white w3-round w3-margin"><span onclick="this.parentElement.style.display='+w+'" class="w3-button w3-theme-l3 w3-display-topright"><i class="fa fa-remove"></i></span><br><img src="https://www.w3schools.com/w3images/avatar4.png" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px"><h4>John Doe</h4><br><hr class="w3-clear">'
var z = '<br><button type="button" class="w3-button w3-theme-d1 w3-margin-bottom likeable"><i class="fa fa-thumbs-up"></i>  Like  </button>'

$(function(){
  $(".postear").on("click", function(e){
    e.preventDefault()
    cont1 = cont1 + 1
    var y = $('#tut').val()
    $(".posted").prepend("<p>" + x + y + z + "</p>")
  })
   $(".likeable").on("click", function(){
    cont2 = cont2 + 1
    $(this).css({"color": "cyan"}).html("like " + cont2)
  })
})
