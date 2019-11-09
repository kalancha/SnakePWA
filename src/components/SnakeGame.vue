<template>
  <div class="bord" ref="bord" v-hammer:pan.left="swipeLeft">
    <div v-hammer:pan.down="swipeDown">
      <div v-hammer:pan.up="swipeUp">
        <div v-hammer:pan.right="swipeRight">
          <canvas class="game" ref="game"></canvas>
          <CustomPrompt v-bind:visible="vis"></CustomPrompt>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

import CustomPrompt from "@/components/CustomPrompt.vue";
export default {
  name: "SnakeGame",
  components: {
    CustomPrompt
  },
  data() {
    return {
      context: null,
      box: 32,
      posX: 64,
      posY: 64,
      speed: 100,
      now: 0,
      dir: "down",
      korBox: [],
      snakeLen: 1,
      foodBox: [],
      canwid: null,
      canhei: null,
      countsteps: 0,
      eventsteps: 0,
      score: 0,
      vis: false
    };
  },
  methods: {
    setCanvas() {
      let canvas = this.$refs.game;
      let bordH = this.$refs.bord.clientHeight;
      let bordW = this.$refs.bord.clientWidth;
      this.context = canvas.getContext("2d");

      this.canwid = Math.floor(bordW / 32) * 32;
      this.canhei = Math.floor(bordH / 32) * 32;

      canvas.width = this.canwid;
      canvas.height = this.canhei;

      this.context.fillStyle = this.snake; // Цвет заливки
      this.korBox.push([this.posX, this.posY]);
      this.createFood();
      this.animate();
    },
    animate() {
      let ctx = this.context;
      let box = this.box;
      ctx.fillRect(this.posX, this.posY, box, box);
      this.now += 20;
      if (this.now == this.speed) {
        this.countsteps += 1;
        if (this.dir == "left") this.posX -= box;
        if (this.dir == "right") this.posX += box;
        if (this.dir == "up") this.posY -= box;
        if (this.dir == "down") this.posY += box;

        if (this.posY < 0) this.posY = this.canhei - box;
        if (this.posY >= this.canhei) this.posY = 0;
        if (this.posX < 0) this.posX = this.canwid - box;
        if (this.posX >= this.canwid) this.posX = 0;

        this.now = 0;

        this.korBox.push([this.posX, this.posY]);

        if (this.korBox.length > this.snakeLen) this.korBox.shift();

        for (let x = 1; x < this.korBox.length - 1; x++) {
          if (
            this.korBox[this.korBox.length - 1][0] == this.korBox[x - 1][0] &&
            this.korBox[this.korBox.length - 1][1] == this.korBox[x - 1][1]
          ) {
            x = this.korBox.length;
            let newmas = JSON.parse(localStorage.getItem("score"));
            if (!newmas) newmas = [];
            newmas.push(this.score.toString());
            localStorage.setItem("score", JSON.stringify(newmas));
            let newuser = JSON.parse(localStorage.getItem("users"));
            if (!newuser) newuser = [];
            newuser.push(this.user.nickname);
            localStorage.setItem("users", JSON.stringify(newuser));

            this.vis = true;
            this.over = true;
          }
        }

        ctx.fillStyle = this.fieldColor;
        ctx.fillRect(0, 0, this.canwid, this.canhei);
        this.korBox.forEach(function(item) {
          if (item[0] == this.foodBox[0] && item[1] == this.foodBox[1]) {
            this.snakeLen += 1;
            this.score += 10;
            this.updateScore();
            this.createFood();
          }
        }, this);

        ctx.fillStyle = this.foodColor;
        ctx.fillRect(this.foodBox[0], this.foodBox[1], 32, 32);

        ctx.fillStyle = this.snakeColor;
        this.korBox.forEach(function(item) {
          ctx.fillRect(item[0], item[1], box, box);
        });
      }
      if (!this.vis) {
        requestAnimationFrame(this.animate);
      }
    },
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max)) + 1;
    },
    createFood() {
      let x = this.getRandomInt(this.canwid / 32) - 1;
      let y = this.getRandomInt(this.canhei / 32) - 1;
      this.foodBox = [x * this.box, y * this.box];
    },
    onKeyDown(e) {
      if (this.countsteps > this.eventsteps) {
        switch (e.keyCode) {
          case 38:
            if (this.dir != "down" && this.dir != "up") {
              this.dir = "up";
              this.eventsteps = this.countsteps;
            }
            break;
          case 40:
            if (this.dir != "up" && this.dir != "down") {
              this.dir = "down";
              this.eventsteps = this.countsteps;
            }
            break;
          case 39:
            if (this.dir != "left" && this.dir != "left") {
              this.dir = "right";
              this.eventsteps = this.countsteps;
            }
            break;
          case 37:
            if (this.dir != "right" && this.dir != "right") {
              this.dir = "left";
              this.eventsteps = this.countsteps;
            }
            break;
        }
      }
    },
    swipeLeft() {
      if (this.countsteps > this.eventsteps) {
        if (this.dir != "right" && this.dir != "right") {
          this.dir = "left";
          this.eventsteps = this.countsteps;
        }
      }
    },
    swipeRight() {
      if (this.countsteps > this.eventsteps) {
        if (this.dir != "left" && this.dir != "left") {
          this.dir = "right";
          this.eventsteps = this.countsteps;
        }
      }
    },
    swipeUp() {
      if (this.countsteps > this.eventsteps) {
        if (this.dir != "down" && this.dir != "up") {
          this.dir = "up";
          this.eventsteps = this.countsteps;
        }
      }
    },
    swipeDown() {
      if (this.countsteps > this.eventsteps) {
        if (this.dir != "up" && this.dir != "down") {
          this.dir = "down";
          this.eventsteps = this.countsteps;
        }
      }
    },

    ...mapMutations(["updateScore", "clearScore"]),
    newScore() {
      this.updateScore();
    },
    NewScore() {
      this.clearScore();
    }
  },
  mounted: function() {
    this.NewScore();
    this.setCanvas();
    document.addEventListener("keydown", this.onKeyDown);
  },
  computed: {
    snakeColor() {
      return this.$store.getters.snake;
    },
    foodColor() {
      return this.$store.getters.food;
    },
    fieldColor() {
      return this.$store.getters.field;
    },
    user() {
      return this.$store.getters.nickname;
    },
    trys() {
      return this.$store.getters.installPrompt;
    }
  }
};
</script>
<style lang="less">
.game {
  border: 2px solid black;
}
.bord {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>