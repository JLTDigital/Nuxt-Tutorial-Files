<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products',
})

// Fetch Products
const { data: products } = await useFetch('https://fakestoreapi.com/products')

useHead({
  title: 'Nuxt Tut | Merch',
  meta: [
    {
      name: 'description',
      content: 'Nuxt 3 Merch',
    },
  ],
})
</script>

<style scoped></style>
