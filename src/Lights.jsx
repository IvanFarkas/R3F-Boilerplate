import {useRef} from 'react';
import {useControls} from 'leva';

const Lights = () => {
  const directionalRef = useRef();

  useControls('Directional Light', {
    intensity: {value: 1, min: 0, max: 5, step: 0.1, onChange: (e) => (directionalRef.current.intensity = e)},
    position: {x: 3.3, y: 1.0, z: 4.4, onChange: (e) => directionalRef.current.position.copy(e)},
  });

  return <directionalLight ref={directionalRef} castShadow />;
};

export default Lights;
