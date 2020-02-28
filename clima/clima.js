const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=672dd2f4f6d0c6cdab8e341ea7fcf446&units=metric`);


    return resp.data.main.temp;
}


module.exports = {
    getClima
}