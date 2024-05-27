import {useRef, useState} from 'react';
import {useFrame} from '@react-three/fiber';

export default function Polyhedron({position, polyhedron}) {
  const ref = useRef();
  const [count, setCount] = useState(0);

  console.log(polyhedron);

  useFrame((_, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += 0.5 * delta;
  });

  const onPointerDown = () => setCount((count + 1) % 3);
  const geometry = polyhedron[count];

  return (
    <mesh position={position} ref={ref} onPointerDown={onPointerDown} geometry={geometry}>
      <meshBasicMaterial color={'lime'} wireframe />
    </mesh>
  );
}
