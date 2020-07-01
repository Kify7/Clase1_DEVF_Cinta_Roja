const request = require('request');

request('https://www.theaudiodb.com/api/v1/json/1/search.php?s=nirvana&s=Queen', (error, response, body) => {
    console.log(error);

    if (error) {
        console.log('Ocurrió un error');
    } else {
        console.log('Todo chido!');
    }

    // console.log(body); => Regresa el Objeto pero en STRING
    // Parse JSON:
    console.log(response.statusCode); //=> regresa 200 si todo esta bien
    const res = JSON.parse(body);
    // console.log(res); =>  comentado por que es mucho
    console.log(res.artists[0].strArtist); // => accedo a estas propiedades ayudandome de POSTMAN
    console.log(res.artists[0].strWebsite); // => accedo a estas propiedades ayudandome de POSTMAN
    console.log(res.artists[0].strBiographyEN); // => accedo a estas propiedades ayudandome de POSTMAN
});
