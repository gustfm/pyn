<template>
  <div>
    <h2 class="expenses__title">Expenses</h2>

    <div class="bills">
      <div class="bills__informations">
        <small>Incomes</small>
        <div class="bills__informations__results">
          <small>R$</small>
          <h4>7.321,00</h4>
        </div>
      </div>

      <div class="bills__informations">
        <small>Expenses</small>
        <div class="bills__informations__results">
          <small>R$</small>
          <h4>321,00</h4>
        </div>
      </div>
    </div>

    <div class="expenses__table">
      <ExpensesHeader />
      <div class="expenses__table__list">
        <div class="expenses__table__list__row expenses__table__sctructure">
          <span>A</span>
          <span>A</span>
          <span>A</span>
          <span>A</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import ExpensesHeader from "@/app/Expense/ExpensesHeader.vue";

@Component({
  components: { ExpensesHeader },
})
export default class Expenses extends Vue {}
</script>

<style scoped lang="scss">
.expenses__title {
  padding-bottom: 10px;
}
.bills {
  display: flex;
  padding-bottom: 10px;
}
.bills__informations {
  line-height: 1.2;
  margin-right: 20px;

  &__results {
    display: flex;
    align-items: start;

    h4 {
      line-height: 1;
    }
  }
}
.expenses__table {
  width: 100%;

  &__list {
    border-top: 2px solid #f5f5f7;
    height: 100vh;

    &__row {
      border-bottom: 1px solid #f5f5f7;
      
      span {
        border-right: 1px solid #f5f5f7;
        padding-left: 5px;
      
        &:last-child {
          border: 0;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.expenses__table__sctructure {
  display: grid;
  grid-template-columns: 150px 1fr 200px 200px;
}
</style>
