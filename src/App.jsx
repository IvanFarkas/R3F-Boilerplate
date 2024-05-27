import {Stats, OrbitControls, Environment} from '@react-three/drei';
import {Canvas, useLoader} from '@react-three/fiber';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

const App = () => {
  const gltf = useLoader(GLTFLoader, './models/marble_bust_01_1k.glb'); // monkey marble_bust_01_1k

  return (
    <Canvas camera={{position: [-0.5, 1, 2]}}>
      {/* Poly Haven - https://polyhaven.com/hdris */}
      {/* <Environment preset="sunset" background /> */}
      {/* <Environment preset="forest" background /> */}
      <Environment files="./img/chapel_day_1k.hdr" background blur={0} />
      {/* <Environment files="./img/venice_sunset_1k.hdr" background blur={0.5} /> */}
      <directionalLight position={[3.3, 1.0, 4.4]} />
      <primitive object={gltf.scene} position={[0, 0.75, 0]} />
      <OrbitControls target={[0, 1, 0]} autoRotate />
      <axesHelper args={[5]} />
      <Stats />
    </Canvas>
  );
};

export default App;
