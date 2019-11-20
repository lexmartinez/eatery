const OPEN_TABLE_API = (city: string) => `https://opentable.herokuapp.com/api/restaurants?city=${city}`;

export default {
    getResults: (city: string) => fetch(OPEN_TABLE_API(city), { method: 'GET' }),
}