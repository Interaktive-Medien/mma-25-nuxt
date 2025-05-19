<template>
  <div class="w-1/2 mx-auto">
    <div class="mb-4">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Post
      </button>
    </div>

    <div class="space-y-4">
      <div
        v-for="post in posts"
        :key="post.id"
        class="border p-4 rounded shadow"
      >
        <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
        <p class="text-gray-700">{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = await usePosts();
console.log(posts);
</script>
