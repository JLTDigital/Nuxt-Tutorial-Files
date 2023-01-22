<template>
  <div>
    <Head>
      <Title>Nuxt Tut | {{ product.title }}</Title>
      <Meta name="description" :content="product.description"></Meta>
    </Head>

    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

// Fetch Product
const { data: product } = await useFetch(uri, { key: id })

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not Found',
    fatal: true,
  })
}

definePageMeta({
  layout: 'products',
})
</script>

<style scoped></style>
