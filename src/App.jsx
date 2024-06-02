import {Canvas} from '@react-three/fiber';
import {OrbitControls, Environment, ContactShadows} from '@react-three/drei';
import {Shoe} from './Shoe';

const App = () => {
  console.log('in app');
  return (
    <Canvas shadows camera={{position: [0, 0, 1.66]}}>
      <Environment preset="forest" />
      <Shoe />
      <ContactShadows position={[0, -0.8, 0]} color="#ffffff" />
      <OrbitControls autoRotate />
    </Canvas>
  );
};

export default App;
