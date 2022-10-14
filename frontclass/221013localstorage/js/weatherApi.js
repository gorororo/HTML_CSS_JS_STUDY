const success = (position) =>{
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = 'cdae6f6e0f0ea44b1e4c7cf708a01ffb';
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    fetch(URL).then((response)=>{
        return response.json();
    }).then((data)=>{
        let kelvinToCelsius = data.main.temp-273.15;
        let weatherInfo = document.querySelector('.weaterInfo');
        weatherInfo.children[0].textContent = '날씨 : '+data.weather[0].main
        weatherInfo.children[1].textContent = '구름낄 확률 : '+String(data.clouds.all)+'%'
        weatherInfo.children[2].textContent = '온도 : ' + Math.floor(kelvinToCelsius).toString()+'°'
        const tagImg = document.querySelector('.icon');
        tagImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    });
}

const error = ()=>{
    alert('당신의 위치 정보를 알수 없습니다.');
}

navigator.geolocation.getCurrentPosition(success,error);