import { ExtendedObject3D, PhysicsLoader, Project, Scene3D } from "enable3d";
/**
 * Uncomment the scene you want to run. (default three.js)
 */

// start three.js scene (with enable3d physics)
// import './three'

// start standalone enable3d scene
// import './standalone'

export class PhysicsTest extends Scene3D {
  init() {
  }
  async preload() {
  }
  create() {
    
  }
  update(delta: number) {
  }
const config = { scenes: [PhysicsTest], antialias: true };
PhysicsLoader("/ammo", () => new Project(config));
