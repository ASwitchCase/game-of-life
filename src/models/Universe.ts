import { Cell } from "./Cell";

export class Universe {
    world_grid : Cell[][]

    constructor(x : number, y : number){
        this.world_grid = this.generate_world(x,y)
    }

    /**
     * 
     * @param x_range 
     * @param y_range 
     * @returns new world grid with set range
     */
    generate_world(x_range : number , y_range: number){
        let new_world = []

        for(let y = 0; y < y_range; y++){
            new_world.push(new Array())
            for(let x = 0; x < x_range; x++){
                new_world[y].push(new Cell(false,{x:y,y:x}))
            }
        }

        return new_world
    }

    /**
     * 
     * @param x_range 
     * @param y_range 
     * @returns a new world grid
     */
    next_gen(x_range : number , y_range: number){
        let new_world = []

        for(let y = 0; y < y_range; y++){
            new_world.push(new Array())
            for(let x = 0; x < x_range; x++){
                let newState = this.world_grid[y][x].transition(this.get_neighbours(y,x))
                new_world[y].push(new Cell(newState,{x:y,y:x}))
            }
        }

        return new_world
    }

    get_neighbours(x : number, y : number){
        let neighbour_states = []
        
        if(x-1 >= 0 && y-1 >= 0){
            neighbour_states.push(this.world_grid[x-1][y-1].is_alive)
        } 
        if(x+1 < this.world_grid.length && y+1 < this.world_grid.length){
            neighbour_states.push(this.world_grid[x+1][y+1].is_alive)
        } 
        
        if(x+1 < this.world_grid.length && y-1 >= 0){
            neighbour_states.push(this.world_grid[x+1][y-1].is_alive)
        } 
        if(x-1 >= 0 && y+1 < this.world_grid.length){
            neighbour_states.push(this.world_grid[x-1][y+1].is_alive)
        } 

        if(x-1 >= 0){
            neighbour_states.push(this.world_grid[x-1][y].is_alive)
        } 
        if(y-1 >= 0){
            neighbour_states.push(this.world_grid[x][y-1].is_alive)
        } 
        if(x+1 < this.world_grid.length){
            neighbour_states.push(this.world_grid[x+1][y].is_alive)
        } 
        if(y+1 < this.world_grid.length){
            neighbour_states.push(this.world_grid[x][y+1].is_alive)
        } 
        
        return neighbour_states
    }

    printGrid(){
        let result = ""
        for(let row of this.world_grid){
            let s = ""
            for(let box of row){
                s = `${s} ${box.is_alive ? "0" : "X"}`
            }
            result = `${result}\n${s}`
        }
        console.log(result)
    }

    /**
     * 
     */
}