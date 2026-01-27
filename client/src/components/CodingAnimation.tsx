import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CodingAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const codeElementsRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x030014);
    scene.fog = new THREE.Fog(0x030014, 100, 200);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 50;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create particles (code characters)
    const particleCount = 1000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 100; // x
      positions[i + 1] = (Math.random() - 0.5) * 100; // y
      positions[i + 2] = (Math.random() - 0.5) * 100; // z

      velocities[i] = (Math.random() - 0.5) * 0.5; // vx
      velocities[i + 1] = (Math.random() - 0.5) * 0.5; // vy
      velocities[i + 2] = (Math.random() - 0.5) * 0.5; // vz
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("velocity", new THREE.BufferAttribute(velocities, 3));

    const material = new THREE.PointsMaterial({
      color: 0x00d9ff,
      size: 0.3,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;

    // Create code element group
    const codeGroup = new THREE.Group();
    scene.add(codeGroup);
    codeElementsRef.current = codeGroup;

    // Code snippets to display
    const codeSnippets = [
      "const",
      "function",
      "async",
      "await",
      "return",
      "import",
      "export",
      "class",
      "interface",
      "type",
      "{",
      "}",
      "=>",
      "...",
    ];

    // Create 3D text elements (simplified as boxes with code representation)
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "#030014";
      ctx.fillRect(0, 0, 256, 256);
      ctx.fillStyle = "#00d9ff";
      ctx.font = "bold 20px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("< CODE />", 128, 128);
    }

    const texture = new THREE.CanvasTexture(canvas);
    const codeGeometry = new THREE.BoxGeometry(2, 2, 2);
    const codeMaterial = new THREE.MeshPhongMaterial({
      map: texture,
      emissive: 0x00d9ff,
      emissiveIntensity: 0.3,
    });

    for (let i = 0; i < 5; i++) {
      const codeMesh = new THREE.Mesh(codeGeometry, codeMaterial.clone());
      codeMesh.position.set(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80
      );
      codeMesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      (codeMesh as any).rotationSpeed = {
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.01,
      };
      codeGroup.add(codeMesh);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00d9ff, 1, 200);
    pointLight.position.set(50, 50, 50);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xa78bfa, 0.8, 200);
    pointLight2.position.set(-50, -50, 50);
    scene.add(pointLight2);

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Update particles
      if (particlesRef.current) {
        const positionAttribute = particlesRef.current.geometry.getAttribute(
          "position"
        ) as THREE.BufferAttribute;
        const velocityAttribute = particlesRef.current.geometry.getAttribute(
          "velocity"
        ) as THREE.BufferAttribute;

        const positions = positionAttribute.array as Float32Array;
        const velocities = velocityAttribute.array as Float32Array;

        for (let i = 0; i < positions.length; i += 3) {
          positions[i] += velocities[i];
          positions[i + 1] += velocities[i + 1];
          positions[i + 2] += velocities[i + 2];

          // Bounce particles
          if (Math.abs(positions[i]) > 50) velocities[i] *= -1;
          if (Math.abs(positions[i + 1]) > 50) velocities[i + 1] *= -1;
          if (Math.abs(positions[i + 2]) > 50) velocities[i + 2] *= -1;
        }

        positionAttribute.needsUpdate = true;
        particlesRef.current.rotation.x += 0.0001;
        particlesRef.current.rotation.y += 0.0002;
      }

      // Update code elements
      if (codeElementsRef.current) {
        codeElementsRef.current.children.forEach((child) => {
          const mesh = child as any;
          if (mesh.rotationSpeed) {
            mesh.rotation.x += mesh.rotationSpeed.x;
            mesh.rotation.y += mesh.rotationSpeed.y;
            mesh.rotation.z += mesh.rotationSpeed.z;
          }
        });
      }

      // Gentle camera movement
      camera.position.x = Math.sin(Date.now() * 0.0001) * 10;
      camera.position.y = Math.cos(Date.now() * 0.00008) * 10;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      containerRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
