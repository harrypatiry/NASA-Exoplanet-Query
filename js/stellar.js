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
    const response = await fetch('./db/PS.json');
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
        <div class='card'>
            <li>
            <h2>Planet Name: ${data.pl_name}</h2>
                <div class='data'>
                    <p>Mass(Jupiter Mass): ${data.pl_bmassj}</p>
                    <p>Radius: ${data.pl_radj}</p>
                    <p>Density(g/cm**3): ${data.pl_dens}</p>
                    <p>Orbital Period: ${data.pl_orbper}</p>
                    <p>Eccentricity: ${data.pl_orbeccen}</p>
                    <br/>
                    <h2>Stellar Name: ${data.pl_hostname}</h2>
                    <p>Temperature(k): ${data.st_teff}</p>
                    <p>Luminocity: ${data.st_lum}</p>
                    <p>Mass: ${data.st_mass}</p>
                    <p>Radius: ${data.st_rad}</p>
                    <p>Age: ${data.st_age}</p>
                </div>
            </li>
        </div>
        `;
    }).join('');
    planets.innerHTML = htmlData;
}
