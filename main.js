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
// - El link del *favicon* debe dar like al *tweet*. Al hacer esto el *favicon* debe cambiarde color y el contador de *likes* -de ese tweet- debe aumentar en uno.
// - El link del *favicon* debe tener una clase **class='likeable'**. (jQuery)
// - Seleccionar con jQuery la clase *likeable* y agregar el evento **.onclick** para aumentar el contador en uno.
// - El botón de eliminar debe remover el *tweet* de la lista.

// ### Evaluación:
// - Utilización correcta de etiquetas semánticas HTML5.
// - Correcta implementación de sistema de grids: rows y cols.
// - El selector de jQuery funciona de manera correcta con la clase solicitada.
// - El evento onclick cambia el color del favicon y aumenta el contador en 1 del tweet específico.
// - El botón de eliminar remueve de la lista sólo el twit seleccionado.