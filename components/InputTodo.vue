<template>
  <div class="">
    <!-- <p>{{ todo }}</p> -->
    <label for="todo-input">Bitte Todo eingeben:</label>
    <input v-model="todo" type="text" id="todo-input" class="" />
    <button @click="addTodo">Todo hinzufügen</button>
  </div>
</template>

<script setup>
const todo = ref("");

const emit = defineEmits(["addTodo"]);

const addTodo = () => {
  emit("addTodo", todo.value);
  todo.value = "";
};
</script>

<style scoped></style>
