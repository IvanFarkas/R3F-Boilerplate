import {Canvas, useLoader} from '@react-three/fiber';
import {Stats, OrbitControls, ContactShadows} from '@react-three/drei';
import {Leva, useControls} from 'leva';
import Env from './Env';
import Model from './Model';

const App = () => {
  return (
    <>
      <Canvas camera={{position: [12, 5, 12], fov: 80}}>
        <Env />
        <Model />
        <ContactShadows scale={150} position={[0.33, -0.33, 0.33]} opacity={1.5} />
        <OrbitControls target={[0, 1, 0]} maxPolarAngle={Math.PI / 2} />
        <Stats />
      </Canvas>
      <Leva collapsed />
    </>
  );
};

export default App;
