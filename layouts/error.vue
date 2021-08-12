<template>
  <div class="flex h-screen text-gray-400 bg-blue">
    <main class="container p-12 py-64 mx-auto">
      <h1 class="pb-3 mb-6 text-5xl text-gray-300 afterline">
        Whoops
      </h1>
      <p class="text-3xl">
        {{ error.message }}
      </p>
      <p class="text-3xl text-gray-300">
        Redirecting you now...
      </p>
    </main>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {
        return {
          message: 'Not Found'
        }
      }
    }
  },
  mounted () {
    setInterval(() => {
      this.$router.push('/')
    }, 4000)
  }
}
</script>

<style>

</style>
