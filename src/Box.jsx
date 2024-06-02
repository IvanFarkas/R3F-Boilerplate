import {useRef, useState} from 'react';
import {useFrame} from '@react-three/fiber';

const Box = (props) => {
  const ref = useRef();
  const keyMap = props.keyMap;
  const [selected, setSelected] = useState(props.selected);

  useFrame((_, delta) => {
    keyMap['KeyA'] && selected && (ref.current.position.x -= 1 * delta);
    keyMap['KeyD'] && selected && (ref.current.position.x += 1 * delta);
    keyMap['KeyW'] && selected && (ref.current.position.z -= 1 * delta);
    keyMap['KeyS'] && selected && (ref.current.position.z += 1 * delta);
    keyMap['KeyQ'] && selected && (ref.current.position.y += 1 * delta);
    keyMap['KeyZ'] && selected && (ref.current.position.y -= 1 * delta);
  });

  const onPointerDown = () => {
    setSelected(!selected);
  };

  return (
    <mesh ref={ref} {...props} onPointerDown={onPointerDown}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe={!selected} />
    </mesh>
  );
};

export default Box;
