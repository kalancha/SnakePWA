<template>
  <div class="custom-radio">
    <label>
      <input
        type="radio"
        v-bind:name="name"
        v-bind:value="color"
        v-on:change="newColor"
      />
      <span v-bind:style="{ 'background-color': color }">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
          alt="Checked Icon"
        />
      </span>
    </label>
  </div>
</template>
<script>
export default {
  name: "CustomRadioColor",
  props: {
    name: String,
    color: String,
    number: Number
  },
  methods: {
     newColor() {
       this.$emit('color', this.color);
    }
  }
};
</script>
<style lang="less" scoped>
.custom-radio {
  display: inline-block;
  padding: 2px;

  input[type="radio"] {
    display: none;
  }
  label {
    color: #333;
    font-family: Arial, sans-serif;
    font-size: 14px;

    span {
      display: inline-block;
      width: 40px;
      height: 40px;
      margin: -1px 4px 0 0;
      vertical-align: middle;
      cursor: pointer;
      border-radius: 50%;
      border: 2px solid #ffffff;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
      background-repeat: no-repeat;
      background-position: center;
      text-align: center;
      line-height: 44px;

      img {
        opacity: 0;
        transition: all 0.3s ease;
      }
    }
  }
  label input[type="radio"]:checked + span img {
    opacity: 1;
  }
}
</style>