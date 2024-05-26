import {useRef} from 'react';
import {useFrame} from '@react-three/fiber';

export default function Box(props) {
  const ref = useRef();

  useFrame((_, delta) => {
    ref.current.rotation.x += 1 * delta;
    ref.current.rotation.y += 0.5 * delta;
  });

  const onPointerOver = (e) => {
    console.log('pointer over ' + e.object.name);
  };

  const onPointerOut = (e) => {
    console.log('pointer out ' + e.object.name);
  };

  const onPointerDown = (e) => {
    console.log('pointer down ' + e.object.name);
  };

  const onPointerUp = (e) => {
    console.log('pointer up ' + e.object.name);
  };

  const onUpdate = (self) => {
    console.log('onUpdate', self);
  };

  return (
    <mesh {...props} ref={ref} onPointerOver={onPointerOver} onPointerOut={onPointerOut} onPointerDown={onPointerDown} onPointerUp={onPointerUp} onUpdate={onUpdate}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  );
}
