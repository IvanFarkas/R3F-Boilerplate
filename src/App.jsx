import {Canvas} from '@react-three/fiber';
import {OrbitControls, Environment, Stats} from '@react-three/drei';
import {useControls} from 'leva';
import Model from './Model';
import Models from './models.json';

export default function App() {
  const {model} = useControls({model: {value: 'hammer', options: Object.keys(Models)}});

  return (
    <>
      <Canvas camera={{position: [0, 0, -0.2], near: 0.025}}>
        <Environment files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@annotations/public/img/workshop_1k.hdr" background />
        <group>
          <Model url={Models[model]} />
        </group>
        <OrbitControls />
        <Stats />
      </Canvas>
      <span id="info">The {model.replace(/([A-Z])/g, ' $1').toLowerCase()} is selected.</span>
    </>
  );
}
