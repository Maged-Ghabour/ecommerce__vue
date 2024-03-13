<template>
  <div class="layout">
    <v-layout>
      <CartDrawer />
      <v-main>
        <slot></slot>
      </v-main>
      <AppNav />
      <AppFooter />
    </v-layout>
  </div>
</template>

<script>
import AppFooter from "./AppFooter.vue";
import AppNav from "./AppNav.vue";
import CartDrawer from "./CartDrawer.vue";

export default {
  data: () => ({
    drawer: true,
  }),
  components: {
    AppFooter,
    AppNav,
    CartDrawer,
  },
};
</script>
