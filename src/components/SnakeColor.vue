<template>
<div class="snakecolor">
    <h1>SnakeColor</h1>
    <div class="radio">
    <CustomRadioColor
      v-for="(value,index) in colors"
      name = "snake"
      v-bind:color = value
      v-bind:number = index
      v-on:color="newCurrent"
      :key="index"
    ></CustomRadioColor>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import CustomRadioColor from "@/components/CustomRadioColor.vue";
export default {
  name: "SnakeColor",
  components:  { CustomRadioColor },
  data() {
    return {
      colors: ["#ff7979","#f6b93b", "#6a89cc", "#ff9ff3", "#c8d6e5", "#222f3e", "#1dd1a1"],
      currentColor : null
    };
  },
  props: ["title"],
  methods: {
    ...mapMutations(["updateSnakeColor"]),
    newCurrent(color){
        this.currentColor = color;
        this.updateSnakeColor({
        color: this.currentColor
      });
    }
  }
}
</script>
<style lang="less" scoped>
h1{
   font-family: "Permanent Marker", cursive;
}
.snakecolor {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.radio{
  display: flex;
  flex-wrap: nowrap;
}
</style>
