<template>
  <p>Hallo {{ $route.params.url }}, schön bist du wieder da!</p>
</template>

<script setup>
console.log("Ich bin die Seite", $route.params.url);
</script>
