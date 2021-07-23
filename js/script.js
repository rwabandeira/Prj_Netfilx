var btInicio = document.querySelector('#btInicio');
var btFilme = document.querySelector('#btFilme');
var btSerie = document.querySelector('#btSerie');

var principal = document.querySelector('#principal');
var filme = document.querySelector('#filme');
var filme1 = document.querySelector('#filme1');
var serie = document.querySelector('#serie');
var serie1 = document.querySelector('#serie1');

btInicio.addEventListener('click', function(){
    principal.style.display = 'flex';
    filme.style.display = 'none';
    filme1.style.display = 'none';
    serie.style.display = 'none';
    serie1.style.display = 'none';
});

btFilme.addEventListener('click', function(){
    principal.style.display = 'none';
    filme.style.display = 'flex';
    filme1.style.display = 'flex';
    serie.style.display = 'none';
    serie1.style.display = 'none';
});

btSerie.addEventListener('click', function(){
    principal.style.display = 'none';
    filme.style.display = 'none';
    filme1.style.display = 'none';
    serie.style.display = 'flex';
    serie1.style.display = 'flex';
});