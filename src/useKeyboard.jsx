import {useEffect, useRef} from 'react';
import {exp} from 'three/examples/jsm/nodes/Nodes.js';

const useKeyboard = () => {
  const keyMap = useRef({});

  useEffect(() => {
    const onDocumentKey = (e) => {
      keyMap.current[e.code] = e.type === 'keydown';
    };
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
