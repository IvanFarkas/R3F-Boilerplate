import {useRef, useState, useEffect, useMemo} from 'react';
import {useFrame} from '@react-three/fiber';
import {BoxGeometry, SphereGeometry} from 'three';

export default function Box(props) {
  const ref = useRef();
  const [count, setCount] = useState(0);
  const geometry = useMemo(() => [new BoxGeometry(), new SphereGeometry(0.785398)], []);

  useEffect(() => {
    console.log(ref.current.geometry.uuid);
  });

  useFrame((_, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += 0.5 * delta;
  });

  const onPointerDown = () => setCount((count + 1) % 2);

  return (
    <mesh {...props} ref={ref} geometry={geometry[count]} onPointerDown={onPointerDown}>
      <meshBasicMaterial color={'lime'} wireframe />
    </mesh>
  );
}
