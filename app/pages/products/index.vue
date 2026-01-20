<script setup>
const { data, pending, error } = await useFetch(
  "https://admindash.comcitybd.com/api/test-open",
  {
    default: () => [],
    headers: {
      "User-Agent": "Mozilla/5.0",
      Accept: "application/json",
    },
  },
);
</script>

<template>
  <h3>test Index</h3>
  <p>{{ data.ip }}</p>
  <p>{{ data.ok }}</p>
  <p>{{ data.ua }}</p>
</template>
