const API_KEY = "b234be33b8ce77ab07c94b2abd1aa6f6";

function onGeoOk(position) {
    const latitude = position.coords.latitude ;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url)  //fetch한 걸 서버가 응답하는 데 시간이 걸림. 응답하면 then 실행
    .then(response => response.json()  //1번째 then. json 얻기(=날씨 정보)
    .then(data => { //2번째 then. 지역명, 날씨 가져오기
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    }));
}
function onGeoError() {
    alert("'허용'을 선택하면 현재 날씨를 확인할 수 있습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);  //잘 실행됐을 땐 onGeoOk 실행, 에러났을 땐 onGeoError 메서드 실행
