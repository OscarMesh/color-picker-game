<template>
  <h1>Color Picker Game</h1>

  <div>{{ message }}</div>

  <button v-for="color in colors" :key="color" @click="addColor(color)">
    {{ color }}
  </button>
</template>

<script>
import { ref, reactive } from "@vue/reactivity";
import colorManager from "../composables/colorPicker";
export default {
  data() {
    return {
      colors: [],
    };
  },
  methods: {
    addColor() {},
  },
  setup() {
    const { colors, addColor, message } = colorManager();

    return { colors, addColor, message };
  },
};
</script>

<style></style>
