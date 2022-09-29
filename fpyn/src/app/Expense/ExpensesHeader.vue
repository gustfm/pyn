<template>
  <div class="expenses__header expenses__table__sctructure">
    <p>When?</p>
    <p>Where?</p>
    <p>What type?</p>
    <p>How much?</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class ExpensesHeader extends Vue {}
</script>

<style lang="scss" scoped>
.expenses__header {
  width: 100%;
  margin: 0 auto;
  border-radius: 4px 4px 0 0;
  padding: 4px 0;

  p {
    font-size: 13px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    color: #727475;
    font-weight: 400;
    padding-left: 5px;
  }
}
</style>
