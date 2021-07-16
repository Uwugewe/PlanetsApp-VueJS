<template>
  <div>
    <h1>Welcome in Planets App!!</h1>
    <button @click="getData">Show planets</button>
    <PlanetsLayout v-if="dataObject" v-bind:data-object="dataObject"/>
  </div>
</template>

<script src="./StartView.js"/>
