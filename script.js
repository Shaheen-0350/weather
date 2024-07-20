const searchData = document.getElementById('search');
const city = document.getElementById('city');
const day = document.getElementById('day');
const C = document.getElementById('c');
const F = document.getElementById('f');
const Icon = document.getElementById('icon');
const feelC = document.getElementById('feelC');
const feelF = document.getElementById('feelF');
searchData.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        getData();
    }
});

function getData() {
    fetch(`https://api.weatherapi.com/v1/current.json?key=da35a8ff01cd42b0b12134222241907&q=${searchData.value}&aqi=no`).then(response => response.json())
        .then(data => {
            console.log(data);
            day.innerHTML=(data.current.condition.text);
            C.innerHTML=data.current.temp_c;
            F.innerHTML=data.current.temp_f;
            city.innerHTML=data.location.name;
            Icon.setAttribute('src',data.current.condition.icon);
            feelC.innerHTML=data.current.feelslike_c;
            feelF.innerHTML=data.current.feelslike_f;

        }).catch(error => {
            window.alert(`No search results for: "${searchData.value}"`);
        }
)
}
