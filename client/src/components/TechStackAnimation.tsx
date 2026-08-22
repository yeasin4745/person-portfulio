import { useEffect, useRef } from "react";
import * as THREE from "three";

const FRAME_INTERVAL = 1000 / 30;

export default function TechStackAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x030014, 150, 300);

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x030014, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

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

    const nodeObjects: Array<{
      mesh: THREE.Mesh;
      originalPosition: THREE.Vector3;
    }> = [];

    techStack.forEach((tech, index) => {
      const angle = (index / techStack.length) * Math.PI * 2;
      const radius = 30;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius + (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 40;

      const geometry = new THREE.SphereGeometry(1.5, 20, 20);
      const material = new THREE.MeshPhongMaterial({
        color: index % 2 === 0 ? 0x00d9ff : 0xa78bfa,
        emissive: index % 2 === 0 ? 0x00d9ff : 0xa78bfa,
        emissiveIntensity: 0.4,
      });

      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(x, y, z);
      nodesGroup.add(sphere);
      nodeObjects.push({
        mesh: sphere,
        originalPosition: new THREE.Vector3(x, y, z),
      });
    });

    const lineGeometry = new THREE.BufferGeometry();
    const linePositions: number[] = [];
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
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const pointLight1 = new THREE.PointLight(0x00d9ff, 1.5, 200);
    pointLight1.position.set(50, 50, 50);
    scene.add(pointLight1);
    const pointLight2 = new THREE.PointLight(0xa78bfa, 1.2, 200);
    pointLight2.position.set(-50, -50, 50);
    scene.add(pointLight2);
    const pointLight3 = new THREE.PointLight(0x00d9ff, 0.8, 150);
    pointLight3.position.set(0, 0, -50);
    scene.add(pointLight3);

    let animationFrameId: number | null = null;
    let time = 0;
    let lastFrameTime = 0;
    let isDocumentVisible = document.visibilityState === "visible";
    let prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const renderStaticFrame = () => {
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };

    const animate = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(animate);
      if (timestamp - lastFrameTime < FRAME_INTERVAL) return;
      lastFrameTime = timestamp;
      time += 0.01;

      nodeObjects.forEach((node, index) => {
        const angle = (index / nodeObjects.length) * Math.PI * 2 + time * 0.3;
        const radius = 30;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius + Math.sin(time * 0.5) * 5;
        const z = Math.cos(time * 0.3 + index) * 15;

        node.mesh.position.set(x, y, z);
        node.mesh.rotation.x += 0.005;
        node.mesh.rotation.y += 0.008;
        const scale = 1 + Math.sin(time * 2 + index) * 0.1;
        node.mesh.scale.setScalar(scale);
      });

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

      const positionAttribute = lines.geometry.getAttribute(
        "position"
      ) as THREE.BufferAttribute;
      const positions = positionAttribute.array as Float32Array;
      for (
        let i = 0;
        i < Math.min(newLinePositions.length, positions.length);
        i++
      ) {
        positions[i] = newLinePositions[i];
      }
      positionAttribute.needsUpdate = true;

      nodesGroup.rotation.x += 0.0002;
      nodesGroup.rotation.y += 0.0003;
      camera.position.x = Math.sin(time * 0.3) * 20;
      camera.position.y = Math.cos(time * 0.25) * 15;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };

    const startAnimation = () => {
      if (
        animationFrameId === null &&
        isDocumentVisible &&
        !prefersReducedMotion
      ) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const stopAnimation = () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    const handleVisibilityChange = () => {
      isDocumentVisible = document.visibilityState === "visible";
      if (isDocumentVisible) {
        startAnimation();
      } else {
        stopAnimation();
      }
    };

    const handleMotionPreferenceChange = (event: MediaQueryListEvent) => {
      prefersReducedMotion = event.matches;
      if (prefersReducedMotion) {
        stopAnimation();
        renderStaticFrame();
      } else {
        startAnimation();
      }
    };

    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      if (prefersReducedMotion) renderStaticFrame();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    motionQuery.addEventListener("change", handleMotionPreferenceChange);
    window.addEventListener("resize", handleResize);

    if (prefersReducedMotion || !isDocumentVisible) {
      renderStaticFrame();
    } else {
      startAnimation();
    }

    return () => {
      stopAnimation();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      motionQuery.removeEventListener("change", handleMotionPreferenceChange);
      window.removeEventListener("resize", handleResize);
      lineGeometry.dispose();
      lineMaterial.dispose();
      nodeObjects.forEach(({ mesh }) => {
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
      });
      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 h-full w-full"
      style={{ zIndex: 0 }}
    />
  );
}
