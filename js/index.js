const api_url = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&format=json';
async function cumulative(url) {
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    show(data);
}

cumulative(api_url);

function show(data) {
    //let div = document.createElement("p");
    //div.append(data.kepid);
    console.log(data[0].kepid)
}