import React, { useEffect, useState } from 'react'
import { Cell } from '../models/Cell'

const CellComponent = (props) => {
    const[cell,setCell] = useState(props.cell)

    const toggleCell = () =>{
        
        if(cell.is_alive == false){
            setCell(new Cell(true,props.cell.cords))
            props.onWorldUpdate(new Cell(true,props.cell.cords))
        }else{
            setCell(new Cell(false,props.cell.cords))
            props.onWorldUpdate(new Cell(false,props.cell.cords))
        }
    }

    useEffect(()=>{
        setCell(props.cell)
    },[props.cell])

    return (
        <div onClick={()=> toggleCell()} className='box' style={{
            backgroundColor: cell.is_alive == true? " rgb(106, 255, 47)" : "rgb(22, 22, 22)"
        }}>
            
        </div>
    )
}
//<p style={{color:'white'}}>{`x:${cell.cords.x} y:${cell.cords.y}`}</p>
export default CellComponent