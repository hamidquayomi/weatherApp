let button = document.querySelector('.button')
let inputValue = document.querySelector('.inputValue')
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');

const API_KEY = 'd2d9b3f7d0f7df1d8d654dd5c60bad82';

button.addEventListener('click',function(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        let nameValue = data['name']
        let tempValue = data['main']['temp']
        let descValue = data['weather'][0]['description']

        name.innerHTML = ("Country: ")+nameValue
        temp.innerHTML = ("temp: ")+tempValue
        desc.innerHTML = ("cast: ")+descValue
    })
    .catch(err => {
        console.error("Error", err)
        alert("Wrong city name :(")
    })

})

