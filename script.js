var tracks = [];


const button = document.getElementById("btn");
button.addEventListener('click', async event => {
    tracks = [];
    var artist_Name = document.getElementById("artistName").value;
    artist_Name = artist_Name.split(',');
    var res = artist_Name.map(getArtistId);
})

const make = document.getElementById("make");
make.addEventListener('click', async event => {
    var sendtracks = JSON.stringify(tracks);
    console.log(sendtracks);
   const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: sendtracks
    };
    fetch('http://localhost:3000/makeplaylist', options)
})

function getArtistId(name) {
    console.log(name);
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    var url = 'http://localhost:3000/gibplaylist/' + name;
    console.log(url);
    fetch(url, options).then(async response => {
        const data = await response.json();
        console.log(data);
        tracks = tracks.concat(data.trackid);
    })
}