import {useRef, useState} from 'react';

export default function Polyhedron({polyhedron, color, ...props}) {
  const ref = useRef();
  const [count, setCount] = useState(2);

  console.log(polyhedron[count].uuid);

  const onPointerDown = () => setCount((count + 1) % 3);

  return (
    <mesh {...props} ref={ref} onPointerDown={onPointerDown} geometry={polyhedron[count]}>
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
}
