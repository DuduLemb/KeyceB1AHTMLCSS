function ajouter(){
    var a = document.getElementById("tac").value
    document.getElementById("tach").innerHTML += "<br>"+a
}
function supprimer(){
    document.getElementById("tach").innerHTML = "Rien a faire"
}