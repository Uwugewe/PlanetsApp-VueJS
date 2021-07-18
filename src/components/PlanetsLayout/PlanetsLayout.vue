<template>
  <div class="PlanetsLayout">
    <h1>Welcome in Planets App!!</h1>

    <button @click="showOrHidePlanetsLayout">{{buttonTitle}}</button>

    <Loading v-if="isLoading"/>
    
    <transition name="fade">
      <Pagination v-if="showPlanets" v-bind:links-arr="linksArr" @getDataByLink="getData" />
    </transition>

    <SearchInput v-if="planetsData" @searchPlanetsByName="searchPlanetsByName"/>

    <transition name='fade'>
      <ul v-if="planetsData" class="planetsList">
        <Planet v-for="(planetData, i) in planetsData.results" v-bind:key="i" v-bind:planet-data="planetData"/>
      </ul>
    </transition>

    <div class="startAnimation">
    
    </div>

    
  </div>
</template>

<script src="./PlanetsLayout.js"/>
<style src="./PlanetsLayout.css" rel="stylesheet"/>