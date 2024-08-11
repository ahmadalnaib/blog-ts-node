<script setup lang="ts">
import {ref} from 'vue';
const periods=['Today', 'This Week', 'This Month'];

const  selectedPeriod= ref('Today');

const selectPeriod=(period:string)=>{
  console.log(period);
  selectedPeriod.value=period;

}

</script>

<template>
  <nav>
    <div class="panel-tabs bg-white shadow-xl text-center text-blue-500 p-5 flex justify-center gap-5">

      <a v-for="period in periods" :key="period" @click="selectPeriod(period)" class="tab-link px-4 py-2 rounded transition-colors duration-300 hover:bg-blue-500 hover:text-white">{{ period }}</a>
     
    </div>
  </nav>
</template>

<style scoped>
</style>