var THREE = require('three');
// these need to be accessed inside more than one function so we'll declare them first
let renderer;
let camera;
let scene;
let mesh;

function init() {
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xffffff ); 

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.set( 0, 0, 5 );
    camera.lookAt( 0, 0, 0 );

    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    mesh = new THREE.Mesh( geometry, material );

    scene.add( mesh );
}

function animate() {
    requestAnimationFrame( animate );

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;

    renderer.render( scene, camera );
};

// call the init function to set everything up
init();

// then call the animate function to render the scene
animate();