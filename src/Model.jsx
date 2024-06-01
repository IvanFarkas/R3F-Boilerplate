import {useState} from 'react';
import {useGLTF, Html} from '@react-three/drei';

const Model = ({url}) => {
  const {scene} = useGLTF(url);
  const [cache, setCache] = useState({});

  if (!cache[url]) {
    const annotations = [];

    scene.traverse((o) => {
      if (o.userData.prop) {
        annotations.push(
          <Html key={o.uuid} position={[o.position.x, o.position.y, o.position.z]} distanceFactor={0.25}>
            <div className="annotation">{o.userData.prop}</div>
          </Html>,
        );
      }
    });

    console.log('Caching JSX for url ' + url);
    setCache({
      ...cache,
      [url]: <primitive object={scene}>{annotations}</primitive>,
    });
  }
  return cache[url];
};

export default Model;
