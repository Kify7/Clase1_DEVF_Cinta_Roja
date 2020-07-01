const request = require('request');
const { Banda } = require('./Banda');

// TRANSFORMANDO EJEMPLO JS A UNA FUNCIÓN

const getBand = (band) => {
    const URL = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=nirvana&s=${band}`;
    request(URL, (error, response, body) => {
        if (error) {
            console.log('Ocurrió un error');
        } else {
            console.log('Todo chido!');
            console.log(response.statusCode);
            //Parse JSON
            const res = JSON.parse(body);
            if (res.artists !== null) {
                // console.log(res.artists[0].strArtist);
                // console.log(res.artists[0].strWebsite);
                // console.log(res.artists[0].strBiographyEN); => comentad por que es mucha info
               /*  const nuevaBanda = new Banda(
                    res.artists[0].strArtist, 
                    res.artists[0].strWebsite, 
                    res.artists[0].intFormedYear, 
                    res.artists[0].strGenre);
                console.log(nuevaBanda); */ //este bloque de codigo lo mejoramos:
                const { strArtist, strWebsite, intFormedYear, strGenre } = res.artists[0];
                const nuevaBanda = new Banda(
                    strArtist, 
                    strWebsite, 
                    intFormedYear, 
                    strGenre);
                    console.log(nuevaBanda);
            } else {
                console.log(`No encontre ${band} o está mal escrito`);
                
            }
        }
    });
}

getBand('Juan Gabriel')
getBand('Morat')
getBand('Los Temerarios')
getBand('The National')
