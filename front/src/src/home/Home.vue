<template>
  <t-card>
    <t-button @click="modal = true">Click</t-button>
    <t-modal v-model="modal">
      <t-input value="Hello world" />
      <template v-slot:footer>
        <div class="flex justify-end">
          <t-button @click="modal = false">Click</t-button>
        </div>
      </template>
    </t-modal>
  </t-card>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    modal: false,
  }),
  created() {
    console.log("Hello World again");
  },
};
</script>

<style scoped></style>
