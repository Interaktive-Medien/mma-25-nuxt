<template>
  <div class="w-1/2 mx-auto">
    <div class="mb-4 space-y-4">
      <div>
        <input
          v-model="newPost.title"
          type="text"
          placeholder="Post Title"
          class="w-full p-2 border rounded"
        />
      </div>
      <div>
        <textarea
          v-model="newPost.content"
          placeholder="Post Content"
          class="w-full p-2 border rounded"
          rows="4"
        ></textarea>
      </div>
      <button
        @click="handleCreatePost"
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
const newPost = ref({
  title: "",
  content: "",
});

const handleCreatePost = async () => {
  if (!newPost.value.title) {
    alert("Title is required");
    return;
  }

  const createdPost = await useCreatePost(newPost.value);
  if (createdPost) {
    // Refresh the posts list
    posts.value = await usePosts();
    // Clear the form
    newPost.value = {
      title: "",
      content: "",
    };
  }
};
</script>
