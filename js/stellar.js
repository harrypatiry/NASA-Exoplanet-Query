const planets = document.getElementById('planets');
const search = document.getElementById('search');
let dataArray = [];

//search for current input values
search.addEventListener('keyup', (e) => {
    const searched = e.target.value.toLowerCase();
    const filtered = dataArray.filter((o) => {
        return o.pl_name.toLowerCase().includes(searched) || o.pl_hostname.toLowerCase().includes(searched);
    })
    //console.log(filtered)
    results(filtered);
});

//fetch db
async function cumulative() {
    const response = await fetch('../db/PS.json');
    data = await response.json();
    //filter out null name values
    dataArray = data.filter(data => {
        let isValid = true
        if (!data.pl_name) 
            isValid = false;
        return isValid
    })
    console.log(dataArray);
}
cumulative();

//show filtered search results
function results(filtered) {
    const htmlData = filtered.map((data) => {
        return `
        <li class='planet'>
            <h2>${data.pl_name}</h2>
            <div class='data'>
                <p>Mass(Jupiter Mass): ${data.pl_bmassj}</p>
                <p>Density(g/cm**3): ${data.pl_dens}</p>
                <p>Orbital Period: ${data.pl_orbper}</p>
                <p>Eccentricity: ${data.pl_orbeccen}</p>
                <p>Temperature(kelvin): ${data.pl_teff}</p>
                <p>Stellar Name: ${data.pl_hostname}</p>
            </div>
        </li>
        `;
    }).join('');
    planets.innerHTML = htmlData;
}
