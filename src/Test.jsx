/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 .\public\models\test.glb -T
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva'

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/test-transformed.glb')
  // Object.keys(materials).forEach((m) => {
  //   materials[m].transparent = true
  //   materials[m].opacity = 0.5
  // })

  useControls('Map', () => {
    return Object.keys(materials).reduce(
      (accumulator, m) =>
        Object.assign(accumulator, {
          [m]: {
            value: true,
            onChange: (v) => {
              materials[m].visible = v
            }
          }
        }),
      {}
    )
  })

  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 11802.8, 0]}
        // onClick={(e) => {
        //   e.stopPropagation()
        //   document.getElementById('Map.' + e.object.material.name).focus()
        // }}
        >
        <mesh geometry={nodes.test_1.geometry} material={materials.material_0} />
        <mesh geometry={nodes.test_2.geometry} material={materials.material_1} />
        <mesh geometry={nodes.test_3.geometry} material={materials.material_1} />
        {/* <mesh geometry={nodes.test_4.geometry} material={materials.material_3} /> */}
        <mesh geometry={nodes.test_5.geometry} material={materials.material_4} />
        <mesh geometry={nodes.test_6.geometry} material={materials.material_5} />
        <mesh geometry={nodes.test_7.geometry} material={materials.material_6} />
        <mesh geometry={nodes.test_8.geometry} material={materials.material_7} />
        <mesh geometry={nodes.test_9.geometry} material={materials.material_8} />
        <mesh geometry={nodes.test_10.geometry} material={materials.material_9} />
        <mesh geometry={nodes.test_11.geometry} material={materials.material_10} />
        <mesh geometry={nodes.test_12.geometry} material={materials.material_11} />
        <mesh geometry={nodes.test_13.geometry} material={materials.material_12} />
        <mesh geometry={nodes.test_14.geometry} material={materials.material_13} />
        <mesh geometry={nodes.test_15.geometry} material={materials.material_14} />
        <mesh geometry={nodes.test_16.geometry} material={materials.material_15} />
        <mesh geometry={nodes.test_17.geometry} material={materials.material_16} />
        <mesh geometry={nodes.test_18.geometry} material={materials.material_17} />
        <mesh geometry={nodes.test_19.geometry} material={materials.material_18} />
        <mesh geometry={nodes.test_20.geometry} material={materials.material_19} />
        <mesh geometry={nodes.test_21.geometry} material={materials.material_20} />
        <mesh geometry={nodes.test_22.geometry} material={materials.material_21} />
        <mesh geometry={nodes.test_23.geometry} material={materials.material_22} />
        <mesh geometry={nodes.test_24.geometry} material={materials.material_11} />
        <mesh geometry={nodes.test_25.geometry} material={materials.material_11} />
        <mesh geometry={nodes.test_26.geometry} material={materials.material_11} />
        <mesh geometry={nodes.test_27.geometry} material={materials.material_19} />
        <mesh geometry={nodes.test_28.geometry} material={materials.material_11} />
        <mesh geometry={nodes.test_29.geometry} material={materials.material_11} />
        <mesh geometry={nodes.test_30.geometry} material={materials.material_11} />
        <mesh geometry={nodes.test_31.geometry} material={materials.material_30} />
        <mesh geometry={nodes.test_32.geometry} material={materials.material_11} />
        <mesh geometry={nodes.test_33.geometry} material={materials.material_11} />
        <mesh geometry={nodes.test_34.geometry} material={materials.material_11} />
        <mesh geometry={nodes.test_35.geometry} material={materials.material_11} />
        <mesh geometry={nodes.test_36.geometry} material={materials.material_11} />
        <mesh geometry={nodes.test_37.geometry} material={materials.material_36} />
        <mesh geometry={nodes.test_38.geometry} material={materials.material_37} />
        <mesh geometry={nodes.test_39.geometry} material={materials.material_38} />
        <mesh geometry={nodes.test_40.geometry} material={materials.material_11} />
        <mesh geometry={nodes.test_41.geometry} material={materials.material_11} />
        <mesh geometry={nodes.test_42.geometry} material={materials.material_41} />
        <mesh geometry={nodes.test_43.geometry} material={materials.material_11} />
        <mesh geometry={nodes.test_44.geometry} material={materials.material_43} />
        <mesh geometry={nodes.test_45.geometry} material={materials.material_44} />
        <mesh geometry={nodes.test_46.geometry} material={materials.material_45} />
        <mesh geometry={nodes.test_47.geometry} material={materials.material_46} />
        <mesh geometry={nodes.test_48.geometry} material={materials.material_47} />
        <mesh geometry={nodes.test_49.geometry} material={materials.material_48} />
        <mesh geometry={nodes.test_50.geometry} material={materials.material_49} />
        <mesh geometry={nodes.test_51.geometry} material={materials.material_50} />
        <mesh geometry={nodes.test_52.geometry} material={materials.material_51} />
        <mesh geometry={nodes.test_53.geometry} material={materials.material_52} />
        <mesh geometry={nodes.test_54.geometry} material={materials.material_53} />
        <mesh geometry={nodes.test_55.geometry} material={materials.material_54} />
        <mesh geometry={nodes.test_56.geometry} material={materials.material_55} />
        <mesh geometry={nodes.test_57.geometry} material={materials.material_56} />
        <mesh geometry={nodes.test_58.geometry} material={materials.material_57} />
        <mesh geometry={nodes.test_59.geometry} material={materials.material_58} />
        <mesh geometry={nodes.test_60.geometry} material={materials.material_18} />
        <mesh geometry={nodes.test_61.geometry} material={materials.material_60} />
        <mesh geometry={nodes.test_62.geometry} material={materials.material_18} />
        <mesh geometry={nodes.test_63.geometry} material={materials.material_18} />
        <mesh geometry={nodes.test_64.geometry} material={materials.material_63} />
        <mesh geometry={nodes.test_65.geometry} material={materials.material_64} />
        <mesh geometry={nodes.test_66.geometry} material={materials.material_65} />
        <mesh geometry={nodes.test_67.geometry} material={materials.material_58} />
        <mesh geometry={nodes.test_68.geometry} material={materials.material_30} />
        <mesh geometry={nodes.test_69.geometry} material={materials.material_58} />
        <mesh geometry={nodes.test_70.geometry} material={materials.material_58} />
        <mesh geometry={nodes.test_71.geometry} material={materials.material_70} />
        <mesh geometry={nodes.test_72.geometry} material={materials.material_71} />
        <mesh geometry={nodes.test_73.geometry} material={materials.material_72} />
        <mesh geometry={nodes.test_74.geometry} material={materials.material_73} />
        <mesh geometry={nodes.test_75.geometry} material={materials.material_74} />
        <mesh geometry={nodes.test_76.geometry} material={materials.material_75} />
        <mesh geometry={nodes.test_77.geometry} material={materials.material_76} />
        <mesh geometry={nodes.test_78.geometry} material={materials.material_77} />
        <mesh geometry={nodes.test_79.geometry} material={materials.material_78} />
        <mesh geometry={nodes.test_80.geometry} material={materials.material_79} />
        <mesh geometry={nodes.test_81.geometry} material={materials.material_80} />
        <mesh geometry={nodes.test_82.geometry} material={materials.material_81} />
        <mesh geometry={nodes.test_83.geometry} material={materials.material_82} />
        <mesh geometry={nodes.test_84.geometry} material={materials.material_83} />
        <mesh geometry={nodes.test_85.geometry} material={materials.material_84} />
        <mesh geometry={nodes.test_86.geometry} material={materials.material_85} />
        <mesh geometry={nodes.test_87.geometry} material={materials.material_86} />
        <mesh geometry={nodes.test_88.geometry} material={materials.material_87} />
        <mesh geometry={nodes.test_89.geometry} material={materials.material_88} />
        <mesh geometry={nodes.test_90.geometry} material={materials.material_89} />
        <mesh geometry={nodes.test_91.geometry} material={materials.material_90} />
        <mesh geometry={nodes.test_92.geometry} material={materials.material_91} />
        <mesh geometry={nodes.test_93.geometry} material={materials.material_92} />
        <mesh geometry={nodes.test_94.geometry} material={materials.material_91} />
        <mesh geometry={nodes.test_95.geometry} material={materials.material_94} />
        <mesh geometry={nodes.test_96.geometry} material={materials.material_91} />
        <mesh geometry={nodes.test_97.geometry} material={materials.material_91} />
        <mesh geometry={nodes.test_98.geometry} material={materials.material_92} />
        <mesh geometry={nodes.test_99.geometry} material={materials.material_92} />
        <mesh geometry={nodes.test_100.geometry} material={materials.material_92} />
        <mesh geometry={nodes.test_101.geometry} material={materials.material_91} />
        <mesh geometry={nodes.test_102.geometry} material={materials.material_92} />
        <mesh geometry={nodes.test_103.geometry} material={materials.material_102} />
        <mesh geometry={nodes.test_104.geometry} material={materials.material_103} />
        <mesh geometry={nodes.test_105.geometry} material={materials.material_104} />
        <mesh geometry={nodes.test_106.geometry} material={materials.material_105} />
        <mesh geometry={nodes.test_107.geometry} material={materials.material_106} />
        <mesh geometry={nodes.test_108.geometry} material={materials.material_107} />
        <mesh geometry={nodes.test_109.geometry} material={materials.material_108} />
        <mesh geometry={nodes.test_110.geometry} material={materials.material_109} />
        <mesh geometry={nodes.test_111.geometry} material={materials.material_110} />
        <mesh geometry={nodes.test_112.geometry} material={materials.material_111} />
        <mesh geometry={nodes.test_113.geometry} material={materials.material_30} />
        <mesh geometry={nodes.test_114.geometry} material={materials.material_30} />
        <mesh geometry={nodes.test_115.geometry} material={materials.material_114} />
        <mesh geometry={nodes.test_116.geometry} material={materials.material_115} />
        <mesh geometry={nodes.test_117.geometry} material={materials.material_116} />
        <mesh geometry={nodes.test_118.geometry} material={materials.material_117} />
        <mesh geometry={nodes.test_119.geometry} material={materials.material_118} />
        <mesh geometry={nodes.test_120.geometry} material={materials.material_119} />
        <mesh geometry={nodes.test_121.geometry} material={materials.material_120} />
        <mesh geometry={nodes.test_122.geometry} material={materials.material_121} />
        <mesh geometry={nodes.test_123.geometry} material={materials.material_122} />
        <mesh geometry={nodes.test_124.geometry} material={materials.material_30} />
        <mesh geometry={nodes.test_125.geometry} material={materials.material_124} />
        <mesh geometry={nodes.test_126.geometry} material={materials.material_125} />
        <mesh geometry={nodes.test_127.geometry} material={materials.material_126} />
        <mesh geometry={nodes.test_128.geometry} material={materials.material_127} />
        <mesh geometry={nodes.test_129.geometry} material={materials.material_128} />
        <mesh geometry={nodes.test_130.geometry} material={materials.material_30} />
        <mesh geometry={nodes.test_131.geometry} material={materials.material_130} />
        <mesh geometry={nodes.test_132.geometry} material={materials.material_131} />
        <mesh geometry={nodes.test_133.geometry} material={materials.material_132} />
        <mesh geometry={nodes.test_134.geometry} material={materials.material_133} />
        <mesh geometry={nodes.test_135.geometry} material={materials.material_134} />
        <mesh geometry={nodes.test_136.geometry} material={materials.material_135} />
        <mesh geometry={nodes.test_137.geometry} material={materials.material_136} />
        <mesh geometry={nodes.test_138.geometry} material={materials.material_137} />
        <mesh geometry={nodes.test_139.geometry} material={materials.material_138} />
        <mesh geometry={nodes.test_140.geometry} material={materials.material_139} />
        <mesh geometry={nodes.test_141.geometry} material={materials.material_140} />
        <mesh geometry={nodes.test_142.geometry} material={materials.material_141} />
        <mesh geometry={nodes.test_143.geometry} material={materials.material_142} />
        <mesh geometry={nodes.test_144.geometry} material={materials.material_141} />
        <mesh geometry={nodes.test_145.geometry} material={materials.material_141} />
        <mesh geometry={nodes.test_146.geometry} material={materials.material_145} />
        <mesh geometry={nodes.test_147.geometry} material={materials.material_146} />
        <mesh geometry={nodes.test_148.geometry} material={materials.material_30} />
        <mesh geometry={nodes.test_149.geometry} material={materials.material_30} />
        <mesh geometry={nodes.test_150.geometry} material={materials.material_149} />
        <mesh geometry={nodes.test_151.geometry} material={materials.material_150} />
        <mesh geometry={nodes.test_152.geometry} material={materials.material_151} />
        <mesh geometry={nodes.test_153.geometry} material={materials.material_152} />
        <mesh geometry={nodes.test_154.geometry} material={materials.material_141} />
        <mesh geometry={nodes.test_155.geometry} material={materials.material_141} />
        <mesh geometry={nodes.test_156.geometry} material={materials.material_141} />
        <mesh geometry={nodes.test_157.geometry} material={materials.material_156} />
        <mesh geometry={nodes.test_158.geometry} material={materials.material_157} />
        <mesh geometry={nodes.test_159.geometry} material={materials.material_158} />
        <mesh geometry={nodes.test_160.geometry} material={materials.material_30} />
        <mesh geometry={nodes.test_161.geometry} material={materials.material_160} />
        <mesh geometry={nodes.test_162.geometry} material={materials.material_161} />
        <mesh geometry={nodes.test_163.geometry} material={materials.material_162} />
        <mesh geometry={nodes.test_164.geometry} material={materials.material_92} />
        <mesh geometry={nodes.test_165.geometry} material={materials.material_164} />
        <mesh geometry={nodes.test_166.geometry} material={materials.material_92} />
        <mesh geometry={nodes.test_167.geometry} material={materials.material_92} />
        <mesh geometry={nodes.test_168.geometry} material={materials.material_94} />
        <mesh geometry={nodes.test_169.geometry} material={materials.material_92} />
        <mesh geometry={nodes.test_170.geometry} material={materials.material_92} />
        <mesh geometry={nodes.test_171.geometry} material={materials.material_170} />
        <mesh geometry={nodes.test_172.geometry} material={materials.material_171} />
        <mesh geometry={nodes.test_173.geometry} material={materials.material_172} />
        <mesh geometry={nodes.test_174.geometry} material={materials.material_171} />
        <mesh geometry={nodes.test_175.geometry} material={materials.material_174} />
        <mesh geometry={nodes.test_176.geometry} material={materials.material_171} />
        <mesh geometry={nodes.test_177.geometry} material={materials.material_176} />
        <mesh geometry={nodes.test_178.geometry} material={materials.material_177} />
        <mesh geometry={nodes.test_179.geometry} material={materials.material_178} />
        <mesh geometry={nodes.test_180.geometry} material={materials.material_179} />
        <mesh geometry={nodes.test_181.geometry} material={materials.material_58} />
        <mesh geometry={nodes.test_182.geometry} material={materials.material_58} />
        <mesh geometry={nodes.test_183.geometry} material={materials.material_58} />
        <mesh geometry={nodes.test_184.geometry} material={materials.material_58} />
        <mesh geometry={nodes.test_185.geometry} material={materials.material_58} />
        <mesh geometry={nodes.test_186.geometry} material={materials.material_58} />
        <mesh geometry={nodes.test_187.geometry} material={materials.material_186} />
        <mesh geometry={nodes.test_188.geometry} material={materials.material_58} />
        <mesh geometry={nodes.test_189.geometry} material={materials.material_58} />
        <mesh geometry={nodes.test_190.geometry} material={materials.material_58} />
        <mesh geometry={nodes.test_191.geometry} material={materials.material_58} />
        <mesh geometry={nodes.test_192.geometry} material={materials.material_58} />
        <mesh geometry={nodes.test_193.geometry} material={materials.material_58} />
        <mesh geometry={nodes.test_194.geometry} material={materials.material_193} />
        <mesh geometry={nodes.test_195.geometry} material={materials.material_194} />
        <mesh geometry={nodes.test_196.geometry} material={materials.material_195} />
        <mesh geometry={nodes.test_197.geometry} material={materials.material_196} />
        <mesh geometry={nodes.test_198.geometry} material={materials.material_197} />
        <mesh geometry={nodes.test_199.geometry} material={materials.material_198} />
        <mesh geometry={nodes.test_200.geometry} material={materials.material_199} />
        <mesh geometry={nodes.test_201.geometry} material={materials.material_200} />
        <mesh geometry={nodes.test_202.geometry} material={materials.material_194} />
        <mesh geometry={nodes.test_203.geometry} material={materials.material_202} />
        <mesh geometry={nodes.test_204.geometry} material={materials.material_203} />
        <mesh geometry={nodes.test_205.geometry} material={materials.material_204} />
        <mesh geometry={nodes.test_206.geometry} material={materials.material_205} />
        <mesh geometry={nodes.test_207.geometry} material={materials.material_202} />
        <mesh geometry={nodes.test_208.geometry} material={materials.material_207} />
        <mesh geometry={nodes.test_209.geometry} material={materials.material_208} />
        <mesh geometry={nodes.test_210.geometry} material={materials.material_209} />
        <mesh geometry={nodes.test_211.geometry} material={materials.material_210} />
        <mesh geometry={nodes.test_212.geometry} material={materials.material_211} />
        <mesh geometry={nodes.test_213.geometry} material={materials.material_212} />
        <mesh geometry={nodes.test_214.geometry} material={materials.material_213} />
        <mesh geometry={nodes.test_215.geometry} material={materials.material_214} />
        <mesh geometry={nodes.test_216.geometry} material={materials.material_215} />
        <mesh geometry={nodes.test_217.geometry} material={materials.material_216} />
        <mesh geometry={nodes.test_218.geometry} material={materials.material_217} />
        <mesh geometry={nodes.test_219.geometry} material={materials.material_218} />
        <mesh geometry={nodes.test_220.geometry} material={materials.material_219} />
        <mesh geometry={nodes.test_221.geometry} material={materials.material_221} />
        <mesh geometry={nodes.test_222.geometry} material={materials.material_222} />
        <mesh geometry={nodes.test_223.geometry} material={materials.material_223} />
        <mesh geometry={nodes.test_224.geometry} material={materials.material_224} />
        <mesh geometry={nodes.test_225.geometry} material={materials.material_225} />
        <mesh geometry={nodes.test_226.geometry} material={materials.material_226} />
        <mesh geometry={nodes.test_227.geometry} material={materials.material_227} />
        <mesh geometry={nodes.test_228.geometry} material={materials.material_228} />
        <mesh geometry={nodes.test_229.geometry} material={materials.material_229} />
        <mesh geometry={nodes.test_230.geometry} material={materials.material_230} />
        <mesh geometry={nodes.test_231.geometry} material={materials.material_231} />
        <mesh geometry={nodes.test_232.geometry} material={materials.material_232} />
        <mesh geometry={nodes.test_233.geometry} material={materials.material_233} />
        <mesh geometry={nodes.test_234.geometry} material={materials.material_234} />
        <mesh geometry={nodes.test_235.geometry} material={materials.material_235} />
        <mesh geometry={nodes.test_236.geometry} material={materials.material_236} />
        <mesh geometry={nodes.test_237.geometry} material={materials.material_237} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/test-transformed.glb')
