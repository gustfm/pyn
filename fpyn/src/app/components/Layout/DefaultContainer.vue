<template>
  <div class="default-container">
    <div class="default-container__title">
      <h3 class="font-semibold">{{ title }}</h3>
      <small>Jan 14 to Feb 14</small>
    </div>
    <div class="mt-4">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class SpendingChecker extends Vue {
  @Prop({ required: true }) public title: string;
}
</script>

<style lang="scss">
@import "@/assets/css/colors.scss";

.default-container {
  &__title {
    line-height: 1;

    h3 {
      width: 80%;
    }
    small {
      color: $--color-text-regular;
      font-size: 12px;
    }
  }
}
</style>
