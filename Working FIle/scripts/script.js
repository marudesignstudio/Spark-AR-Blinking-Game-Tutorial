//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
const Patches = require('Patches');

// How to access scene objects
const directionalLight = Scene.root.find('directionalLight0');
var counterNumber = Scene.root.find('number');
var scoreNumber = Patches.getScalarValue('score');

// How to access class properties
const directionalLightIntensity = directionalLight.intensity;
counterNumber.text = scoreNumber.toString();

// How to log messages to the console (uncomment line below to activate)
//Diagnostics.log('I am a console message logged from the script');
