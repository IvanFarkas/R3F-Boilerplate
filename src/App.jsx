import {Canvas} from '@react-three/fiber';
import {Stats, OrbitControls} from '@react-three/drei';
import * as THREE from 'three';
import Polyhedron from './Polyhedron';

export default function App() {
  const polyhedron = [
    new THREE.BoxGeometry(),
    new THREE.SphereGeometry(0.785398),
    new THREE.DodecahedronGeometry(0.785398),
  ];

  return (
    <Canvas camera={{position: [1, 2, 3]}}>
      <Polyhedron position={[-0.75, -0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[0.75, -0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[-0.75, 0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[0.75, 0.75, 0]} polyhedron={polyhedron} />
      <OrbitControls />
      <axesHelper args={[5]} />
      <gridHelper />
      <Stats />
    </Canvas>
  );
}
