<template>
  <input
    type="text"
    class="form__field"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
  />
</template>
<script>
export default {
  name: "Nickname",
  data() {
    return {
      nick: ""
    };
  },
  props: ["value"]
};
</script>
<style lang="less" scoped>
//** variables
@text: #6a89cc;
@input-bg-color: #f9ca24;
@input-text-color: #6a89cc;

//** form
.form {
  &__field {
    text-align: center;
    width: 450px;
    background: @input-bg-color;
    color: @input-text-color;
    font-family: "Permanent Marker", cursive;
    font-size: 1.7em;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
    border: 0;
    outline: 0;
    padding: 22px 18px;
  }
}
@media (max-width: 480px) {
  .form__field {
    width: 310px;
  }
}
</style>