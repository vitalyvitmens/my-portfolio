import { useEffect, useRef } from 'react'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BufferGeometry,
  BufferAttribute,
  ShaderMaterial,
  TextureLoader,
  AdditiveBlending,
  Points,
} from 'three'
import vertexShader from './vertexShader.glsl.js'
import fragmentShader from './fragmentShader.glsl.js'
import './Environment.css'

const Environment: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Создаем сцену
    const scene = new Scene()

    // Создаем камеру
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    // Создаем рендерер
    const renderer = new WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Создаем геометрию частиц
    const particlesGeometry = new BufferGeometry()
    const particlesCount = 5000
    const posArray = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10
    }
    particlesGeometry.setAttribute('position', new BufferAttribute(posArray, 3))

    // Создаем материал частиц
    const particlesMaterial = new ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        pointTexture: {
          value: new TextureLoader().load(
            'https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png'
          ),
        },
      },
      blending: AdditiveBlending,
      depthTest: false,
      transparent: true,
      vertexColors: true,
    })

    // Создаем точечное облако
    const particleMesh = new Points(particlesGeometry, particlesMaterial)
    scene.add(particleMesh)

    // Функция анимации
    const animate = () => {
      requestAnimationFrame(animate)
      particleMesh.rotation.y += 0.001
      renderer.render(scene, camera)
    }

    // Запускаем анимацию
    animate()

    // Реагируем на изменение размера окна
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    })

    return () => {
      // Проверяем, что containerRef.current не null перед очисткой
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      scene.clear()
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} id="magic" />
}

export default Environment
