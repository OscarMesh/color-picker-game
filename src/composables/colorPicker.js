import { ref, reactive } from "@vue/reactivity";
import { onMounted, watch, onBeforeMount, watchEffect } from "vue";

const colorManager = () => {
  const colors = ["red", "green", "blue", "yellow"];

  let message = ref("Pick a color...");

  const addColor = (value) => {
    const randonNumber = Math.floor(Math.random() * 3) + 1;

    if (colors[randonNumber] === value) {
      message.value = `You win... [answer: ${colors[randonNumber]}]`;
      return;
    }
    message.value = `You loose... [answer: ${colors[randonNumber]}]]`;
  };

  return {
    colors,
    addColor,
    message,
  };
};

export default colorManager;
