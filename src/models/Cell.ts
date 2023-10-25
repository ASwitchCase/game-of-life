export class Cell {
    is_alive : boolean
    cords : {x : number,y : number}
    constructor(a : boolean, cords: {x:number,y:number}){
        this.is_alive = a
        this.cords = {x:cords.x,y:cords.y}
    }

    /**
     * 
     * @param neighbours 
     * @returns true if cell lives in next generation or false if it is dead
     */
    transition = (neighbours : boolean[]) =>{
        const transition_options = {
            true : {2:true, 3:true,},
            false : {3:true}
        }

        let live_neighbours = 0
        for(let neighbour of neighbours){
            if(neighbour == true) live_neighbours += 1
        }
        let option = transition_options[String(this.is_alive) as keyof typeof transition_options] 
        return option[live_neighbours as keyof typeof option] || false
    }
}