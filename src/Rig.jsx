import {useThree, useFrame} from '@react-three/fiber';
import {Vector3} from 'three';

const Rig = () => {
  const {camera, mouse} = useThree();
  const vec = new Vector3();

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 2, camera.position.z), 0.05);
    camera.lookAt(0, 0, 0);
  });
};

export default Rig;
