<script>
export default {
  data() {
    return {
      backgroundColor: "#D9D9D9" // You can set this dynamically
    }
  },
  mounted() {
    
    document.body.style.margin = "0"
    
    document.body.style.padding = "0"

    document.body.style.backgroundColor = this.backgroundColor

    document.body.style.width = "100vw" // Set body width to 100% of the viewport width
    document.body.style.height = "1.5em"

  }
}
</script>

<template>
  <div class="focused-youtube-banner" style="background-color: #D9D9D9; display: flex; align-items: center; padding: auto;">
    <p style="margin-left: 1rem; color: #000000; font-weight: bold;"> Focus mode is ON </p>
    <button style="color: #000000; margin: 0 auto; background-color: #7A7A7A; border: none; border-radius: 8px; padding: 4px 18px; font-weight: bold; cursor: pointer;">Turn Focus mode OFF</button>

  </div>
</template>

<style lang="scss" scoped>

</style>
