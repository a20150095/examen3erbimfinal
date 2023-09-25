alert("Bienvenido al cuestionario sobre turismo");
var nom = prompt("Ingrese su nombre y apellido");
var res1 = prompt("¿En que departamentose encuentra el Lago Titicaca? \nA: Tacna\nB: Puno\nC: Cusco");
if(res1=="B"){
  res1 = 10;
}else{
    res1 = 0;
}
var res2 = prompt("¿Desde qué parte del Perú se pueden avistar ballenas jorobadas? \nA: Lima e Ica\nB: Arequipa y Tacna\nC: Piura y Tumbes");
if(res2=="C"){
  res2 = 10;
}else{
    res2 = 0;
}
var res3 = prompt("Plato tipico de la selva peruana \nA: Tacacho con cecina \nB: Arroz con pollo \nC: Lomo saltado");
if(res3=="A"){
  res3 = 10;
}else{
    res3 = 0;
}

var resp = parseInt(prompt ("Presiona enter para comprobar tus resultados"));
    if(resp>=30){
        document.write("Tus resultados son "+ resp + " % de 30% y lo has hecho bien");
    
}else{
    document.write("Tus resultados son "+ resp + " % de 30%, vuelve a intentarlo");
}

    var resp = res1 + res2 + res3 

document.write("<h1>Turismo</h1>")
document.write("Respuesta <br>")
document.write(nom + " tus resultados son <br> ");
document.write(resp + "% de 30% de respuestas correctas");
