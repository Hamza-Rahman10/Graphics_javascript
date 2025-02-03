/**
 * Cells lab 3 starter for IS51030B Graphics
 * Simulate moving cells in 3D environment using kinematics
 * Technical concepts
 *   - creating 2D, 3D vector
     - understanding 3D directions
     - Advanced kinematics
     - Collisions and edge detection
     - WEBGL programming. Texturing, lights
 * by Hamza Rahman, 2024 <p.thattairavikumar@gold.ac.uk>
 */

let cells = []; // array of cells objects

function setup() {
  createCanvas(900, 900, WEBGL);

  // Test out the constructor function.

  cells = createCells(20); //create 5 cells

  let testCell = new Cell({
     position: createVector(1,2,3),
     velocity: createVector(-1,-2,-3),
     life: 600,
     radius: 35
  });

 console.log("Testing cell:");
 console.log(testCell);

}

function draw() {
  background(80); // clear screen
  fill(255)

 for (let cell of cells) {
    cell.draw(); //cell physicall
    cell.move(); // cell movement
    cell.detectEdge(); // cell detection
  }

  //handle cells collision
  collideCells(cells);
  
}


/*
@param {Arguments} : position, velocity, diameter, life properties
*/

class Cell {
  constructor({position, velocity, radius, life,}) {
    this.position = position; //vector representing cell 3d pos
    this.velocity = velocity; //vector in cell movement
    this.radius = radius; // size of cell
    this.life = life; //cell span
  }

  draw() { //render cell
    push();
    translate(this.position.x, this.position.y, this.position.z);
    sphere(this.radius)
    pop();
  }

  move() { //updates cell on movement
    this.position.add(this.velocity);
  }

  detectEdge() { //makes sure it alligns with canvas
    let worldDiameteter = width;
    let distanceFromOrigin = this.position.mag();
    if (distanceFromOrigin > worldDiameteter / 2) { //checks cell movement if it goes beyong boundaries
      this.velocity.mult(-1);
    }
  }
}



/**
 * Initialise the cells array with a number of new Cell objects
 *
 * @param {Integer} n_cells Number of cells for the new array
 * @returns {Array} array of new Cells objects
 */
function createCells(n_cells) { //holds cell objects
  let cellsArray = [];
  for (let i = 0; i < n_cells; i++) {
    let position = p5.Vector.random3D().mult(random(100)); //scales to rand length
    let velocity = p5.Vector.random3D();
    let radius = random(5, 20); //size of cells
    let life = int(random(100, 600)); //100 to 600 frames
    cellsArray.push(new Cell({position, velocity, radius, life}));
  }
  return cellsArray;
}


/**
 * Collide two cells together
 * @param {Array} cellsArray Array of Cell objects to draw
 */
function collideCells(cellsArray) {
}

//p5j setup function


