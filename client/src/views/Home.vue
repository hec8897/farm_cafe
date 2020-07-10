<template>
  <div class="home">
    <MainBanner mode='woosung'/>
  </div>
</template>

<script>
// @ is an alias to /src

import MainBanner from '@/components/common/MainBanner.vue'

export default {
  name: 'Home',
  components: {
   MainBanner
  }
}
</script>
