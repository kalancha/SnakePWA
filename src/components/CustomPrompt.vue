<template>
  <div class="prompt-mask" v-if="visible">
    <div class="prompt-wrapper">
      <div class="prompt-container">
        <p>Game Over</p>
        <button v-on:click="menu">Back to Menu</button>
        <button v-on:click="board">Show Leaderboard</button>
        <button v-on:click="load">Download</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CustomPrompt",
  props: {
    visible: Boolean
  },
  data(){
    return{
      deferredPrompt: null
    }
  },
  methods: {
    menu() {
      this.$router.push("/");
    },
    board() {
      this.$router.push("/leaderboards");
    },
    load(){
      if(this.install==null){
        alert("Sorry, your browser does not support this function");
      }else{
         this.install.prompt();
      }
    }
  },
  computed: {
    install(){
      return this.$store.getters.installPrompt;
    }
  }
};
</script>
<style lang="less" scoped>
.prompt-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.prompt-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.prompt-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: "Permanent Marker", cursive;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    &:nth-child(4) {
      background-color: #4a69bd;
    }
    &:nth-child(2) {
      background-color: #ff6f69;
    }
    &:nth-child(3) {
      background-color: #ffa502;
    }
    &:hover {
      cursor: pointer;
    }
  }
  * {
    margin: 5px;
  }
}
</style>