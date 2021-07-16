<template>
  <div class="Pagination">
    <button @click="setPageByButton('prev')">Previous</button>

    <div class="PaginationItems">
      <div class="PaginationItem" :class="i === activePageNumber ? 'active' : ''" v-for="(pageNumber, i) in this.LinksArr" v-bind:key="i" @click="getDataByLink(pageNumber, i)">
          {{ i + 1 }}
      </div>
    </div>

    <button @click="setPageByButton('next')">Next</button>
  </div>
</template>

<script src="./Pagination.js"/>
<style src="./Pagination.css" rel="stylesheet"/>