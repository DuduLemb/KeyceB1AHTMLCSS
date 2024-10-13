
function calcul(){
    var a = document.getElementById("nombre1").value
a = parseFloat(a)
var b = document.getElementById("nombre2").value
b = parseFloat(b)
var c = document.getElementById("Choix").value
if (c == "0"){
    alert("Veuillez choisir une opération")
}
if(c == "1"){
    var d = a+b
    document.getElementById("resultat").value = d
    document.getElementById("result").innerHTML = "resultat de la addition"
}
if(c == "2"){
    var d = a-b
    document.getElementById("resultat").value = d
    document.getElementById("result").innerHTML = "resultat de la soustraction"
}
if(c == "3"){
    var d = a*b
    document.getElementById("resultat").value = d
    document.getElementById("result").innerHTML = "resultat de la multiplication"
}
if(c == "4"){
    var d = a/b
    document.getElementById("resultat").value = d
    document.getElementById("result").innerHTML = "resultat de la division"
}
}

