<template>
  <svg
    width="7"
    height="14"
    viewBox="0 0 7 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.73242 1.9043L6.00004 7.22249L1.73242 12.5407"
      :stroke="props.stroke"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
const props = defineProps({
  stroke: {
    default: "#4737FF",
  },
});
</script>
