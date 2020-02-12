# "Bloop!"

> Lan Zhang & Anna Garbier

## Overview
We plan to make a voice-responsive 3D 'blob' animation. The animation visuals will be generated in Three.js, using a custom GLSL vertex and fragment shader. The blobs’s exact properties (i.e. its colors, sizes, and movements) will be determined by incoming audio information. We will use an audio library like P5.sound, P5.speech, or Tone.js to convert microphone input (e.g. a person yelling “Bloop bloop!!”) into useable and interesting information for our shaders.

We will begin by making a simple blob that grows or shrinks based on the amplitude of microphone input. We will then build out complexity in both directions: processing additional types of audio information (e.g. frequency) into additional types of visual information (e.g. color). The animation will be presented on the web. The code will be stored on GitHub.

## 5 key features
- Process microphone audio stream (e.g. extract frequency, volume, pitch information)
- Use the processed audio signals to control shader visuals (i.e. the blob)
- The blob’s 3D geometry morphs organically using noise
- The blob’s colors are smooth using color blending
- The interaction is playable online

## 3 stretch goals
- Multi-player network with socket.io
- Gamify the experience with time and audio history
- Easter eggs (e.g. special word or sound maps to something unexpected)

## 5 learning goals
- Learn to set up geometry and manipulate mesh in three.js
- Learn to use shader material on unconstrained geometry in three.js
- Explore ways to translate audio information into visual outputs
- Solidify understanding of the relationships between GLSL, WebGL, Three.js
- Explore playful, intuitive, voice-based interaction design
