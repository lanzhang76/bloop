
init();

function init() {
    container = document.getElementById('container');
    camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 5);

    scene = new THREE.Scene();
    scene.background = new THREE.Color('skyblue');

    var geometry = new THREE.SphereGeometry(0.5, 128, 128);
    const vertexShader = `
            #version 300 es
            uniform float time;
            varying vec2 vUv;
            void main(){
                
                gl_Position=vec4(0.,0.,3.,1.);
                
            }
    
        `

    const fragmentShader = ` 
            #version 300 es
            precision highp float;
            precision highp int;

            uniform float time;
            out vec4 out_FragColor;
            varying vec2 vUv;
            void main(){

                gl_FragColor=vec4(1.);
            }
        `
    var material = new THREE.ShaderMaterial({

        uniforms: {

            time: { value: 1.0 },
            resolution: { value: new THREE.Vector2() }

        },

        vertexShader: vertexShader,
        fragmentShader: fragmentShader

    });
    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);



    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    animate(renderer);
}


function animate(renderer) {
    renderer.render(scene, camera);
}