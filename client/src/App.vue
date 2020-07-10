<template>
  <div id="app">
    <router-view/>
    <LoginPopup/>
  </div>
</template>
<script>
import LoginPopup from '@/components/common/LoginPopup.vue'
export default {
  components:{
    LoginPopup
  }
  
}
</script>

<style lang="scss">

    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;700&display=swap');
    @import './define.scss';

    *{
      margin:0;
      padding:0;
    }

    html,body{
        font-size: 18px;
        color: $black;
        font-family: 'Noto Sans KR', sans-serif;
        overflow-x: hidden;
        @media (max-width:1024px) {
            font-size: 16px;
        }

        @media (max-width:767px) {
            font-size: 14px;
        }
    }

</style>
