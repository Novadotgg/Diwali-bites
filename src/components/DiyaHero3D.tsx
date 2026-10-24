import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

interface DiyaHero3DProps {
  className?: string
}

export function DiyaHero3D({ className = 'w-full h-full' }: DiyaHero3DProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [hasWebGL, setHasWebGL] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mql.matches)
    const handleMql = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mql.addEventListener('change', handleMql)
    return () => mql.removeEventListener('change', handleMql)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return

    const container = containerRef.current
    let renderer: THREE.WebGLRenderer | null = null

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      })
    } catch {
      setHasWebGL(false)
      return
    }

    const width = container.clientWidth || 360
    const height = container.clientHeight || 360

    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.3
    container.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100)
    // Refined camera so the larger diya sits proudly and centered in frame
    camera.position.set(0, 0.85, 3.65)
    camera.lookAt(0, 0.12, 0)

    // Warm ambient and directional rim lights
    const ambientLight = new THREE.AmbientLight(0x5a1836, 1.4)
    scene.add(ambientLight)

    const topGoldLight = new THREE.DirectionalLight(0xffe79a, 1.8)
    topGoldLight.position.set(2, 4, 2.5)
    scene.add(topGoldLight)

    const softFillLight = new THREE.DirectionalLight(0xff9800, 0.9)
    softFillLight.position.set(-2, 1, 2)
    scene.add(softFillLight)

    // Point Light from Diya Flame (casts warm golden ambient glow)
    const flamePointLight = new THREE.PointLight(0xffa726, 2.3, 5.5)
    flamePointLight.position.set(0, 0.35, 0)
    scene.add(flamePointLight)

    // Diya Main Group (scaled up slightly to be more prominent and radiant)
    const diyaGroup = new THREE.Group()
    diyaGroup.scale.set(0.86, 0.86, 0.86)
    diyaGroup.position.set(0, -0.22, 0)
    diyaGroup.rotation.x = 0.34
    scene.add(diyaGroup)

    // 1. Sleek Brass & Terracotta Diya Bowl (Curved Lathe Profile)
    const bowlPoints: THREE.Vector2[] = []
    bowlPoints.push(new THREE.Vector2(0, -0.22))
    bowlPoints.push(new THREE.Vector2(0.35, -0.22))
    bowlPoints.push(new THREE.Vector2(0.62, -0.12))
    bowlPoints.push(new THREE.Vector2(0.84, 0.05))
    bowlPoints.push(new THREE.Vector2(0.92, 0.2))
    bowlPoints.push(new THREE.Vector2(0.8, 0.2))
    bowlPoints.push(new THREE.Vector2(0.65, 0.1))
    bowlPoints.push(new THREE.Vector2(0.35, 0.0))
    bowlPoints.push(new THREE.Vector2(0, 0.0))

    const latheGeometry = new THREE.LatheGeometry(bowlPoints, 48)
    const brassMaterial = new THREE.MeshStandardMaterial({
      color: 0xc9822a,
      roughness: 0.32,
      metalness: 0.8,
    })
    const bowlMesh = new THREE.Mesh(latheGeometry, brassMaterial)
    diyaGroup.add(bowlMesh)

    // 2. Ornate Golden Lip Rim
    const rimGeo = new THREE.TorusGeometry(0.86, 0.038, 16, 48)
    const goldRimMaterial = new THREE.MeshStandardMaterial({
      color: 0xf5c842,
      roughness: 0.2,
      metalness: 0.95,
    })
    const rimMesh = new THREE.Mesh(rimGeo, goldRimMaterial)
    rimMesh.rotation.x = Math.PI / 2
    rimMesh.position.y = 0.2
    diyaGroup.add(rimMesh)

    // 3. Clear Ghee / Oil Pool
    const oilGeo = new THREE.CylinderGeometry(0.65, 0.6, 0.05, 32)
    const oilMat = new THREE.MeshStandardMaterial({
      color: 0x7a4300,
      roughness: 0.08,
      metalness: 0.4,
    })
    const oilMesh = new THREE.Mesh(oilGeo, oilMat)
    oilMesh.position.y = 0.12
    diyaGroup.add(oilMesh)

    // 4. Cotton Diya Wick
    const wickGeo = new THREE.CylinderGeometry(0.02, 0.025, 0.18, 12)
    const wickMat = new THREE.MeshStandardMaterial({
      color: 0x241202,
      roughness: 0.9,
    })
    const wickMesh = new THREE.Mesh(wickGeo, wickMat)
    wickMesh.position.set(0, 0.18, 0)
    wickMesh.rotation.z = -0.1
    diyaGroup.add(wickMesh)

    // 5. NATURAL TEARDROP FLAME (Created with smooth curve profile, NOT a cartoon cone!)
    const flameCurvePoints: THREE.Vector2[] = [
      new THREE.Vector2(0, 0.0),
      new THREE.Vector2(0.04, 0.04),
      new THREE.Vector2(0.11, 0.14),
      new THREE.Vector2(0.14, 0.25),
      new THREE.Vector2(0.12, 0.38),
      new THREE.Vector2(0.07, 0.52),
      new THREE.Vector2(0.025, 0.65),
      new THREE.Vector2(0, 0.72),
    ]

    const outerFlameGeo = new THREE.LatheGeometry(flameCurvePoints, 32)
    const outerFlameMat = new THREE.MeshBasicMaterial({
      color: 0xff8f00,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
    })
    const outerFlame = new THREE.Mesh(outerFlameGeo, outerFlameMat)
    outerFlame.position.set(0, 0.2, 0)
    diyaGroup.add(outerFlame)

    // Middle Gold Flame
    const midFlameCurvePoints = flameCurvePoints.map(
      (p) => new THREE.Vector2(p.x * 0.78, p.y * 0.88)
    )
    const midFlameGeo = new THREE.LatheGeometry(midFlameCurvePoints, 32)
    const midFlameMat = new THREE.MeshBasicMaterial({
      color: 0xffd54f,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const midFlame = new THREE.Mesh(midFlameGeo, midFlameMat)
    midFlame.position.set(0, 0.2, 0)
    diyaGroup.add(midFlame)

    // Inner Hot White Flame Core
    const innerFlameCurvePoints = flameCurvePoints.map(
      (p) => new THREE.Vector2(p.x * 0.45, p.y * 0.6)
    )
    const innerFlameGeo = new THREE.LatheGeometry(innerFlameCurvePoints, 24)
    const innerFlameMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.98,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const innerFlame = new THREE.Mesh(innerFlameGeo, innerFlameMat)
    innerFlame.position.set(0, 0.2, 0)
    diyaGroup.add(innerFlame)

    // Flame Corona Soft Light Halo
    const haloCanvas = document.createElement('canvas')
    haloCanvas.width = 128
    haloCanvas.height = 128
    const haloCtx = haloCanvas.getContext('2d')
    if (haloCtx) {
      const grad = haloCtx.createRadialGradient(64, 64, 0, 64, 64, 64)
      grad.addColorStop(0, 'rgba(255, 235, 120, 0.9)')
      grad.addColorStop(0.3, 'rgba(255, 160, 0, 0.5)')
      grad.addColorStop(0.7, 'rgba(230, 81, 0, 0.15)')
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)')
      haloCtx.fillStyle = grad
      haloCtx.fillRect(0, 0, 128, 128)
    }
    const haloTexture = new THREE.CanvasTexture(haloCanvas)
    const haloMaterial = new THREE.SpriteMaterial({
      map: haloTexture,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
    })
    const flameHalo = new THREE.Sprite(haloMaterial)
    flameHalo.scale.set(1.4, 1.4, 1.4)
    flameHalo.position.set(0, 0.5, 0)
    diyaGroup.add(flameHalo)

    // 6. Upward Drifting Golden Sparks (Subtle and graceful)
    const particleCount = 45
    const particlePositions = new Float32Array(particleCount * 3)
    const particleSpeeds = new Float32Array(particleCount)
    const particleSwits = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3 + 0] = (Math.random() - 0.5) * 0.6
      particlePositions[i * 3 + 1] = 0.3 + Math.random() * 1.8
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 0.5
      particleSpeeds[i] = 0.005 + Math.random() * 0.008
      particleSwits[i] = Math.random() * Math.PI * 2
    }

    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))

    const sparkParticleMat = new THREE.PointsMaterial({
      size: 0.07,
      color: 0xffd54f,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const particleSystem = new THREE.Points(particleGeometry, sparkParticleMat)
    diyaGroup.add(particleSystem)

    // Parallax tracking
    let targetRotationX = 0.34
    let targetRotationY = 0
    let currentRotationX = 0.34
    let currentRotationY = 0

    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1
      const normY = -(e.clientY / window.innerHeight) * 2 + 1
      targetRotationY = normX * 0.25
      targetRotationX = 0.34 - normY * 0.15
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    // Animation Loop
    let animationFrameId: number
    let isVisible = true

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting && !document.hidden
    })
    observer.observe(container)

    const handleVisibility = () => {
      isVisible = !document.hidden
    }
    document.addEventListener('visibilitychange', handleVisibility)

    const clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      if (!isVisible) return

      const time = clock.getElapsedTime()

      // Smooth parallax
      currentRotationX += (targetRotationX - currentRotationX) * 0.05
      currentRotationY += (targetRotationY - currentRotationY) * 0.05
      diyaGroup.rotation.x = currentRotationX
      diyaGroup.rotation.y = currentRotationY

      // NATURAL, ORGANIC FLAME MOVEMENT (Slow, gentle natural sway — NO cartoon spin!)
      // Low frequencies (2.2Hz and 1.8Hz), tiny tilt amplitude
      const naturalSwayZ = Math.sin(time * 2.2) * 0.025 + Math.sin(time * 1.4) * 0.015
      const naturalSwayX = Math.cos(time * 1.8) * 0.018

      // Gentle vertical breath/flicker
      const verticalPulse = 1 + Math.sin(time * 3.2) * 0.035 + Math.cos(time * 5.0) * 0.015
      const horizontalTaper = 1 - (verticalPulse - 1) * 0.4

      // Apply to layered flame meshes
      outerFlame.scale.set(horizontalTaper, verticalPulse, horizontalTaper)
      outerFlame.rotation.z = naturalSwayZ
      outerFlame.rotation.x = naturalSwayX

      midFlame.scale.set(horizontalTaper * 0.98, verticalPulse * 1.01, horizontalTaper * 0.98)
      midFlame.rotation.z = naturalSwayZ * 0.9
      midFlame.rotation.x = naturalSwayX * 0.9

      innerFlame.scale.set(horizontalTaper, verticalPulse * 0.96, horizontalTaper)
      innerFlame.rotation.z = naturalSwayZ * 0.7

      // Flame halo breathing
      flameHalo.scale.set(
        1.35 + Math.sin(time * 2.5) * 0.08,
        1.35 + Math.sin(time * 2.5) * 0.08,
        1
      )

      // Point light warmth flicker
      flamePointLight.intensity = 2.1 + Math.sin(time * 3.8) * 0.25

      // Particle update: graceful slow rise
      const positions = particleGeometry.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += particleSpeeds[i]
        positions[i * 3 + 0] += Math.sin(time * 1.5 + particleSwits[i]) * 0.001

        if (positions[i * 3 + 1] > 2.2) {
          positions[i * 3 + 1] = 0.3
          positions[i * 3 + 0] = (Math.random() - 0.5) * 0.35
          positions[i * 3 + 2] = (Math.random() - 0.5) * 0.35
        }
      }
      particleGeometry.attributes.position.needsUpdate = true

      renderer?.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      if (!containerRef.current || !renderer) return
      const newW = containerRef.current.clientWidth
      const newH = containerRef.current.clientHeight
      if (newW === 0 || newH === 0) return
      camera.aspect = newW / newH
      camera.updateProjectionMatrix()
      renderer.setSize(newW, newH)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('visibilitychange', handleVisibility)
      observer.disconnect()
      cancelAnimationFrame(animationFrameId)

      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      scene.clear()
      renderer?.dispose()
    }
  }, [prefersReducedMotion])

  if (prefersReducedMotion || !hasWebGL) return null

  return (
    <div
      ref={containerRef}
      className={`${className} pointer-events-none select-none`}
      aria-hidden="true"
    />
  )
}
