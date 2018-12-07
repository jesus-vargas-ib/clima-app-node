const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyBocPmZ3fxdn7qar2_S6nWT6H_NPckokPE`);

    let result = resp.data.results[0];

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    } else {
        let direccion = result.formatted_address
        let lat = result.geometry.location.lat;
        let lng = result.geometry.location.lng;

        return {
            direccion,
            lat,
            lng
        }
    }

}

module.exports = {
    getLugarLatLng
}