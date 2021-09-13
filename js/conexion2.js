let url="https://accounts.spotify.com/api/token";

let llave1="grant_type=client_credentials";
let llave2="client_id=5a7af9583ebe4819b0909e9c51387b14";
let llave3="client_secret=9eb0077671234250a2a721983a3c5eac";

let parametros={
    method:"POST",
    headers:{"Content-Type": 'application/x-www-form-urlencoded'},
    body:llave1+"&"+llave2+"&"+llave3
}

fetch(url,parametros)
    .then(respuesta=>respuesta.json())
    .then(datos=>traerCanciones(datos))

function traerCanciones(datosToken){

    let token="Bearer "+datosToken.access_token; 

    let url="https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH/top-tracks?market=ES";

    let parametros={
        method:"GET",
        headers:{"Authorization":token}
    }

fetch(url,parametros)
    .then(respuesta=>respuesta.json())
    .then(datos=>seleccionarInformacion(datos))
    
}

function seleccionarInformacion(datos){

    console.log(datos);
    console.log(datos.tracks);
    console.log(datos.tracks[0].preview_url);//canción
    console.log(datos.tracks[0].name);//nombre
    console.log(datos.tracks[0].album.images[0].url);//Imagen 

    let cancion1=document.getElementById("cancion1");
    cancion1.src=datos.tracks[0].preview_url;
    let imagen1=document.getElementById("imagen1");
    imagen1.src=datos.tracks[0].album.images[0].url;
    let nombre1=document.getElementById("nombre1");
    nombre1.textContent=datos.tracks[0].name;

    let cancion2=document.getElementById("cancion2");
    cancion2.src=datos.tracks[1].preview_url;
    let imagen2=document.getElementById("imagen2");
    imagen2.src=datos.tracks[1].album.images[0].url;
    let nombre2=document.getElementById("nombre2");
    nombre2.textContent=datos.tracks[1].name;

    let cancion3=document.getElementById("cancion3");
    cancion3.src=datos.tracks[2].preview_url;
    let imagen3=document.getElementById("imagen3");
    imagen3.src=datos.tracks[2].album.images[0].url;
    let nombre3=document.getElementById("nombre3");
    nombre3.textContent=datos.tracks[2].name;

    let cancion4=document.getElementById("cancion4");
    cancion4.src=datos.tracks[3].preview_url;
    let imagen4=document.getElementById("imagen4");
    imagen4.src=datos.tracks[3].album.images[0].url;
    let nombre4=document.getElementById("nombre4");
    nombre4.textContent=datos.tracks[3].name;

    let cancion5=document.getElementById("cancion5");
    cancion5.src=datos.tracks[4].preview_url;
    let imagen5=document.getElementById("imagen5");
    imagen5.src=datos.tracks[4].album.images[0].url;
    let nombre5=document.getElementById("nombre5");
    nombre5.textContent=datos.tracks[4].name;

    let cancion6=document.getElementById("cancion6");
    cancion6.src=datos.tracks[5].preview_url;
    let imagen6=document.getElementById("imagen6");
    imagen6.src=datos.tracks[5].album.images[0].url;
    let nombre6=document.getElementById("nombre6");
    nombre6.textContent=datos.tracks[5].name;

    let cancion7=document.getElementById("cancion7");
    cancion7.src=datos.tracks[6].preview_url;
    let imagen7=document.getElementById("imagen7");
    imagen7.src=datos.tracks[6].album.images[0].url;
    let nombre7=document.getElementById("nombre7");
    nombre7.textContent=datos.tracks[6].name;

    let cancion8=document.getElementById("cancion8");
    cancion8.src=datos.tracks[7].preview_url;
    let imagen8=document.getElementById("imagen8");
    imagen8.src=datos.tracks[7].album.images[0].url;
    let nombre8=document.getElementById("nombre8");
    nombre8.textContent=datos.tracks[7].name;

    let cancion9=document.getElementById("cancion9");
    cancion9.src=datos.tracks[8].preview_url;
    let imagen9=document.getElementById("imagen9");
    imagen9.src=datos.tracks[8].album.images[0].url;
    let nombre9=document.getElementById("nombre9");
    nombre9.textContent=datos.tracks[8].name;

}