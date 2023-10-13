import React, { useEffect, useState } from 'react'
import { Universe } from '../models/Universe'
import CellComponent from './CellComponent'
import { Cell } from '../models/Cell'


const UniverseComponent = (props) =>{
    const[universe,setUniverse] = useState(new Universe(props.size,props.size))
    
    const handleWorldUpdate = (cell : Cell) => {
        let newWorld = new Universe(props.size,props.size)
        newWorld.world_grid = universe.world_grid
        newWorld.world_grid[cell.cords.x][cell.cords.y] = cell
        setUniverse(newWorld)
    }

    const nextGen = () =>{
        let newWorld = new Universe(props.size,props.size)
        newWorld.world_grid = universe.next_gen(props.size,props.size)

        setUniverse(newWorld)
    }

    return(
        <div>
            {universe.world_grid.map(row =>{
                return(
                    <div className='grid-row'>
                        {row.map(box => <CellComponent key={`x${box.cords.x}y${box.cords.y}`} cell={box} 
                            onWorldUpdate={handleWorldUpdate}
                        />)}
                    </div>
                )
            })}
            <div className='tools'>
                <button onClick={() => nextGen()}>Next Gen</button>
            </div>
            
        </div>
        
    )
}

export default UniverseComponent
