<template>
  <div class="leaderboards">
    <div class="lead">
      <span>LeaderBoard</span>
      <button class="btn" @click="clear">Clear</button>
    </div>
    <div class="score">Score</div>
    <div class="nick">Nickname</div>

    <div class="item" v-for="item in score[0]" v-bind:key="item.id">{{item}}</div>

    <div class="user" v-for="(user,n) in users[0]" :key="n">{{user}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [],
      score: []
    };
  },
  mounted() {
    if (localStorage.getItem("score")) {
      try {
        this.score.push(JSON.parse(localStorage.getItem("score")));
        this.users.push(JSON.parse(localStorage.getItem("users")));
      } catch (e) {
        localStorage.removeItem("score");
        localStorage.removeItem("users");
      }
    }
  },
  methods: {
      clear(){
      localStorage.clear();
      document.location.reload(true);
    }
  }
};
</script>
<style scoped>
.leaderboards {
  display: grid;
  grid-auto-flow: dense;
  grid-gap: 3px;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 100px;
  height: 100%;
  overflow-y: auto;
}

.leaderboards > div {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: #ffeead;
  font-family: "Permanent Marker", cursive;
}

.leaderboards > div:nth-child(1) {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 100px;
}
.lead span {
  grid-column: 2;
  display: flex;
  justify-content: center;
}

.lead .btn {
  grid-column: 3;
}

.nick {
  grid-column: 1 / 5;
}

.score {
  grid-column: 5 / 7;
}

.item {
  grid-column: 5 / 7;
}
.user {
  grid-column: 1 / 5;
}

.leaderboards > div:nth-child(1n) {
  background-color: #96ceb4;
}

.leaderboards > div:nth-child(5n) {
  background-color: #f8a5c2;
}

.leaderboards > div:nth-child(3n) {
  background-color: #4a69bd;
}

.leaderboards > div:nth-child(2n) {
  background-color: #ff6f69;
}

.leaderboards > div:nth-child(4n) {
  background-color: #ffcc5c;
}

.btn {
  margin: 5px;
  float: right;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 16px;
  background-color: #ffcc5c;
}
</style>