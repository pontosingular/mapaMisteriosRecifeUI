import api from './api'

const inRange = (lat, lng, range) => {
    return api.get('/haunts/inrange', {
        params: {
            range,
            lat,
            lng 
        }
    }).then(response => response.data)
}

const discover = (id) => {
    return api.post('/haunts/discover', {
        data: {
            hauntId: id
        }
    }).then(res => res.data)
}

export default {inRange, discover}