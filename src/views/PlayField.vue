<template>
  <div class="playField">
    <ScoreTable></ScoreTable>
    <SnakeGame></SnakeGame>
  </div>
</template>
<script>
import ScoreTable from "@/components/ScoreTable.vue";
import SnakeGame from "@/components/SnakeGame.vue";
export default {
  name: "PlayField",
  components: {
    ScoreTable,
    SnakeGame
  }
};
</script>
<style lang="less" scoped>
.playField {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 5px 1fr 5px;
  grid-template-rows: 40px auto;
  & > * {
    grid-column: 2;
  }
}
@media (max-width: 700px) {
  .playField {
    grid-template-rows: 35px auto;
  }
}
</style>