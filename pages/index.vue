<template>
  <div class="p-16 bg-green-100 w-full md:w-2/3 xl:w-1/2 mx-auto">
    <h1 class="">Ich bin die Startseite</h1>

    <p :class="{ 'text-green-500': isActive, 'text-red-500': !isActive }">
      Momentan habe ich so viele Todos: {{ numberOfTodos }}
    </p>

    <InputTodo @addTodo="addTodo" />
    <TodoList :todos="todos" />
  </div>
</template>

<script setup>
console.log("Ich bin die Startseite");

const todos = ref([]);
const isActive = ref(true);

const addTodo = (todo) => {
  todos.value.push(todo);
  console.log(todos.value);
};

const numberOfTodos = computed(() => {
  return todos.value.length * 2;
});
</script>
