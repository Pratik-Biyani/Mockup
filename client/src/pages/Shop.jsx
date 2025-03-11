import React from 'react';
//import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import { PerspectiveCamera, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const ShoeModel = ({ modelPath }) => {
  const gltf = useGLTF(modelPath);
  const scene = Array.isArray(gltf) ? gltf[0].scene : gltf.scene;
  return <primitive object={scene} scale={2} position={[0, -1.5, 0]} />;
};

const ShoeCard = ({ modelPath, name }) => (
  <Card className="p-4 shadow-md">
    <Canvas className="h-40">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={1.5} />
      <OrbitControls enableZoom={false} />
      <ShoeModel modelPath={modelPath} />
    </Canvas>
    <CardContent className="text-center mt-2">{name}</CardContent>
  </Card>
);

const shoes = {
  Men: [
    { name: 'Air Jordan 1',  modelPath: '/assets/3d/nike_sb_dunks.glb' },
    { name: 'Jordan Retro 4', modelPath: '/assets/3d/nike_sb_dunks.glb' },
  ],
  Women: [
    { name: 'Air Jordan 3',modelPath: '/assets/3d/nike_sb_dunks.glb' },
    { name: 'Jordan Max Aura', modelPath: '/assets/3d/nike_sb_dunks.glb' },
  ],
  Kids: [
    { name: 'Jordan 1 Low',modelPath: '/assets/3d/nike_sb_dunks.glb' },
    { name: 'Jordan Jumpman', modelPath: '/assets/3d/nike_sb_dunks.glb' },
  ]
};

export default function NikeShop() {
  return (
    <div className="p-10 bg-wood-pattern min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">Nike Jordan Collection</h1>
      <Tabs defaultValue="Men" className="max-w-5xl mx-auto">
        <TabsList className="flex justify-center mb-4">
          {Object.keys(shoes).map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(shoes).map(([category, shoeList]) => (
          <TabsContent key={category} value={category} className="grid grid-cols-2 gap-6">
            {shoeList.map((shoe, index) => (
              <ShoeCard key={index} {...shoe} />
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}