<template>
  <div class="but">
    <a href="#" class="playBut" v-on:click="$emit('clicked')">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
        x="0px"
        y="0px"
        v-bind:width="size"
        v-bind:height="size"
        viewBox="0 0 213.7 213.7"
        enable-background="new 0 0 213.7 213.7"
        xml:space="preserve"
      >
        <polygon
          class="triangle"
          id="XMLID_18_"
          fill="none"
          stroke-width="7"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          points="
	73.5,62.5 148.5,105.8 73.5,149.1 "
        />

        <circle
          class="circle"
          id="XMLID_17_"
          fill="none"
          stroke-width="7"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          cx="106.8"
          cy="106.8"
          r="103.3"
        />
      </svg>
    </a>
  </div>
</template>
<script>
export default {
  name: "PlayButton",
  data() {
    return {
      size: "213.7px"
    };
  },
  methods: {
    flex() {
      if (window.innerWidth < 500) {
        this.size = "100px";
      }
    }
  },
  mounted: function() {
    this.flex();
  }
};
</script>
<style lang="less" scoped>
.circle {
  stroke: #f8aa28;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  transition: all 0.5s ease;

  .triangle {
    transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: #000;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: #f8aa28;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }
        30% {
          transform: translateX(-5px);
        }
        50% {
          transform: translateX(5px);
        }
        70% {
          transform: translateX(-2px);
        }
        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
.but {
  margin: 7px;
}
</style>