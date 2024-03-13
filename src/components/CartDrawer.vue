<template>
  <div class="cart-drawer">
    <v-navigation-drawer v-model="drawer" location="right">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore modi
        laboriosam cumque illo totam blanditiis minus, magni molestiae
        aspernatur tempora id officiis commodi cum voluptatum illum! Ipsa fugit
        tenetur animi.
      </p>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  inject: ["Emitter"],
  data: () => ({ drawer: false }),
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = true;
    });
  },
};
</script>
