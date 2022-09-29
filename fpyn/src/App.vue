<template>
  <div class="application">
    <Expenses />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Expenses from "@/app/Expense/Expenses.vue";

@Component({
  components: { Expenses },
})
export default class App extends Vue {}
</script>

<style lang="scss">
.application {
  font-family: "Inter" sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 10px 70px 0 70px;

  .pages-container {
    width: 100vw;
    background: #ffffff;
  }
}
</style>
