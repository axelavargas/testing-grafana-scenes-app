import React from 'react';
import { getScene } from './helloWorldScene';

export const HelloWorld = () => {
  const scene = getScene();

  return <scene.Component model={scene} />;
};
