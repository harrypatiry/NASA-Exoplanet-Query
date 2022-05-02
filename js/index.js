const api_url = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&format=json';
const planets = document.getElementById('planets')
const search = document.getElementById('search');
let dataArray = [];

//search for current input values
search.addEventListener('keyup', (e) => {
    const searched = e.target.value.toLowerCase();
    const filtered = dataArray.filter((planet) => {
        return planet.kepler_name.toLowerCase().includes(searched);
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
        if (!data.kepler_name) 
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
            <h2>${data.kepler_name}</h2>
            <p>Temperature: ${data.koi_teq}</p>
        </li>
        `;
    }).join('');
    planets.innerHTML = htmlData;
}
