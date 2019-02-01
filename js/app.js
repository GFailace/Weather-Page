$.getJSON("http://dataservice.accuweather.com/forecasts/v1/daily/5day/45561?apikey=fqmF6AAGR8p6owNBkXMhD2AAAF5nwrvO&language=pt-br&details=true&metric=true", function (data) {
    console.log(data)

    if (data.DailyForecasts[0].Day.Icon > 9) {
        $('#icon0').attr('src', `https://developer.accuweather.com/sites/default/files/${data.DailyForecasts[0].Day.Icon}-s.png`)
    }
    else {
        $('#icon0').attr('src', `https://developer.accuweather.com/sites/default/files/0${data.DailyForecasts[0].Day.Icon}-s.png`)
    }
    $('#weather0').append(data.DailyForecasts[0].Day.IconPhrase)
    $('#min-max0').append("MIN - " + Math.floor(data.DailyForecasts[0].Temperature.Minimum.Value) + "º - " + Math.floor(data.DailyForecasts[0].Temperature.Maximum.Value) + "º - MAX")

    if (data.DailyForecasts[1].Day.Icon > 9) {
        $('#icon1').attr('src', `https://developer.accuweather.com/sites/default/files/${data.DailyForecasts[1].Day.Icon}-s.png`)
    }
    else {
        $('#icon1').attr('src', `https://developer.accuweather.com/sites/default/files/0${data.DailyForecasts[1].Day.Icon}-s.png`)
    }
    $('#weather1').append(data.DailyForecasts[1].Day.IconPhrase)
    $('#min-max1').append("MIN - " + Math.floor(data.DailyForecasts[1].Temperature.Minimum.Value) + "º - " + Math.floor(data.DailyForecasts[1].Temperature.Maximum.Value) + "º - MAX")

    if (data.DailyForecasts[2].Day.Icon > 9) {
        $('#icon2').attr('src', `https://developer.accuweather.com/sites/default/files/${data.DailyForecasts[2].Day.Icon}-s.png`)
    }
    else {
        $('#icon2').attr('src', `https://developer.accuweather.com/sites/default/files/0${data.DailyForecasts[2].Day.Icon}-s.png`)
    }
    $('#weather2').append(data.DailyForecasts[2].Day.IconPhrase)
    $('#min-max2').append("MIN - " + Math.floor(data.DailyForecasts[2].Temperature.Minimum.Value) + "º - " + Math.floor(data.DailyForecasts[2].Temperature.Maximum.Value) + "º - MAX")

    if (data.DailyForecasts[3].Day.Icon > 9) {
        $('#icon3').attr('src', `https://developer.accuweather.com/sites/default/files/${data.DailyForecasts[3].Day.Icon}-s.png`)
    }
    else {
        $('#icon3').attr('src', `https://developer.accuweather.com/sites/default/files/0${data.DailyForecasts[3].Day.Icon}-s.png`)
    }
    $('#weather3').append(data.DailyForecasts[3].Day.IconPhrase)
    $('#min-max3').append("MIN - " + Math.floor(data.DailyForecasts[3].Temperature.Minimum.Value) + "º - " + Math.floor(data.DailyForecasts[3].Temperature.Maximum.Value) + "º - MAX")

    if (data.DailyForecasts[4].Day.Icon > 9) {
        $('#icon4').attr('src', `https://developer.accuweather.com/sites/default/files/${data.DailyForecasts[4].Day.Icon}-s.png`)
    }
    else {
        $('#icon4').attr('src', `https://developer.accuweather.com/sites/default/files/0${data.DailyForecasts[4].Day.Icon}-s.png`)
    }
    $('#weather4').append(data.DailyForecasts[4].Day.IconPhrase)
    $('#min-max4').append("MIN - " + Math.floor(data.DailyForecasts[4].Temperature.Minimum.Value) + "º - " + Math.floor(data.DailyForecasts[4].Temperature.Maximum.Value) + "º - MAX")

})

$.getJSON("http://dataservice.accuweather.com/currentconditions/v1/45561?apikey=fqmF6AAGR8p6owNBkXMhD2AAAF5nwrvO&language=pt-br&details=true&metric=true", function (result) {
    console.log(result)
    $('#current-icon').attr('src', `https://developer.accuweather.com/sites/default/files/0${result[0].WeatherIcon}-s.png`)
    $('#current-weather').append(result[0].WeatherText)
    $('#current-temp').append(Math.floor(result[0].Temperature.Metric.Value) + "ºC")
    $('#current-min-max').append("MIN - " + Math.floor(result[0].TemperatureSummary.Past6HourRange.Minimum.Metric.Value) + "º - " + Math.floor(result[0].TemperatureSummary.Past6HourRange.Maximum.Metric.Value) + "º - MAX")
})

