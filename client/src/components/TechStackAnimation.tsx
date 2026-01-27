import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function TechStackAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const nodesRef = useRef<THREE.Group | null>(null);
  const linesRef = useRef<THREE.LineSegments | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x030014);
    scene.fog = new THREE.Fog(0x030014, 150, 300);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 60;
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

    // Create tech stack nodes
    const techStack = [
      "React",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Tailwind",
      "Three.js",
      "WebSocket",
      "TensorFlow",
      "JavaScript",
      "Express",
      "Git",
      "API",
    ];

    const nodesGroup = new THREE.Group();
    scene.add(nodesGroup);
    nodesRef.current = nodesGroup;

    const nodeObjects: any[] = [];
    const nodePositions: THREE.Vector3[] = [];

    // Create spheres for each tech
    techStack.forEach((tech, index) => {
      const angle = (index / techStack.length) * Math.PI * 2;
      const radius = 30;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius + (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 40;

      const geometry = new THREE.SphereGeometry(1.5, 32, 32);
      const material = new THREE.MeshPhongMaterial({
        color: index % 2 === 0 ? 0x00d9ff : 0xa78bfa,
        emissive: index % 2 === 0 ? 0x00d9ff : 0xa78bfa,
        emissiveIntensity: 0.4,
        wireframe: false,
      });

      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(x, y, z);
      sphere.castShadow = true;
      sphere.receiveShadow = true;

      nodesGroup.add(sphere);
      nodeObjects.push({
        mesh: sphere,
        originalPosition: new THREE.Vector3(x, y, z),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.3,
          (Math.random() - 0.5) * 0.3,
          (Math.random() - 0.5) * 0.3
        ),
        label: tech,
      });

      nodePositions.push(new THREE.Vector3(x, y, z));
    });

    // Create connecting lines between nodes
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions: number[] = [];

    // Connect nearby nodes
    for (let i = 0; i < nodeObjects.length; i++) {
      for (let j = i + 1; j < nodeObjects.length; j++) {
        const distance = nodeObjects[i].originalPosition.distanceTo(
          nodeObjects[j].originalPosition
        );
        if (distance < 35) {
          linePositions.push(
            nodeObjects[i].originalPosition.x,
            nodeObjects[i].originalPosition.y,
            nodeObjects[i].originalPosition.z,
            nodeObjects[j].originalPosition.x,
            nodeObjects[j].originalPosition.y,
            nodeObjects[j].originalPosition.z
          );
        }
      }
    }

    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(linePositions), 3)
    );

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00d9ff,
      transparent: true,
      opacity: 0.2,
      linewidth: 1,
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);
    linesRef.current = lines;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00d9ff, 1.5, 200);
    pointLight1.position.set(50, 50, 50);
    pointLight1.castShadow = true;
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xa78bfa, 1.2, 200);
    pointLight2.position.set(-50, -50, 50);
    pointLight2.castShadow = true;
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x00d9ff, 0.8, 150);
    pointLight3.position.set(0, 0, -50);
    scene.add(pointLight3);

    // Animation loop
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.01;

      // Update node positions with orbital motion
      nodeObjects.forEach((node, index) => {
        const angle = (index / nodeObjects.length) * Math.PI * 2 + time * 0.3;
        const radius = 30;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius + Math.sin(time * 0.5) * 5;
        const z = Math.cos(time * 0.3 + index) * 15;

        node.mesh.position.set(x, y, z);

        // Rotate nodes
        node.mesh.rotation.x += 0.005;
        node.mesh.rotation.y += 0.008;

        // Pulse effect
        const scale = 1 + Math.sin(time * 2 + index) * 0.1;
        node.mesh.scale.set(scale, scale, scale);
      });

      // Update line positions
      const newLinePositions: number[] = [];
      for (let i = 0; i < nodeObjects.length; i++) {
        for (let j = i + 1; j < nodeObjects.length; j++) {
          const distance = nodeObjects[i].mesh.position.distanceTo(
            nodeObjects[j].mesh.position
          );
          if (distance < 40) {
            newLinePositions.push(
              nodeObjects[i].mesh.position.x,
              nodeObjects[i].mesh.position.y,
              nodeObjects[i].mesh.position.z,
              nodeObjects[j].mesh.position.x,
              nodeObjects[j].mesh.position.y,
              nodeObjects[j].mesh.position.z
            );
          }
        }
      }

      if (linesRef.current) {
        const positionAttribute = linesRef.current.geometry.getAttribute(
          "position"
        ) as THREE.BufferAttribute;
        const positions = positionAttribute.array as Float32Array;

        for (let i = 0; i < Math.min(newLinePositions.length, positions.length); i++) {
          positions[i] = newLinePositions[i] || positions[i];
        }

        positionAttribute.needsUpdate = true;
      }

      // Rotate entire group
      nodesGroup.rotation.x += 0.0002;
      nodesGroup.rotation.y += 0.0003;

      // Camera movement
      camera.position.x = Math.sin(time * 0.3) * 20;
      camera.position.y = Math.cos(time * 0.25) * 15;
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
