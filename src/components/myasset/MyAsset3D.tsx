'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const MyAsset3D = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return // canvasRef가 유효하지 않으면 종료

    const scene = new THREE.Scene() // 새로운 Scene 생성
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    ) // PerspectiveCamera 생성
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current }) // WebGLRenderer 생성 및 canvas에 할당
    renderer.setSize(window.innerWidth, window.innerHeight) // 렌더러 크기 설정

    const geometry = new THREE.BoxGeometry(1, 1, 1) // BoxGeometry 생성
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }) // MeshBasicMaterial 생성
    const cube = new THREE.Mesh(geometry, material) // Mesh 생성
    scene.add(cube) // Scene에 Mesh 추가

    camera.position.z = 5 // 카메라 위치 설정

    const animate = () => {
      requestAnimationFrame(animate) // 애니메이션 프레임 요청

      cube.rotation.x += 0.01 // 정육면체 회전
      cube.rotation.y += 0.01

      renderer.render(scene, camera) // 장면 렌더링
    }

    animate() // 애니메이션 시작
  }, [])

  return <canvas ref={canvasRef} />
}

export default MyAsset3D
