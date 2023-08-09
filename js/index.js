let searchCo = document.getElementById('search-country');
let btnSend =document.getElementById('btn-send');
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

//==========


let allWeather=[];
let allWeather1=[];

if (allWeather1 == ""){
    currentLocation()
};

//==========

function currentLocation(){
    let myHttp = new XMLHttpRequest();
   myHttp.open('Get','https://api.weatherapi.com/v1/forecast.json?key=f7e9adc025394977a0e231049230208&q=egypt&days=3');
   myHttp.send();
   myHttp.addEventListener('readystatechange',function(){
       if(myHttp.readyState==4)
       {
           Weather=JSON.parse(myHttp.response);
           allWeather.push(Weather);
           dispaly_current_weather();
       }
   })
   };


function getWeather(term){
    let myHttp = new XMLHttpRequest();
    myHttp.open('Get',`https://api.weatherapi.com/v1/forecast.json?key=f7e9adc025394977a0e231049230208&q=${term}&days=3`);
    myHttp.send();
    myHttp.addEventListener('readystatechange',function(){
        if(myHttp.readyState==4)
        {
            Weather=JSON.parse(myHttp.response);
            allWeather1.push(Weather);
            dispaly_current_weather1(allWeather1);
        }
    })

};

btnSend.addEventListener('click',function(){
    
    getWeather(searchCo.value);         
});

// =========


function dispaly_current_weather()
{
    let d= new Date(allWeather[0].current.last_updated);
    let d1= new Date(allWeather[0].forecast.forecastday[1].date);
    let d2= new Date(allWeather[0].forecast.forecastday[2].date);
    let box=
    `
    <div class="col-md-5 rounded-4  shadow-lg ">
    <div  class=" row  g-0 mt-4 pb-2 ">
    <div class=" text-white rounded-top-1 d-flex justify-content-between py-1">
    <span class="ms-2">${days[d.getDay()]}</span>
    <span class="me-2 ">${d.getDate()} ${months[d.getMonth()]}</span>
    </div>
    <div  class="col-6 text-white line-img position-relative d-flex flex-column justify-content-center align-items-center ">
        <img  class="w-75 mt-2 weather-img-1" src="${allWeather[0].current.condition.icon}" >
        <span  class="lead mt-3 fs-3">${allWeather[0].current.condition.text}</span>
    </div>
    <div  class=" col-6 text-white  d-flex flex-column justify-content-center align-items-center">
        <span  class="mt-3 fs-4 w-100 text-center">${allWeather[0].location.name}</span>
        <span  class="degree  p-3 " >${allWeather[0].current.temp_c}<span class=" fs-3" ><sup>o</sup>C</span></span>
        <div class=" text-white w-100 d-flex  justify-content-evenly align-items-center mt-2 ">
        <span><img class="w-25 me-1" src="./img/icon-wind.png">${allWeather[0].current.wind_degree}km</span>
        <span><img class="w-25 me-1" src="./img/icon-umberella.png">${allWeather[0].current.humidity}%</span>
        <span><img class="w-25 me-1" src="./img/icon-compass.png">${allWeather[0].current.wind_dir}</span>
        </div>
    </div>

    </div>
    </div>
    
    <div class="text-white col-md-3 rounded-4  shadow-lg pt-2">
    <div class=" rounded-top-1 d-flex justify-content-between py-1">
        <span class=" ms-2">${days[d1.getDay()]}</span>
        <span  class="me-2">${d1.getDate()} ${months[d1.getMonth()]}</span>
    </div>
    <div class=" d-flex flex-column justify-content-center align-items-center  ">
        <img  class="w-75 mt-2 " src="${allWeather[0].forecast.forecastday[1].day.condition.icon}" >
        <span class="fs-1">${allWeather[0].forecast.forecastday[1].day.avgtemp_c}<span class=" fs-6" ><sup>o</sup>C</span></span>
        <span class="mt-2">${allWeather[0].forecast.forecastday[1].day.condition.text}</span>

    </div>
    </div>

    <div class=" text-white col-md-3 rounded-4  shadow-lg pt-2">
    <div class=" rounded-top-1 d-flex justify-content-between py-1">
        <span  class=" ms-2">${days[d2.getDay()]}</span>
        <span  class="me-2">${d2.getDate()} ${months[d2.getMonth()]}</span>
    </div>
    <div class="d-flex flex-column justify-content-center align-items-center">
        <img class="w-75 mt-2 " src="${allWeather[0].forecast.forecastday[2].day.condition.icon}" >
        <span class="fs-1">${allWeather[0].forecast.forecastday[2].day.avgtemp_c}<span class=" fs-6" ><sup>o</sup>C</span></span>
        <span class="mt-2">${allWeather[0].forecast.forecastday[2].day.condition.text}</span>

    </div>
    </div>
    </div>

    `
    document.getElementById("current_day").innerHTML=box;
}


