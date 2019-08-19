import React, {useState, useEffect, useRef} from 'react'
import HauntList from '../../components/HauntList'
import HauntService from '../../services/HauntService'
import firebaseHelper from '../../util/firebaseHelper'

const fetchHaunt = async (lat, lng, range) => {

    let list = await HauntService.inRange(lat, lng, range)
    console.log(list)
}

window.testHauntList = () => navigator.geolocation.getCurrentPosition(({coords}) => {
    console.log(coords)
    fetchHaunt(coords.latitude, coords.longitude, 3000)
})

const DiscoverPage = () => {
    

    const [coords, setcoords] = useState({lat: '', lng: '', loading: true})
    const [haunts, sethaunts] = useState({isFetching: true, items: []})
    const firstRender = useRef(true)
    
    const fetchHauntList = async () => {
        return HauntService.inRange(coords.lat, coords.lng, 3000)
    }

    useEffect( () => {
        if (firstRender.current){
            firstRender.current = false
            navigator.geolocation.getCurrentPosition( (geo) => {
                    let newCoords = {lat: geo.coords.latitude, lng: geo.coords.longitude, loading: false}
                    setcoords(newCoords)
            })
        }
        if (!coords.loading){
            fetchHauntList()
            .then(data => {
                sethaunts({isFetching: false, items: data})
            })
        }
    })

    return (
        <>
        <h1>Assombrações por perto</h1>
        {
            coords.loading ?
            <h1>Carregando...</h1> :
            <HauntList haunts={haunts} />
        }
        </>)
}

export default DiscoverPage