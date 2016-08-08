var celsius;
var fahrenheit;
var fOrC = false;

$.get("http://ipinfo.io", function(location) {
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + location.city + ", " + location.region + "&appid=265aef4d63230a48ab0446fe91afec9a",function(jsonWeatherInfo){
    $('#location').html(jsonWeatherInfo.name + ", " + location.region );
    celsius = jsonWeatherInfo.main.temp - 273;
    fahrenheit = 1.8 * (jsonWeatherInfo.main.temp - 273) + 32;
    fOrC ? $('#temp').html(Math.floor(fahrenheit)) : $('#temp').html(Math.floor(celsius));
    $('#visibility').html(jsonWeatherInfo.weather[0].main);
    $('#icon').addClass('wi wi-owm-' + jsonWeatherInfo.weather[0].id);
    fOrC ? $('#iconCF').addClass('wi wi-fahrenheit'): $('#iconCF').addClass('wi wi-celsius');
  });
}, "jsonp");



$('#convertTemp').click(function (){
  fOrC = !fOrC;
  fOrC ? $('#temp').html(Math.floor(fahrenheit)) : $('#temp').html(Math.floor(celsius));
  if(fOrC){
    $('#iconCF').removeClass('wi wi-celsius');
    $('#iconCF').addClass('wi wi-fahrenheit');
  } else {
    $('#iconCF').removeClass('wi wi-fahrenheit');
    $('#iconCF').addClass('wi wi-celsius');
  }
});
