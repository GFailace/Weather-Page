/* var ctx = document.getElementById("myChart");
var ctx = document.getElementById("myChart").getContext("2d");
var ctx = $("#myChart");
var ctx = "myChart";

new Chart(ctx, {
    data: {
        datasets: [
            {fill: 'origin'},      // 0: fill to 'origin'
            {fill: '+2'},          // 1: fill to dataset 3
            {fill: 1},             // 2: fill to dataset 1
            {fill: false},         // 3: no fill
            {fill: '-2'}           // 4: fill to dataset 2
        ]
    }
}) */

$.getJSON("http://api.openweathermap.org/data/2.5/forecast?id=3452925&units=metric&APPID=c91045cab5ae5847dbce5a2bdfb90cc4", function(data){
console.log(data)

$('#city').append(`${data.city.name}, previsão para os próximos cinco dias`)

$('#icon0').attr('src', `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`)
$('#temp0').append(Math.floor(data.list[0].main.temp) + "ºC")
$('#weather0').append(data.list[0].weather[0].main)

$('#icon1').attr('src', `http://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`)
$('#temp1').append(Math.floor(data.list[1].main.temp) + "ºC")
$('#weather1').append(data.list[1].weather[0].main)

$('#icon2').attr('src', `http://openweathermap.org/img/w/${data.list[2].weather[0].icon}.png`)
$('#temp2').append(Math.floor(data.list[2].main.temp) + "ºC")
$('#weather2').append(data.list[2].weather[0].main)

$('#icon3').attr('src', `http://openweathermap.org/img/w/${data.list[3].weather[0].icon}.png`)
$('#temp3').append(Math.floor(data.list[3].main.temp) + "ºC")
$('#weather3').append(data.list[3].weather[0].main)

$('#icon4').attr('src', `http://openweathermap.org/img/w/${data.list[4].weather[0].icon}.png`)
$('#temp4').append(Math.floor(data.list[4].main.temp) + "ºC")
$('#weather4').append(data.list[4].weather[0].main)

})

