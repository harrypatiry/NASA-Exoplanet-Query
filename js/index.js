const api_url = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&format=json';
async function cumulative(url) {
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    //removeEmpty(data)
    show(data);
}
cumulative(api_url);

// function removeEmpty(obj) {
//     Object.keys(obj).forEach(function(key) {
//       (obj[key] && typeof obj[key] === 'object') && removeEmpty(obj[key]) ||
//       (obj[key] === '' || obj[key] === null || obj[key] === undefined) && delete obj[key]
//     });
//     show(obj)
//   };

function show(data) {
    for (let i = 0; data.length; i++) {
        let name = document.createElement("div");
        name.innerHTML = 'Name: ' + data[i].kepler_name;
        let temp = document.createElement("div");
        temp.innerHTML = 'Temperature: ' + data[i].koi_teq;
        let a = document.getElementById('cumulative')
        let b = document.getElementById('cumulative')
        a.appendChild(name);
        b.appendChild(temp);
    }
    //let c = document.getElementById("cumulative");
    //c.append(data[0]);
    //console.log(data[0].kepid)
}