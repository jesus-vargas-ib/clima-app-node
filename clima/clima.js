const axios = require('axios');

const getClima = async(lat, lng) => {
    let reps = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b578bc8a52b031d7e5e74e3161294072&units=metric`);

    return reps.data.main.temp;
}

module.exports = {
    getClima
}