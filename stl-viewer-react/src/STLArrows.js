import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
let camera;
let scene;
let renderer;
let controls;
let id = null;
let canvas;

export default function Stl(stlid, width, height, file, objectColor, primaryColor,volume) {
    let rotateModel = true;
    // let showGrid = false;

    document.getElementById("errorView"+stlid).style.display = "none";
    if (id !== null) {
        cancelAnimationFrame(id);
    }
    scene = new THREE.Scene();
    scene.background = new THREE.Color(255, 255, 255);
    scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(200, 100, 200);


    canvas = document.getElementById("canvas");
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
        canvas
    });

    renderer.setSize(width, height);
    document.getElementById("stlviewer"+stlid).innerHTML = "";
    document.getElementById("stlviewer"+stlid).appendChild(renderer.domElement);
    controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = rotateModel;
    controls.autoRotateSpeed = 0.75;
    controls.enableDamping = true;
    controls.dampingFactor = 0.04;
    controls.target.set(0, 0, 0);
    controls.update();
    const grid = new THREE.GridHelper(2000, 20, primaryColor, primaryColor);
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
    scene.add(grid);

    
    // lights
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
    hemiLight.position.set(0, 200, 0);
    scene.add(hemiLight);

    const directionalLight = new THREE.DirectionalLight("rgb(255, 255, 255)");
    directionalLight.position.set(0, 200, 100);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.top = 180;
    directionalLight.shadow.camera.bottom = -100;
    directionalLight.shadow.camera.left = -120;
    directionalLight.shadow.camera.right = 120;
    scene.add(directionalLight);
    let loadedModel = null;

    const material = new THREE.MeshPhongMaterial({
        color: objectColor,
        specular: 0x111111,
        shininess: 150,
        vertexColors: false
    });

    const loader = new STLLoader();

    loader.load(
        file.uri,
        geometry => {
            loadedModel = new THREE.Mesh(geometry, material);
            loadedModel.position.set(0, 0, 0);
            loadedModel.scale.set(1, 1, 1);
            loadedModel.rotation.set(-Math.PI / 2, 0, 0);
            loadedModel.castShadow = true;
            loadedModel.receiveShadow = true;
            loadedModel.geometry.computeBoundingBox();
            loadedModel.geometry.center();
            scene.add(loadedModel);
            
        },
        xhr => {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        error => {
            if (
                // catch error with local rest service
                error != undefined &&
                error.message != undefined &&
                (error.message.includes("invalid array length") || error.message.includes("Invalid typed array"))
            ) {
            } else {
                console.log(error);
                document.getElementById("errorView"+stlid).style.display = "flex";
            }
        }
    );

    const animate = () => {
        id = requestAnimationFrame(animate);
        if (loadedModel != null) {

        }
        controls.update();
        renderer.render(scene, camera);
    };
    animate();
}
