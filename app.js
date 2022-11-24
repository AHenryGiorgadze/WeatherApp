var input = document.querySelector(".input_text");
var main = document.querySelector("#name");
var temp = document.querySelector(".temp");
var state = document.querySelector(".state");
var button = document.querySelector(".submit");
var wind = document.querySelector(".wind");
var image = document.querySelector(".Image");

button.addEventListener("click", function (name) {
  name = input.value;
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      name +
      "&appid=f395f8e00ef6d73e7c00b053b5392cc0&units=metric"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var tempValue = data["main"]["temp"];
      var nameValue = data["name"];
      const { icon, description } = data.weather[0];
      var descValue = data["weather"][0]["description"];
      var windValue = data["wind"]["speed"];

      main.innerHTML = nameValue;
      state.innerHTML = descValue;
      temp.innerHTML = Math.round(tempValue) + "°";
      wind.innerHTML = windValue + "m/s";
      image.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      input.value = "";
    })

    .catch((err) => {
      console.log("Error : " + err);
    });
});

/*
kutaisi
*/
