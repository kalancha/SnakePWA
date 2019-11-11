<template>
  <div class="leaderboards">
    <div class="lead">
      <span>LeaderBoard</span>
      <button class="btn" @click="clear">Clear</button>
    </div>
    <div class="score">Score</div>
    <div class="nick">Nickname</div>

    <div class="item" v-for="(item) in both" v-bind:key="item.id">{{item.score}}</div>

    <div class="user" v-for="(user,n) in both" :key="n">{{user.user}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [],
      score: [],
      both: []
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
    this.sort();
  },
  methods: {
    clear() {
      localStorage.clear();
      document.location.reload(true);
    },
    sort() {
      for (let a = 0; a < this.users[0].length; a++) {
        this.both.push({
          user: this.users[0][a],
          score: this.score[0][a]
        });
      }
     let s = this.both.sort((a, b) => b.score - a.score);
     this.bots = s;
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