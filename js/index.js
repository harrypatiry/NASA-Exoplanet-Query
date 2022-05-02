const api_url = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&format=json';
const planets = document.getElementById('planets')
const search = document.getElementById('search');
let data = [];
async function cumulative(url) {
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    show(data);
}
cumulative(api_url);

function show(data) {
    const htmlString = data.map((data) => {
        return `
        <li class='planet'>
            <h2>${data.kepler_name}</h2>
            <p>Temperature: ${data.koi_teq}</p>
        </li>
        `;
    }).join('');
    planets.innerHTML = htmlString;
}