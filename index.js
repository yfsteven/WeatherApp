
const listWrapper = document.querySelector('.list--wrapper');

const listItems = ['name', 'region', 'country', 'lat', 'lon', 'localtime', 'temp_c', 'temp_f'];

for(let i = 0; i < listItems.length; i++) {
    const h2 = document.createElement("h2");
    h2.id = listItems[i];
    listWrapper.appendChild(h2);
}

const rname = document.getElementById('name');
const rregion = document.getElementById('region');
const rcountry = document.getElementById('country');
const rlat = document.getElementById('lat');
const rlon = document.getElementById('lon');
const rlocaltime = document.getElementById('localtime');


async function getWeather() {
    const res = await fetch('https://api.weatherapi.com/v1/current.json?key=dd1a4f7d0b3345478bc220543242001&q=Brooklyn', {mode: 'cors'});
    const weatherData = await res.json();
    const data = weatherData.location;
    rname.textContent = data.name;
    rregion.textContent = data.region;
    rcountry.textContent = data.country;
    rlat.textContent = data.lat + ' Latitude';
    rlon.textContent = data.lon + ' Longitude';
    console.log(data)
}
getWeather();
console.log(listWrapper.outerHTML);

/*for(let j = 0; j < listItems.length; j++){
        document.getElementById(listItems[j]).textContent = data;
        switch(item) {
            case 'name':
                item.textContent = data.name;
                break;
            case 'region':
                item.textContent = data.region;
                break;
            case 'country':
                item.textContent = data.country;
                break;
            case 'lat':
                item.textContent = data.lat;
                break;
            case 'lon':
                item.textContent = data.name;
                break;
            case 'localtime':
                item.textContent = data.name;
                break;
        }
    }*/