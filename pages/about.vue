<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui totam
      quisquam itaque, maxime dolor perferendis! Ex fuga temporibus similique
      optio ut sapiente officiis, perspiciatis illo laboriosam enim, eos
      doloremque cum.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus esse
      aperiam nam optio voluptatum temporibus soluta quaerat nihil vel
      veritatis! Voluptatem voluptatibus explicabo laboriosam sunt, quos fugit
      eveniet consequatur veritatis!
    </p>
    <div>
      {{ data }}
    </div>
  </div>
</template>

<script setup>
// const data = useFetch('/api/login')

// const data = useFetch('/api/currency/GBP')

const data = await useFetch('/api/login?name=Johnny', {
  method: 'post',
  body: { age: 30 },
})
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>
