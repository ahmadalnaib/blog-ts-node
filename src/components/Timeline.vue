<script setup lang="ts">
import { type } from 'os';
import { ref } from 'vue';
type Period = 'Today' | 'This Week' | 'This Month';

const periods:Period[] = ['Today', 'This Week', 'This Month'];

const selectedPeriod = ref<Period>('Today');

const selectPeriod = (period: Period) => {
  selectedPeriod.value = period;
};
</script>

<template>
  <nav>
    <div
      class="panel-tabs bg-white shadow-xl text-center text-blue-500 p-5 flex justify-center gap-5"
    >
      <a
        v-for="period in periods"
        :key="period"
        @click="selectPeriod(period)"
        class="tab-link px-4 py-2 rounded transition-colors duration-300"
        :class="{ 'bg-blue-500 text-white': selectedPeriod === period }"
        >{{ period }}</a
      >
    </div>
  </nav>
</template>

<style scoped></style>
