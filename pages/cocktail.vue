<template>
  <div class="w-1/2 mx-auto">
    <h1>{{ cocktail.strDrink }}</h1>

    <img class="w-full" :src="cocktail.strDrinkThumb" alt="" />

    <p class="mt-4">{{ cocktail.strInstructions }}</p>
  </div>
</template>

<script setup>
const cocktail = await useRandomCocktail();
console.log(cocktail);
</script>
