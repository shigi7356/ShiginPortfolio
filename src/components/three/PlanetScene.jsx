import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls, Sphere, Ring } from '@react-three/drei';
import * as THREE from 'three';

// ─── Planet mesh ────────────────────────────────────────────
function Planet() {
  const meshRef = useRef();
  const ringRef = useRef();
  const atmosphereRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.08;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.03;
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y = t * 0.04;
    }
  });

  return (
    <group>
      {/* Atmosphere glow */}
      <Sphere ref={atmosphereRef} args={[2.18, 64, 64]}>
        <meshStandardMaterial
          color="#0ea5e9"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
          roughness={1}
        />
      </Sphere>

      {/* Main planet */}
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#0d2045"
          roughness={0.7}
          metalness={0.3}
          emissive="#0c1a40"
          emissiveIntensity={0.4}
        />
      </Sphere>

      {/* Surface detail layer */}
      <Sphere args={[2.01, 32, 32]}>
        <meshStandardMaterial
          color="#1e3a5f"
          transparent
          opacity={0.4}
          roughness={0.9}
          wireframe={false}
        />
      </Sphere>

      {/* Ring system */}
      <group ref={ringRef} rotation={[Math.PI / 4, 0.2, 0]}>
        <Ring args={[2.8, 3.6, 128]}>
          <meshStandardMaterial
            color="#22d3ee"
            transparent
            opacity={0.25}
            side={THREE.DoubleSide}
            emissive="#22d3ee"
            emissiveIntensity={0.3}
          />
        </Ring>
        <Ring args={[3.7, 4.1, 128]}>
          <meshStandardMaterial
            color="#818cf8"
            transparent
            opacity={0.12}
            side={THREE.DoubleSide}
            emissive="#818cf8"
            emissiveIntensity={0.2}
          />
        </Ring>
      </group>

      {/* Continent-like patches */}
      {[
        { pos: [0.6, 1.6, 1.0], color: '#0e4d8a', scale: 0.38 },
        { pos: [-1.2, 0.8, 1.4], color: '#0d3d6e', scale: 0.28 },
        { pos: [1.4, -0.6, 1.2], color: '#0f5a9e', scale: 0.32 },
        { pos: [-0.4, -1.5, 1.3], color: '#0c4780', scale: 0.25 },
      ].map((patch, i) => (
        <Sphere
          key={i}
          args={[patch.scale, 16, 16]}
          position={patch.pos}
        >
          <meshStandardMaterial
            color={patch.color}
            roughness={0.8}
            transparent
            opacity={0.7}
          />
        </Sphere>
      ))}
    </group>
  );
}

// ─── Orbit particles ────────────────────────────────────────
function OrbitParticles() {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  const particles = Array.from({ length: 120 }, (_, i) => {
    const angle = (i / 120) * Math.PI * 2;
    const radius = 5 + Math.random() * 3;
    const y = (Math.random() - 0.5) * 2;
    return {
      position: [
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius,
      ],
      size: 0.02 + Math.random() * 0.04,
    };
  });

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <Sphere key={i} args={[p.size, 4, 4]} position={p.position}>
          <meshBasicMaterial color={i % 3 === 0 ? '#22d3ee' : i % 3 === 1 ? '#818cf8' : '#3b82f6'} />
        </Sphere>
      ))}
    </group>
  );
}

// ─── Main 3D Scene ──────────────────────────────────────────
export default function PlanetScene() {
  return (
    <Canvas
      camera={{ position: [0, 1, 8], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.15} color="#0a1628" />
      <pointLight position={[10, 10, 10]} intensity={1.8} color="#22d3ee" />
      <pointLight position={[-8, -5, -10]} intensity={0.8} color="#818cf8" />
      <pointLight position={[0, 8, -5]} intensity={0.5} color="#3b82f6" />
      <directionalLight position={[5, 3, 5]} intensity={1.2} color="#ffffff" />

      {/* Stars background */}
      <Stars
        radius={100}
        depth={60}
        count={5000}
        factor={4}
        saturation={0.3}
        fade
        speed={0.5}
      />

      {/* Planet + rings */}
      <Planet />

      {/* Orbit particles */}
      <OrbitParticles />

      {/* Orbit controls — limited to pointer drag only */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(2 * Math.PI) / 3}
      />
    </Canvas>
  );
}
