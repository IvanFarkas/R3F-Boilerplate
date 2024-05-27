import {useLoader, Canvas} from '@react-three/fiber';
import {Stats, OrbitControls} from '@react-three/drei';
import {TextureLoader, MeshBasicMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshStandardMaterial} from 'three';
import Polyhedron from './Polyhedron';
import Floor from './Floor';
import Lights from './Lights';

const App = () => {
  const texture = useLoader(TextureLoader, './img/grid.png');

  return (
    <Canvas camera={{position: [4, 4, 1.5]}} shadows>
      <Lights />
      <Polyhedron name="meshBasicMaterial" position={[-3, 1, 0]} material={new MeshBasicMaterial({map: texture})} />
      <Polyhedron name="meshNormalMaterial" position={[-1, 1, 0]} material={new MeshNormalMaterial({flatShading: true})} />
      <Polyhedron name="meshPhongMaterial" position={[1, 1, 0]} material={new MeshPhongMaterial({flatShading: true, map: texture})} />
      <Polyhedron name="meshStandardMaterial" position={[3, 1, 0]} material={new MeshStandardMaterial({flatShading: true, map: texture})} />
      <Floor />
      <OrbitControls target={[0, 1, 0]} />
      <axesHelper args={[5]} />
      <Stats />
    </Canvas>
  );
};

export default App;
