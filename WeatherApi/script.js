let city_name = document.getElementById("city_name");
let submit_btn = document.getElementById("submit_btn");
const apiKey = "e4ffd0cbcd1a42e70e7ed45c51bb46b7";

submit_btn.addEventListener("click", checkWeather);

const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const windspeed = document.querySelector("#windspeed");

function checkWeather() {
  console.log("Inside check weather ", city_name.value);
  const coordinates_url = `http://api.openweathermap.org/geo/1.0/direct?q=${city_name.value}&appid=${apiKey}`;
  fetch(coordinates_url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        console.log("City Not Found...");
      } else {
        console.log("data : ", data);
        const lat = data[0]["lat"];
        const lon = data[0]["lon"];
        console.log(lat, lon);

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            if (data.cod === "404") {
              console.log("City Not Found...");
            } else {
              console.log(
                "data : ",
                data,
                " - ",
                data.main.temp,
                " - ",
                data.weather[0].description,
                " - ",
                data.wind.speed
              );
              temperature.innerHTML = data.main.temp;
              description.innerHTML = data.weather[0].description;
              windspeed.innerHTML = data.wind.speed;
              console.log(temperature);
              console.log(description);
              console.log(windspeed);
            }
          })
          .catch((error) => {
            console.log("Inside cache : Error Occured");
          });
      }
    })
    .catch((error) => {
      console.log("Inside cache : Error Occured");
    });

  city_name.value = "";
}
