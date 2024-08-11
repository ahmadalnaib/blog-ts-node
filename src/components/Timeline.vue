<script setup lang="ts">
import { type } from 'os';
import { ref, computed } from 'vue';
import { Post, today, thisWeek, thisMonth } from '../posts';
type Period = 'Today' | 'This Week' | 'This Month';
import { DateTime } from 'luxon';

const periods: Period[] = ['Today', 'This Week', 'This Month'];

const selectedPeriod = ref<Period>('Today');

const selectPeriod = (period: Period) => {
  selectedPeriod.value = period;
};

const posts = computed(() => {
  return [today, thisWeek, thisMonth]
    .map((post) => {
      return {
        ...post,
        created_at: DateTime.fromISO(post.created_at),
      };
    })
    .filter((post) => {
      if (selectedPeriod.value === 'Today') {
        return post.created_at >= DateTime.now().minus({ days: 1 });
      }
      if (selectedPeriod.value === 'This Week') {
        return post.created_at >= DateTime.now().minus({ week: 1 });
      }
      if (selectedPeriod.value === 'This Month') {
        return post.created_at >= DateTime.now().minus({ days: 30 });
      }
      return post;
    });
});
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
    <a v-for="post in posts" :key="post.id">
      <a>{{ post.title }}</a>
      <div>{{ post.created_at.toFormat('d MMM') }}</div>
    </a>
  </nav>
</template>

<style scoped></style>
