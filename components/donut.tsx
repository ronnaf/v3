import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export interface DonutProps {}

export const Donut = (props: DonutProps) => {
	const mesh = useRef<THREE.Mesh>(null!);

	useFrame((state, delta) => {
		mesh.current.rotation.x += 0.005
		mesh.current.rotation.y += 0.0025
	});

	return (
		<>
			<ambientLight intensity={0.1}  />
			<pointLight position={[8, 8, 8]} />
			<mesh ref={mesh} position={[0, 0, 0]}>
				<torusGeometry args={[1.75, 0.85, 16, 100]} />
				<meshStandardMaterial color="orange" />
			</mesh>
		</>
	);
};
