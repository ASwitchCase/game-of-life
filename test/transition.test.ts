import {expect, test } from "bun:test";

const is_alive : boolean = true
const neighbours = [true,true,false,true,false,false,false,false]


const transition = (neighbours : boolean[]) =>{
    const transition_options = {
        true : {2:true, 3:true,},
        false : {3:true}
    }

    let live_neighbours = 0
    for(let neighbour of neighbours){
        if(neighbour == true) live_neighbours += 1
    }
    let option = transition_options[String(is_alive) as keyof typeof transition_options] 
    return option[live_neighbours as keyof typeof option] || false
}


test('return the condition of a cell in the next generation',() =>{
    expect(transition([true,true,false,true,false,false,false,false])).toBe(true)
    expect(transition([true,true,false,false,false,false,false,false])).toBe(true)
    expect(transition([false,false,false,false,false,false,false,false])).toBe(false)
    expect(transition(neighbours)).toBeBoolean()
    
})