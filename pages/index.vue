<template>
  <div class="p-16 bg-green-100 w-full md:w-2/3 xl:w-1/2 mx-auto">
    <h1 class="">Ich bin die Startseite</h1>

    <p>Ich bin ein Paragraph</p>

    <InputTodo @addTodo="addTodo" />
    <TodoList :todos="todos" />
  </div>
</template>

<script setup>
console.log("Ich bin die Startseite");

const todos = ref([]);

const addTodo = (todo) => {
  todos.value.push(todo);
  console.log(todos.value);
};
</script>
