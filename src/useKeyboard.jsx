import {useEffect, useRef} from 'react';

// See FPS Octree for custom hooks - https://sbcode.net/react-three-fiber/fps-octree
const useKeyboard = () => {
  const keyMap = useRef({});

  // Debug - getEventListeners(document)
  useEffect(() => {
    const onDocumentKey = (e) => (keyMap.current[e.code] = e.type === 'keydown');
    document.addEventListener('keydown', onDocumentKey);
    document.addEventListener('keyup', onDocumentKey);

    return () => {
      document.removeEventListener('keydown', onDocumentKey);
      document.removeEventListener('keyup', onDocumentKey);
    };
  });

  return keyMap.current;
};

export default useKeyboard;
