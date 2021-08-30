const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours   = String(date.getHours()).padStart(2, "0");   //getHours()는 number이므로 string으로 바꿔줘야지 padStart 쓸 수 있음
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 이거 안 적으면 1초 지난 다음에 시간이 뜸. 이걸 써야지 바로 시간이 뜸
setInterval(getClock, 1000);

