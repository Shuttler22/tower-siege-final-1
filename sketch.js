const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon, a, b, c, d, e, f, g, h, i, j, k, l;
function preload(){
    polygonImage = loadImage("polygon.png");
}
function setup(){
    createCanvas(900, 900);
    engine = Engine.create();
    world = engine.world;

    a = new Ground(450, 700, 250, 10)
    b = new Ground(780, 200, 180, 10);
    ground0  = new Ground(450, 895, 1800, 10)

    c = new BaseClass(370, 670, 50, 50);
    d = new BaseClass(425, 670, 50, 50);
    e = new BaseClass(480, 670, 50, 50);
    f = new BaseClass(535, 670, 50, 50);

    g = new BaseClass(395, 618, 50, 50);
    h = new BaseClass(450, 618, 50, 50);
    j = new BaseClass(505, 618, 50, 50);

    k = new BaseClass(425, 566, 50, 50);
    l = new BaseClass(480, 566, 50, 50);

    i = new BaseClass(450, 514, 50, 50)


    polygon = new Polygon(60, 500, 10)


    aa = new BaseClass(720, 175, 40, 40)
    ab = new BaseClass(762, 175, 40, 40)
    ac= new BaseClass(804, 175, 40, 40)

    ba = new BaseClass(742, 132, 40, 40)
    bb = new BaseClass(784, 132, 40, 40)

    ca = new BaseClass(765 , 89,  40, 40)





slingshot1 = new SlingShot(polygon, {x: 60, y:480})


    Engine.run(engine)
}
function draw(){
    background("black");
    Engine.update(engine)
    a.display();
    b.display();
    c.display();
    d.display();
    e.display();
    f.display();
    g.display();
    h.display();
    j.display();
    k.display();
    j.display();
    l.display();
    i.display();
    



    aa.display();
    ab.display();
    ac.display();

    ba.display();
    bb.display();

    ca.display();
    polygon.display();
    ground0.display()
    slingshot1.display()
}