function dispaly_current_weather1()
{
    let d= new Date(allWeather1[0].current.last_updated);
    let d1= new Date(allWeather1[0].forecast.forecastday[1].date);
    let d2= new Date(allWeather1[0].forecast.forecastday[2].date);
    let box=
    `
    <div class="col-md-5 rounded-4  shadow-lg ">
    <div  class=" row  g-0 mt-4 pb-2 ">
    <div class=" text-white rounded-top-1 d-flex justify-content-between py-1">
    <span class="ms-2">${days[d.getDay()]}</span>
    <span class="me-2 ">${d.getDate()} ${months[d.getMonth()]}</span>
    </div>
    <div  class="col-6 text-white line-img position-relative d-flex flex-column justify-content-center align-items-center ">
        <img  class="w-75 mt-2 weather-img-1" src="${allWeather1[0].current.condition.icon}" >
        <span  class="lead mt-3 fs-3">${allWeather1[0].current.condition.text}</span>
    </div>
    <div  class=" col-6 text-white  d-flex flex-column justify-content-center align-items-center">
        <span  class="mt-3 fs-4 w-100 text-center">${allWeather1[0].location.name}</span>
        <span  class="degree  p-3 " >${allWeather1[0].current.temp_c}<span class=" fs-3" ><sup>o</sup>C</span></span>
        <div class=" text-white w-100 d-flex  justify-content-evenly align-items-center mt-2 ">
        <span><img class="w-25 me-1" src="./img/icon-wind.png">${allWeather1[0].current.wind_degree}km</span>
        <span><img class="w-25 me-1" src="./img/icon-umberella.png">${allWeather1[0].current.humidity}%</span>
        <span><img class="w-25 me-1" src="./img/icon-compass.png">${allWeather1[0].current.wind_dir}</span>
        </div>
    </div>

    </div>
    </div>
    
    <div class="text-white col-md-3 rounded-4  shadow-lg pt-2">
    <div class=" rounded-top-1 d-flex justify-content-between py-1">
        <span class=" ms-2">${days[d1.getDay()]}</span>
        <span  class="me-2">${d1.getDate()} ${months[d1.getMonth()]}</span>
    </div>
    <div class=" d-flex flex-column justify-content-center align-items-center  ">
        <img  class="w-75 mt-2 " src="${allWeather1[0].forecast.forecastday[1].day.condition.icon}" >
        <span class="fs-1">${allWeather1[0].forecast.forecastday[1].day.avgtemp_c}<span class=" fs-6" ><sup>o</sup>C</span></span>
        <span class="mt-2">${allWeather1[0].forecast.forecastday[1].day.condition.text}</span>

    </div>
    </div>

    <div class=" text-white col-md-3 rounded-4  shadow-lg pt-2">
    <div class=" rounded-top-1 d-flex justify-content-between py-1">
        <span  class=" ms-2">${days[d2.getDay()]}</span>
        <span  class="me-2">${d2.getDate()} ${months[d2.getMonth()]}</span>
    </div>
    <div class="d-flex flex-column justify-content-center align-items-center">
        <img class="w-75 mt-2 " src="${allWeather1[0].forecast.forecastday[2].day.condition.icon}" >
        <span class="fs-1">${allWeather1[0].forecast.forecastday[2].day.avgtemp_c}<span class=" fs-6" ><sup>o</sup>C</span></span>
        <span class="mt-2">${allWeather1[0].forecast.forecastday[2].day.condition.text}</span>

    </div>
    </div>
    </div>

    `
    document.getElementById("current_day").innerHTML=box;
}





