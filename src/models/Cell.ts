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
    transition(neighbours : boolean[]){
        let live_neighbours = 0

        for(let neighbour of neighbours){
            if(neighbour == true) live_neighbours += 1
        }
        if(this.is_alive){
            if(live_neighbours < 2){ // underpopulation
                return false
            }else if(live_neighbours == 2 || live_neighbours == 3) { // stable population
                return true
            }else{ // overpopulation
                return false
            }
        }else{
            if(live_neighbours == 3){ // reproduction
                return true
            }
        }
        return false
    }
}