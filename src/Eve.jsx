import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import { useStore } from './App'

export default function Eve() {
  const ref = useRef()
  const { nodes, materials } = useGLTF('./models/eve.glb')
  const idleAnimation = useGLTF('./models/eve@idle.glb').animations
  const walkAnimation = useGLTF('./models/eve@walking.glb').animations
  const runningAnimation = useGLTF('./models/eve@running.glb').animations
  const jumpAnimation = useGLTF('./models/eve@jump.glb').animations
  const poseAnimation = useGLTF('./models/eve@pose.glb').animations

  const { actions, mixer } = useStore((state) => state)

  useEffect(() => {
    actions['idle'] = mixer.clipAction(idleAnimation[0], ref.current)
    actions['walk'] = mixer.clipAction(walkAnimation[0], ref.current)
    actions['running'] = mixer.clipAction(runningAnimation[0], ref.current)
    actions['jump'] = mixer.clipAction(jumpAnimation[0], ref.current)
    actions['pose'] = mixer.clipAction(poseAnimation[0], ref.current)

    actions['idle'].play()
  }, [actions, mixer, idleAnimation, walkAnimation, runningAnimation, jumpAnimation, poseAnimation])

  return (
    <group ref={ref} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh castShadow name="Mesh" frustumCulled={false} geometry={nodes.Mesh.geometry} material={materials.SpacePirate_M} skeleton={nodes.Mesh.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(['./models/eve.glb', './models/eve@idle.glb', './models/eve@running.glb', './models/eve@walking.glb', './models/eve@jump.glb', './models/eve@pose.glb'])
