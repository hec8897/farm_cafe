<template>
  <b-modal 
  v-model='show' 
  id="modal-1" title="안녕하세요 팜카페입니다.">
  <div class='wrap'>
    <b-input type='text' class="mb-20"></b-input>
    <b-input type='password' class="mb-20"></b-input>
    <b-button class='w-100 mt-10 naver' variant="success">네이버 아이디 로그인</b-button>
    <b-button class='w-100 mt-10' variant="info">로그인</b-button>
  </div>
     <template v-slot:modal-footer>
        <div class="w-100">
          <b-button
            variant="danger"
            size="sm"
            class="float-right"
            @click="show=false">
            닫기
          </b-button>
          <p class='float-left'>회원이 아니신가요?</p>
        </div>
      </template>
  </b-modal>
</template>

<script>

export default {
  data(){
    return{
      show: false,
    }
  }
}

</script>

<style lang="scss">
.modal-content{
  border-radius:0;
}
  .modal-dialog{
    @media (max-width:1024px){
        width:80%;
        margin:30px auto;
    }
    input.form-control.mb-20{
      margin-bottom:20px;
    }
    .btn.mt-10.btn{
    margin-top:10px;
    }
  }
</style>
