const api_url = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=missionstars&format=json';
const planets = document.getElementById('planets')
const search = document.getElementById('search');
let dataArray = [];

//search for current input values
search.addEventListener('keyup', (e) => {
    const searched = e.target.value.toLowerCase();
    const filtered = dataArray.filter((o) => {
        return o.star_name.toLowerCase().includes(searched);
    })
    //console.log(filtered)
    results(filtered);
});

//fetch api 
async function cumulative(url) {
    const response = await fetch(url);
    data = await response.json();
    //filter out null kepler name values
    dataArray = data.filter(data => {
        let isValid = true
        if (!data.star_name) 
            isValid = false;
        return isValid
    })
    console.log(dataArray);
}
cumulative(api_url);

//show filtered search results
function results(filtered) {
    const htmlData = filtered.map((data) => {
        return `
        <li class='planet'>
            <h2>${data.star_name}</h2>
            <div class='data'>
                <p>Temperature(kelvin):</p>
            </div>
        </li>
        `;
    }).join('');
    planets.innerHTML = htmlData;
}