import {Canvas} from '@react-three/fiber';
import {Stats, Environment, Center} from '@react-three/drei';
import Button from './Button';
import Rig from './Rig';

const App = () => {
  return (
    <Canvas camera={{position: [0, 0, 5]}} shadows>
      <Environment files="./img/forest_slope_1k.hdr" background />
      <Center>{[...Array(5).keys()].map((x) => [...Array(3).keys()].map((y) => <Button key={x + y * 5} position={[x * 2.5, y * 2.5, 0]} />))}</Center>
      <Rig />
      <Stats />
    </Canvas>
  );
};

export default App;
