import { useEffect, useRef } from 'react'
import { useCylinder } from '@react-three/cannon'
import { useGLTF } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { useStore } from './Game'
import { TextureLoader, DoubleSide, RepeatWrapping } from 'three'

export default function Finish({ position }) {
  const [ref] = useCylinder(() => ({ args: [3.4, 3.4, 0.37, 12], mass: 0, position: position, material: 'ground' }), useRef())
  const { nodes, materials } = useGLTF('./models/finish.glb')
  const groundObjects = useStore((state) => state.groundObjects)
  const interval = useRef(0)

  const texture = useLoader(TextureLoader, './img/finish.png')

  useEffect(() => {
    const id = ref.current.id
    groundObjects[id] = ref.current
    return () => {
      delete groundObjects[id]
    }
  }, [groundObjects, ref])

  useEffect(() => {
    texture.repeat.x = 2
    texture.wrapS = RepeatWrapping
    texture.flipY = true
  }, [texture])

  useFrame((_, delta) => {
    interval.current += delta
    if (interval.current > 0.5) {
      interval.current -= 0.5
      materials['Material.002'].map.rotation += Math.PI
    }
    texture.offset.x += delta / 3
  })

  return (
    <group dispose={null}>
      <mesh ref={ref} position={position} geometry={nodes.Cylinder.geometry} material={materials['Material.002']} receiveShadow>
        <mesh position-y={3}>
          <cylinderGeometry args={[3.4, 3.4, 2, 12, 1, true]} />
          <meshPhongMaterial map={texture} transparent={true} opacity={0.75} side={DoubleSide} />
        </mesh>
      </mesh>
    </group>
  )
}

useGLTF.preload('./models/finish.glb')
