$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);
 
 
  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
 
 
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall
 
 
    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////
 
 
    // TODO 1 - Enable the Grid
     toggleGrid();
 
 
 
 
    // TODO 2 - Create Platforms
  createPlatform(100,700,90,200, "green");
createPlatform(200,600,80,200,"blue")
createPlatform(300,500,70,200,"red")
createPlatform(400,400,60,200,"yellow")
createPlatform(500,300,50,100,"green")

    // TODO 3 - Create Collectables
createCollectable("max",100,170,0.5,0.7);
createCollectable("max", 300,170,0.5,0.7)
 createCollectable("grace",500,150,0.5,0.7)
   
    // TODO 4 - Create Cannons
    createCannon("top", 500, 2000);
    createCannon("right", 500, 600);
createCannon("right", 400, 600);
createCannon("top", 300, 2000);
createCannon("right", 300, 600);
createCannon("right", 200, 600);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }
 
 
  registerSetup(setup);
 });
 