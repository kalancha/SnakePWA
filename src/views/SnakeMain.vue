<template>
  <div class="main">
    <link
      href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap"
      rel="stylesheet"
    />
    <SnakeHeader></SnakeHeader>
    <div class="choose">
      <SnakeColor title="Snake color"></SnakeColor>
      <FoodColor title="Food color"></FoodColor>
      <FieldColor title="Field color"></FieldColor>
    </div>
    <div class="play">
      <Nickname ref="inp" v-model="nick" :placeholder="place"></Nickname>
      <PlayButton v-on:clicked="checkNick"></PlayButton>
    </div>
  </div>
</template>
<script>
import SnakeHeader from "@/components/SnakeHeader.vue";
import SnakeColor from "@/components/SnakeColor.vue";
import FoodColor from "@/components/FoodColor.vue";
import FieldColor from "@/components/FieldColor.vue";
import Nickname from "@/components/Nickname.vue";
import PlayButton from "@/components/PlayButton.vue";
import { mapMutations } from "vuex";
export default {
  name: "SnakeMain",
  components: {
    SnakeHeader,
    SnakeColor,
    FoodColor,
    FieldColor,
    Nickname,
    PlayButton
  },
  data() {
    return {
      nick: "",
      place: "Enter your Nickname"
    };
  },
  methods: {
    ...mapMutations(["updateNickname"]),
    checkNick() {
      if(this.nick.length  > 9){
         this.place = "Max 9 letters";
         this.nick = "";
      }
      else if (this.nick != "") {
        
        this.updateNickname({
          nickname: this.nick
        });

        this.$router.push("/game");
        this.place = "Need letters";
      }
    }
  }
};
</script>
<style lang="less" scoped>
.choose {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  flex:1;
}
.choose > * { 
  margin: 15px 0;
  flex:1;
}
.play {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
}

@media (max-height:965px) and (min-width: 1000px) {
  .choose{
    flex-flow: row nowrap;
    justify-content: space-evenly;
  }
}
</style>