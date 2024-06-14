var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    World = Matter.World;


// 엔진 선언 
const engine = Engine.create();

// 렌더 선언
const render = Render.create({
    engine: engine,
    element: document.body,
    options: {
        wireframes: false,
        background: '#F7F4C8',
        width: 620,
        height: 850,
    }
});

Render.run(render);
Runner.run(engine);
