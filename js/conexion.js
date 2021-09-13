let url="https://api.spotify.com/v1/artists/5KBPxIED8ejHkvhs4KCzyS/top-tracks?market=ES";

let token="Bearer BQBTksoRf_vvPzbQXMI5s1CwW8730DmLpkcm95j9HBE4XyYUNvK4fz5i2FjebaoeWSjdNtcBZVTmjl-sVugL-ZGW-4ru5jnitTBmUshoovV__AoicdcunrCP6J-jt405i7Ovp-z3Vw";

let parametros={
    method:"GET",
    headers:{"Authorization":token}
}

fetch(url,parametros)
.then(respuesta=>respuesta.json())
.then(datos=>seleccionarInformacion(datos))

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
    nombre1.src=datos.tracks[0].name;

   
}

