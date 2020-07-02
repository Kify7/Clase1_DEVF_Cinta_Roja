const request = require('request');

const getAsteroid = (year, month, day) => {
    const URL =`https://api.nasa.gov/neo/rest/v1/feed?start_date=${year}-${month}-${day}&end_date=${year}-${month}-${day}&api_key=DEMO_KEY`;

    return new Promise((resolve, reject) => {
        request(URL, (error, response, body) => {
            // Recordar para poder acceder al objetos, hacer JASON.parse:
        const json = JSON.parse(body)
            if(!error && response.statusCode === 200){
                // AQUÍ NO HAY ERROR
                const asteroids = json.near_earth_objects[`${year}-${month}-${day}`];
                const res = asteroids.map((value) => `${value.id}, ${value.name}, ${value.is_potentially_hazardous_asteroid}`);
                // FILTRAR ELEMENTOS PELIGROSOS
                // const res = asteroids.filter((value) => `${value.is_potentially_hazardous_asteroid}`);
                // const res2 = res.map((value) => `${value.id}, ${value.name}, ${value.is_potentially_hazardous_asteroid}`);
                resolve(res);
                
            } else {
                // HANDLER DE ERRORES
                switch(response.statusCode) {
                    case 400:
                        reject(`${jason.http_error} ${jason.error_message}`);
                        break;
                        default:
                        reject('Ocurrio un error desconocido')
                }
            }
        })
    }) 
}

getAsteroid('2019', '11', '26') /// se debe andar llamar como strings
.then((res) => console.log(res))
.catch((err)=>console.log(err));