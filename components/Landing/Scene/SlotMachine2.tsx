"use client";

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, forwardRef, useState, useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import * as THREE from "three";
import { Euler, useThree } from "@react-three/fiber";
import ReactPlayer from "react-player/youtube";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import { useControls } from "leva";

type GLTFResult = GLTF & {
  nodes: {
    Sphere014: THREE.Mesh;
    Sphere015: THREE.Mesh;
    Sphere018: THREE.Mesh;
    Sphere010: THREE.Mesh;
    Sphere011: THREE.Mesh;
    Sphere013: THREE.Mesh;
    Sphere019: THREE.Mesh;
    Sphere008: THREE.Mesh;
    Sphere009: THREE.Mesh;
    Sphere012: THREE.Mesh;
  };
  materials: {
    Buttons: THREE.MeshStandardMaterial;
    ["export"]: THREE.MeshBasicMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

interface Props {
  setIs3dLoaded: (value: boolean) => void;
  iframeClick: () => void;
  setCamera: (value: any) => void;
  isVideoFocused: boolean;
  isEvents: boolean;
}

const rotationPropArray: Euler | undefined = [0.4510000000000003, 0, 0];

export const SlotMachine2 = forwardRef(function SlotMachine2(
  {
    setIs3dLoaded,
    iframeClick,
    setCamera,
    isVideoFocused,
    isEvents,
    ...props
  }: Props,
  ref: any
) {
  const { nodes, materials } = useGLTF("/Models/uSlotM.glb") as GLTFResult;

  const videoUrlArrayIframe = ["ZCrClSBM1ns", "0BYgHIMnz50", "krsrGOqnAN0"];

  const [iframeIndex, setIframeIndex] = useState(0);

  const handleRef: any = useRef();

  const nextVideoIframe = () => {
    if (!isEvents) {
      setIframeIndex((prev) => {
        if (prev === 2) {
          return 0;
        }
        return prev + 1;
      });
    }
  };

  const prevVideoIframe = () => {
    if (!isEvents) {
      setIframeIndex((prev) => {
        if (prev === 0) {
          return 2;
        }
        return prev - 1;
      });
    }
  };

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.to(handleRef?.current?.rotation, {
        x: (7 / 6) * Math.PI,
        duration: 0.75,
        ease: "back.inOut(3)",
      }).to(
        handleRef?.current?.rotation,
        {
          x: Math.PI,
          duration: 0.75,
          ease: "back.inOut(3)",
        },
        "+=0.25"
      );
    },
    { dependencies: [iframeIndex] }
  );

  const { camera } = useThree();

  useEffect(() => {
    setIs3dLoaded(true);
    setCamera(camera);
  }, [camera, setCamera, setIs3dLoaded]);

  return (
    <>
      <group ref={ref} dispose={null}>
        <group rotation={[-Math.PI, 0.009, -Math.PI]}>
          <mesh
            geometry={nodes.Sphere014.geometry}
            material={materials.Buttons}
            position={[-0.005, 0.734, -0.084]}
            rotation={[Math.PI, -0.009, Math.PI]}
            onClick={nextVideoIframe}
          />
          <mesh
            geometry={nodes.Sphere015.geometry}
            material={materials.Buttons}
            position={[-0.005, 0.734, -0.084]}
            rotation={[Math.PI, -0.009, Math.PI]}
            onClick={prevVideoIframe}
          />
          <mesh
            geometry={nodes.Sphere018.geometry}
            material={materials.Buttons}
            position={[-0.005, 0.734, -0.084]}
            rotation={[Math.PI, -0.009, Math.PI]}
            onClick={iframeClick}
          />
        </group>
        <group rotation={[-Math.PI, 0.009, -Math.PI]}>
          <group
            position={[0.001, 1.019, 0.1]}
            rotation={[1.241, -0.006, -0.008]}
          >
            <group position={[-0.273, 0, 0]}>
              <mesh
                geometry={nodes.Sphere010.geometry}
                material={materials["export"]}
                rotation={[1.901, -0.003, 3.133]}
              />
              <mesh
                geometry={nodes.Sphere011.geometry}
                material={materials["export"]}
                position={[0.365, 0.001, -0.001]}
                rotation={[1.901, -0.003, 3.133]}
              />
              <mesh
                geometry={nodes.Sphere013.geometry}
                material={materials["export"]}
                position={[0.545, 0, 0]}
                rotation={[1.901, -0.003, 3.133]}
              />
              <mesh
                geometry={nodes.Sphere019.geometry}
                material={materials["export"]}
                position={[0.185, 0.003, -0.003]}
                rotation={[1.901, -0.003, 3.133]}
              />
            </group>
          </group>
          <mesh
            geometry={nodes.Sphere008.geometry}
            material={materials["export"]}
            position={[-0.005, 0.734, -0.084]}
            rotation={[Math.PI, -0.009, Math.PI]}
          />
          <mesh
            geometry={nodes.Sphere009.geometry}
            material={materials["Material.001"]}
            position={[-0.001, 0.488, 0.092]}
            rotation={[Math.PI, -0.009, Math.PI]}
          >
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={0.31000000000000005}
              rotation={rotationPropArray}
            >
              <div id="iframe-container">
                <div
                  id="iframe-overlay"
                  onClick={iframeClick}
                  style={isEvents ? { display: "none" } : { zIndex: 2 }}
                ></div>
                <ReactPlayer
                  url={`https://www.youtube.com/embed/${videoUrlArrayIframe[iframeIndex]}`}
                  style={isEvents ? { display: "none" } : { zIndex: 1 }}
                  playing={isVideoFocused}
                  loop
                />
                <iframe
                  // src="https://oasis-24-web.netlify.app/events"
                  // src="http://localhost:3000/ComingSoon"
                  src="https://www.bits-oasis.org/ComingSoon"
                  style={{ zIndex: 0 }}
                />
              </div>
            </Html>
          </mesh>
          <mesh
            geometry={nodes.Sphere012.geometry}
            material={materials["export"]}
            position={[0.577, -0.147, -0.155]}
            rotation={[Math.PI, -0.009, Math.PI]}
            ref={handleRef}
          />
        </group>
      </group>
    </>
  );
});

useGLTF.preload("/Models/uSlotM.glb");
