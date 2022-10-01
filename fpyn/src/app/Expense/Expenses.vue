<template>
  <div>
    <div class="expenses">
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

        <div class="bills__informations">
          <small>Remaining</small>
          <div class="bills__informations__results">
            <small>R$</small>
            <h4>321,00</h4>
          </div>
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

import { ArrowUpCircleIcon, ChevronUpIcon } from "vue-feather-icons";

import ExpensesHeader from "@/app/Expense/ExpensesHeader.vue";

@Component({
  components: { ExpensesHeader, ArrowUpCircleIcon, ChevronUpIcon },
})
export default class Expenses extends Vue {}
</script>

<style scoped lang="scss">
.expenses {
  display: flex;
  flex-direction: column;
  // align-items: center;

  .expenses__title {
    padding-bottom: 10px;
  }
  .bills {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px 0;
  }
  .bills__informations {
    line-height: 1.2;
    margin: 0 20px;

    small {
      color: #57565e;
    }
    &__results {
      display: flex;
      align-items: start;

      h4 {
        line-height: 1;
      }

      .informations__value {
        display: flex;
        align-items: center;

        &__icon {
          width: 13px;
          height: 13px;

          &--incoming {
            color: #11b158;
          }
        }
      }
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
        // border: 1px solid white;
        // border-right: 1px solid #f5f5f7;
        padding-left: 5px;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        border-radius: 2px;

        &:last-child {
          border: 0;
        }
      }
      span:hover {
        background-color: rgba(66, 133, 244, 0.1);
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
