var map;  //Visible de partout car hors fonction

$(".bouton").click(function(){
var ville = $("#barre").val();

$.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q='+ville+'&units=metric&APPID=0813239b990bbc067026ed3e646b6319',
    type: 'GET',
    dataType: 'json',
})
.done(function(res) {
    var city = res.name;
    var lon = res.coord.lon;
    var lat = res.coord.lat;
    var temp = res.main.temp;
    var temp_min = res.main.temp_min;
    var temp_max = res.main.temp_max;
    var pressure = res.main.pressure;
    var humidity = res.main.humidity;

    console.log(res);

    $("#l1").html("Ville : "+city);
    $("#l2").html("Longitude : "+lon + " deg");
    $("#l3").html("Lattitude : "+lat + " deg");
    $("#l4").html("Température : "+temp + "°C");
    $("#l5").html("Température Min : "+temp_min + "°C");
    $("#l6").html("Température Max : "+temp_max + "°C");
    $("#l7").html("Pression : "+pressure + " hPa");
    $("#l8").html("Humidité : "+humidity + " %rh");

carte(lat,lon);
})

.fail(function() {
    console.log("error");
})
.always(function() { // S'execute dans tous les cas!
    console.log("complete");
})
});

function carte (lat,lon){
    if (map != undefined) {map.remove();} //ou : if (map){map.remove()};
map = L.map('carto').setView([lat, lon], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

L.marker([lat,lon]).addTo(map)
    .openPopup();
}