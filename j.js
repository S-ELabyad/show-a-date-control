// Sélectionne l'element avec l'identifient id="button"
var element = document.querySelector('#sortie');

var janv_mars =(annee)=>[1,2].map(m=>new Date(annee +'-' +m +'1').getDay())+"";

var calculer = (e) =>{
var [j,m,a] = e.split('/');
var dnaiss = new Date(a+'-'+m+'-'+j);
var now = new Date();
var nbjours = (now.getTime()-dnaiss.getTime())/1000/60/60/24 ;
nbjours=nbjours.toFixed(0);
if (isNaN(nbjours)
) {
 element.innerHTML = "Date non valide";


}
 else {
    var jsem = dnaiss.toLocaleDateString('fr-FR' ,{weekday:'long'});
    element.innerHTML = "c'était un <b>" + jsem + "</b><br>";
    element.innerHTML += "Vous avez <b>" + (nbjours) + "</b> jours <br>";
    
}


}