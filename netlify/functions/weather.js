exports.handler = async (event) => {
    const city = event.queryStringParameters.city;
    const apiKey = process.env.API_KEY; 

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await res.json();

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
};