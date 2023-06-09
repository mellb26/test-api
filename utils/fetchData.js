import axios from 'axios';

const cycleStreetAPI = axios.create({
    baseURL: 'https://api.cyclestreets.net/v2/',
    headers: {'X-API-KEY': '3c43e5d9434284f2'}
})

export const getExampleDataFromCS = (locationParams) => {
    if (locationParams.currLocation && locationParams.radius) {
        return cycleStreetAPI.get(`pois.locations?type=cycleparking&longitude=${locationParams.currLocation.longitude}&latitude=${locationParams.currLocation.latitude}&radius=${locationParams.radius}&limit=3`).then(({features}) => features)
    }
}
