import {Canvas} from '@react-three/fiber';
import {Stats, OrbitControls} from '@react-three/drei';
import {MeshBasicMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshStandardMaterial} from 'three';
import Polyhedron from './Polyhedron';
import Lights from './Lights';

export default function App() {
  return (
    <Canvas camera={{position: [4, 4, 1.5]}}>
      <Lights />
      <Polyhedron name="meshBasicMaterial" position={[-3, 1, 0]} material={new MeshBasicMaterial({color: 'yellow', flatShading: true})} />
      <Polyhedron name="meshNormalMaterial" position={[-1, 1, 0]} material={new MeshNormalMaterial({flatShading: true})} />
      <Polyhedron name="meshPhongMaterial" position={[1, 1, 0]} material={new MeshPhongMaterial({color: 'lime', flatShading: true})} />
      <Polyhedron name="meshStandardMaterial" position={[3, 1, 0]} material={new MeshStandardMaterial({color: 0xff0033, flatShading: true})} />
      <OrbitControls target={[2, 2, 0]} />
      <axesHelper args={[5]} />
      <gridHelper />
      <Stats />
    </Canvas>
  );
}
