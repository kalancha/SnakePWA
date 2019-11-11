<template>
    <div class=info>
        <div>{{nickname.nickname}}</div>
        <div>Score: {{score}}</div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    name: "ScoreTable",
    methods : {
        checkNick(){
             if(this.nickname==""){
                 this.$router.replace("/")
             }
        }
    },
    computed: {
    ...mapGetters(["score","nickname"])
    },
    mounted : function(){
        this.checkNick()
    }
}
</script>
<style scoped>
.info{
    width:100%;
    display: flex;
    justify-content: space-around;
    font-family: "Permanent Marker", cursive;
    font-size: 32px;
}
@media (max-width: 600px) {
    .info{
    font-size: 22px;
    }
}
</style>