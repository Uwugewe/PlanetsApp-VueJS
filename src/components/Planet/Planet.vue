<template>
  <li>
    <h3>
      Name: <span>{{ PlanetData.name }}</span>
    </h3>
    <p>Rotation period: {{ PlanetData.rotation_period }}</p>
    <p>Climate: {{ PlanetData.climate }}</p>
    <p>Gravity: {{ PlanetData.gravity }}</p>
    <p>Created: {{ PlanetData.created }}</p>
    <p>{{ PlanetData.url }}</p>
  </li>
</template>

<script src="./Planet.js"/>
<style src="./Planet.css" rel="stylesheet"/>