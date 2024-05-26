import {useRef, useState} from 'react';
import {useFrame} from '@react-three/fiber';

export default function Box(props) {
  const ref = useRef();
  const [hovered, setHover] = useState(false);
  const [rotate, setRotate] = useState(false);

  useFrame((_, delta) => {
    if (rotate) {
      ref.current.rotation.x += 1 * delta;
      ref.current.rotation.y += 0.5 * delta;
    }
  });

  const onPointerOver = () => setHover(true);
  const onPointerOut = () => setHover(false);
  const onPointerDown = () => setRotate(!rotate);

  return (
    <mesh {...props} ref={ref} scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]} onPointerOver={onPointerOver} onPointerOut={onPointerOut} onPointerDown={onPointerDown}>
      <boxGeometry />
      <meshBasicMaterial color={hovered ? 0xff0000 : 0x00ff00} wireframe />
    </mesh>
  );
}
