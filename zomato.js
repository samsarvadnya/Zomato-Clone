function changeMode(){
    var mybody = document.body;
    mybody.classList.toggle('mydark')
}

geolocation();
function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        x.innerText = "Your Location is not Supported"
    }
}
function showPosition(data){
    console.log(data)
    let latitude = data.coords.latitude;
    let longitude = data.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    fetch(url,{method: 'GET'})
    .then((res) => res.json())
    .then((data) => {
        let cityname = data.city.name
        let temperature = `${data.list[0].temp.day}  ${"\u2103"}`
        var x = document.getElementById("myweather");
        console.log(data)
        x.innerText = `Average Temperature of ${cityname} is ${temperature}`
    })
}