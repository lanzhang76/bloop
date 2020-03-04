# Making an audio-responsive shader with Three.js

> Lan Zhang & Anna Garbier<br>
> [Experimental Shaders](http://compform.net/experimental_shaders/) peer-to-peer lesson plan

## Overview
We've learned how to write fragment shaders in OpenGL Shading Language (GLSL). But wouldn't it be cool if we could control our shaders with audio input? Today, we'll learn one set of tools that helps us do this.

## Tools
* [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
* [Three.js](https://threejs.org/)

## Learning objectives

1. Process microphone input using Web Audio API
1. Use processed audio information within GLSL fragment shader code
1. Use GLSL fragmant shader code to modify a Three.js material

## Questions

### Understanding the starter code
TODO(Anna, Lan): add starter code.

Open `audio_input.js`.
1. What does `getUserMedia()` do?
1. What is a `MediaStream`?
1. What is an `AudioContext`?
1. What does `createMediaStreamSource()` do?

Open `index.html`.
1. Where is the GLSL fragment shader code? What is it doing?

Open `index.js`
1. What is a `THREE.Sphere`, `THREE.ShaderMaterial`, and `THREE.mesh`?
1. How is the GLSL fragment shader code interacting with each (if at all)?

### Modifying the starter code
1. How do we extract amplitude from our audio stream?
1. How do we control the fragment shader's opacity based on audio amplitude?
1. What other fragment features could we control using amplitude?
1. What other audio features could we use as shader input?

## Schedule

| Time | Duration | Purpose | Description |
|------|----------|---------|-------------|

## Prep

## Materials
