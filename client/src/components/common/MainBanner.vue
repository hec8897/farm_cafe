메인 베너 제조사 광고배너 이미지 삽입 가능

<template>
    <div>
      <b-jumbotron v-bind:header="mode" lead="혼자하면 힘들지만 함께하면 든든합니다">
        <p>전국 농자재 판매 관리인 커뮤니티 <b>'팜카페'</b></p>
        <b-button variant="primary" href="#" v-b-modal.modal-1>로그인</b-button>
      </b-jumbotron>
    </div>
</template>

<script>
export default {
    props:['mode'],
    created(){
        console.log(this.mode)
    },
    data(){
        return{
            view:"",
            banner:[
                {idx:0,mode:'woosung',img:null}
            ]
        }
    }
}
</script>
<style lang="scss">
div.jumbotron{
    background-color:LightGreen;
    h1{
        font-size:2.2rem;
        color:#444;
        font-weight:500;
    }
}
    
</style>
