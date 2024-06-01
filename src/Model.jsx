import {useGLTF, Clone} from '@react-three/drei';

const Model = ({url}) => {
  const {scene} = useGLTF(url);

  return <Clone object={scene} />;
};

export default Model;
