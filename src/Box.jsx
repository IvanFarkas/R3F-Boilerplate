import {useEffect, useRef} from 'react';

export default function Box(props) {
  const ref = useRef();

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef != undefined) {
      console.log(currentRef);
    }
  });

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  );
}
