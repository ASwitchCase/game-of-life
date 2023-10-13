import { Universe } from "./models/Universe";

let world = new Universe(8,8)

world.world_grid[2][4].is_alive = true
world.world_grid[3][3].is_alive = true
world.world_grid[4][3].is_alive = true
world.world_grid[3][2].is_alive = true

world.printGrid()
world.world_grid = world.next_gen(8,8)
world.printGrid()
world.world_grid = world.next_gen(8,8)
world.printGrid()
world.world_grid = world.next_gen(8,8)
world.printGrid()
world.world_grid = world.next_gen(8,8)
world.printGrid()
world.world_grid = world.next_gen(8,8)
world.printGrid()
world.world_grid = world.next_gen(8,8)
