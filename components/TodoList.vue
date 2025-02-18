<template>
  <div v-if="todos.length > 0">
    <ul>
      <li v-for="task in todos" :key="task">
        {{ task }}
      </li>
    </ul>
  </div>

  <div v-else>
    <p>Keine Todos! :)</p>
  </div>
</template>

<script setup>
const props = defineProps(["todos"]);
</script>
