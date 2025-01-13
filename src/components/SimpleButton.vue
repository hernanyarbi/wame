<script setup lang="ts">
defineEmits(['click'])
</script>
<template>
  <button @click="$emit('click')" class="button"><slot></slot></button>
</template>
<style lang="css" scoped>
.button {
  @apply rounded-2xl bg-green-700 text-white py-3 px-4 disabled:bg-green-900 disabled:text-gray-300;
}
</style>
