// Author: Ricardo Skewes  
// August 2022



let a1, a2, a3;

function setup() {
  
  // Create canvas
  createCanvas(400, 400, WEBGL);
  //debugMode(800, 16, 0, 0, 0, 0, 0, 0, 0);
  
}

function draw() {
  background(230);
 
  
  // Simulation size
  const s = 1000;
  const n = 5;
  
  // Lattice vectors
  let a1 = createVector(50, 0, 0);
  let a2 = createVector(0, 50, 0);
  let a3 = createVector(0, 0, 50);
  A = [a1, a2, a3];

  // Reciprocal lattice vectors
  //let b1 = createVector(1, 0, 0);
  //let b2 = createVector(0, 1, 0);
  //let b3 = createVector(0, 0, 1);
  // B = [b1, b2, b3];
  
  // x,y,z
  let e1 = createVector(1, 0, 0);
  let e2 = createVector(0, 1, 0);
  let e3 = createVector(0, 0, 1);
  E = [e1, e2, e3];
  
 
  
  // Axes
  /*for (let i = 0; i < 3; i++) {
    let axis = E[i].mult(s);
    line(-axis.x, -axis.y, -axis.z, axis.x, axis.y, axis.z);
  }*/
  
  // Square cell
  //fill(255, 0, 0, 1);
  //translate(0,0,0);
  //box(50);
  
  let r0 = p5.Vector.add(p5.Vector.add(p5.Vector.mult(A[1], -n), p5.Vector.mult(A[2], -n)), p5.Vector.mult(A[0], -n));
  translate(r0);
  normalMaterial();
  for(let i = -n; i <= n; i++) {
    for(let j = -n; j <= n; j++) {
      for (let k = -n; k <= n; k++) {
      sphere(4);
      translate(A[2]);
    }
    translate(p5.Vector.add(p5.Vector.mult(A[2], -(2*n+1)), A[1]));
    }
  translate(p5.Vector.add(p5.Vector.mult(A[1], -(2*n+1)),A[0]));
  }
  
  
  
  orbitControl();
}
