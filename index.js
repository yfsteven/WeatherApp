
const listWrapper = document.querySelector('.list--wrapper');

const listItems = ['name', 'region', 'country', 'lat', 'lon', 'localtime', 'temp_c', 'temp_f'];

for(let i = 0; i < listItems.length; i++) {
    const h2 = document.createElement("h2");
    h2.id = listItems[i];
    listWrapper.appendChild(h2);
}

const div = document.createElement('div');
div.id = 'condition-image--wrapper';
const h2 = document.createElement('h2');
h2.id = 'condition';
div.append(h2)
const img = document.createElement('img');
img.id = 'image';
div.append(img);
listWrapper.appendChild(div);

const rname = document.getElementById('name');
const rregion = document.getElementById('region');
const rcountry = document.getElementById('country');
const rlat = document.getElementById('lat');
const rlon = document.getElementById('lon');
const rlocaltime = document.getElementById('localtime');
const rtemp_c = document.getElementById('temp_c');
const rtemp_f = document.getElementById('temp_f');

const rcondition = document.getElementById('condition')
const rimage = document.getElementById('image');

async function getWeather() {
    const res = await fetch('https://api.weatherapi.com/v1/current.json?key=&q=Brooklyn', {mode: 'cors'});
    const weatherData = await res.json();
    const data = weatherData.location;
    const rcurrent = weatherData.current;
    const routside = rcurrent.condition;
    rname.textContent = data.name;
    rregion.textContent = data.region;
    rcountry.textContent = data.country;
    rlat.textContent = data.lat + ' °Latitude';
    rlon.textContent = data.lon + ' °Longitude';
    rlocaltime.textContent = data.localtime;
    rtemp_c.textContent = `${rcurrent.temp_c} °C`;
    rtemp_f.textContent = `${rcurrent.temp_f} °F`;
    rcondition.textContent = routside.text;
    rimage.src = routside.icon;
}
getWeather();
console.log(listWrapper.outerHTML);

