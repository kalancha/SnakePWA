<template>
  <div class="logo" ref="cont">
    <canvas ref="logo"></canvas>
    <div
      class="nake"
      v-bind:style="{ 'color': colorField }"
      v-bind:class="[!nake?'nake__over':'nake__on']"
    >NAKE</div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "SnakeHeader",
  data() {
    return {
      a: 0,
      b: 0,
      context: null,
      nake: false,
      colorSnake: "#ff7979",
      colorFood: "#f9ca24",
      colorField: "#f9ca24",
      cansize: 0,
      pointOne: 0,
      pointTwo: 0,
      size: 0
    };
  },
  computed: {
    ...mapGetters(["snake", "food", "field"])
  },
  watch: {
    snake(newcs) {
      this.colorSnake = newcs;
      this.a = this.b = 0;
      this.setCanvas();
    },
    food(newcfo) {
      this.colorFood = newcfo;
      this.drawfood();
    },
    field(newcfi) {
      this.colorField = newcfi;
    }
  },
  methods: {
    setCanvas() {
      let canvas = this.$refs.logo;
      let flex = this.$refs.cont.clientWidth; //FIXME: S + food

      if (flex > 1000) {
        this.cansize = 240;

        this.size = this.cansize / 12;
      } else if (flex > 480) {
        this.cansize = 120;
        this.size = this.cansize / 10;
      } else {
        this.cansize = 90;
        this.size = this.cansize / 9;
      }

      canvas.width = canvas.height = this.cansize;
      this.pointOne = Math.floor((this.cansize / 12) * 10);
      this.pointTwo = Math.floor(this.pointOne / 2);
      this.context = canvas.getContext("2d");
      this.drawfood(); // Цвет заливки
      this.animate();
    },
    drawfood() {
      this.context.fillStyle = this.colorFood;
      this.context.fillRect(this.pointOne, 0, this.size, this.size);
    },
    animate() {
      let y = [
        this.pointOne,
        this.pointOne,
        this.pointTwo,
        this.pointTwo,
        0,
        0
      ];
      let x = [0, this.pointOne, this.pointOne, 0, 0, this.pointOne];
      if (this.b >= 20) {
        this.a++;
        this.b = 0;
      }
      let a = this.a;
      let b = this.b;
      let shagY = (y[a + 1] - y[a]) / 20;
      let shagX = (x[a + 1] - x[a]) / 20;

      this.context.fillStyle = this.colorSnake;
      this.context.fillRect(
        x[a] + shagX * b,
        y[a] + shagY * b,
        this.size,
        this.size
      );

      this.b += 1.7;
      if (a < 4 || b * shagX < this.pointOne - 2 * this.size) {
        requestAnimationFrame(this.animate);
      } else {
        this.context.fillRect(x[a] + shagX * this.b , y[a] + shagY * this.b , this.pointOne - (x[a] + shagX * this.b) , this.size);
        this.nake = true;
      }
    }
  },
  mounted: function() {
    this.setCanvas();
  }
};
</script>
<style lang="less" scoped>
.logo {
  margin-top: 15px;
  display: flex;
  height: 240px;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.nake {
  margin: 0;
  padding: 0;
  font-size: 240px;
  font-family: "Permanent Marker", cursive;
  color: #f9ca24;
  &__over {
    visibility: hidden;
    opacity: 0;
  }
  &__on {
    visibility: visible;
    opacity: 100;
    transition-duration: 2s;
  }
}
@media (max-width: 1000px) {
  .nake {
    font-size: 120px;
  }
  .logo {
    height: 120px;
  }
}
@media (max-width: 480px) {
  .nake {
    font-size: 100px;
  }
  .logo {
    height: 100px;
  }
}
</style>