const api_url = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative';
async function cumulative(url) {
    const response = await fetch(url);
    let data = await response.text();
    console.log(data)
}

cumulative(api_url);
