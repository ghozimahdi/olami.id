<template>
  <div>
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style>
main {
  min-height: 100vh;
}
</style>