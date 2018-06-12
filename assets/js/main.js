const boton = document.getElementById("btn");
boton.addEventListener("click", ()=>{
  //acá guardo  el comentario ingresado por el usuario
  let comments = document.getElementById("comment").value;  

  //para limpiar el textarea. Con esto quedará limpio automáticamente, no necesitamos un botón
  document.getElementById("comment").value= " ";

  //contenedor donde dejaré mis comentarios en html
  const cont = document.getElementById("cont");

  //crear un div contenedor    --> todos los elementos que se crean se le deben asignar un padre.
  const newComments = document.createElement("div");

  //nodos de texto del textarea
  let textNewComment = document.createTextNode(comments);
  const contenedorElemento = document.createElement("p");  //--> a todo debemos asignarle un padre sino, no 
  contenedorElemento.appendChild(textNewComment);  //--> contenedorElemento es padre de textNewComment
  newComments.appendChild(contenedorElemento);

  cont.appendChild(newComments);  
})