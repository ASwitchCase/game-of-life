import React from 'react'
import Cell from '../Components/CellComponent'
import UniverseComponent from '../Components/UniverseComponent'

const GamePage = () =>{
    return (
        <div style={{display:'flex',width:'100%',justifyContent:"center"}}>
            <UniverseComponent size={40}/>
        </div>
    )
}

export default GamePage