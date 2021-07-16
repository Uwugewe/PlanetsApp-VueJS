<template>
  <div class="PlanetsLayout">
    <h1>Welcome in Planets App!!</h1>

    <button @click="ShowOrHidePlanetsLayout">{{buttonTitle}}</button>
    
    <transition name="fade">
      <Pagination v-if="showPlanets" v-bind:links-arr="linksArr" @getDataByLink="getData" />
    </transition>

    <transition name='fade'>
      <ul v-if="showPlanets" class="planetsList">
        <Planet v-for="(planetData, i) in planetsData.results" v-bind:key="i" v-bind:planet-data="planetData"/>
      </ul>
    </transition>

    <div class="startAnimation">
    
    </div>

    
  </div>
</template>

<script src="./PlanetsLayout.js"/>
<style src="./PlanetsLayout.css" rel="stylesheet"/>