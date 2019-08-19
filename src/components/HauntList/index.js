import React, {useState,useEffect, useRef} from 'react'
import HauntCard from '../HauntCard'

export default (props) => {
    const {haunts} = props

    return(
        <div>
            {haunts.isFetching ?
            'Carregando' :
            haunts.items.map( haunt => {
                return (<HauntCard 
                name={haunt.name}
                shortLocation={haunt.locationShortName} 
                type={haunt.type}
                discovered={haunt.discovered}
                key={haunt._id}
                />)
            })}
        </div>
    )
}