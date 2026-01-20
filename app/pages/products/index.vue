<script setup>
const { data, pending, error } = await useFetch(
  "https://admindash.comcitybd.com/api/test-open",
  {
    default: () => [],
  },
);
</script>

<template>
  <h3>test Index</h3>
  <p>{{ data.ip }}</p>
  <p>{{ data.ok }}</p>
  <p>{{ data.ua }}</p>
</template>
