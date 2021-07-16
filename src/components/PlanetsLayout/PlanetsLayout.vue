<template>
  <div class="PlanetsLayout">
    <h1>Welcome in Planets App!!</h1>
    <Pagination v-if="showPlanets" v-bind:links-arr="linksArr" @getDataByLink="getData" />
    <button @click="ShowOrHidePlanetsLayout">{{buttonTitle}}</button>
    <ul v-if="showPlanets" class="planetsList">
      <Planet v-for="(planetData, i) in planetsData.results" v-bind:key="i" v-bind:planet-data="planetData"/>
    </ul>
  </div>
</template>

<script src="./PlanetsLayout.js"/>
<style src="./PlanetsLayout.css" rel="stylesheet"/>