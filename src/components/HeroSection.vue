<script setup lang="ts">
import { ref } from 'vue'

const phoneNumber = ref()

const copyLink = async () => {
  const link = `https://api.whatsapp.com/send?phone=${phoneNumber.value}`
  try {
    await navigator.clipboard.writeText(link) // Copia el enlace al portapapeles
    alert('¡Enlace copiado al portapapeles! 📋')
  } catch (err) {
    console.error('Error al copiar el enlace:', err)
  }
}

const openWhatsApp = () => {
  if (!phoneNumber.value) {
    alert('Por favor, ingresa un número de teléfono 📞')
    return
  }
  const link = `https://api.whatsapp.com/send?phone=${phoneNumber.value}`
  window.open(link, '_blank') // Abre el enlace en una nueva pestaña
}
</script>

<template>
  <section class="flex flex-col items-center justify-center h-full gap-10 py-20 px-4 max-w-4xl">
    <div class="rounded-full py-1 px-4 bg-gray-900 border-2 border-sky-600">
      Crea tu Enlace de WhatsApp en Segundos 📲✨
    </div>
    <h1 class="text-5xl lg:text-6xl text-center font-bold">
      Conecta Fácilmente con tus Clientes,
      <span class="bg-gradient-to-r from-green-400 to-sky-700 bg-clip-text text-transparent"
        >¡Solo Ingresa un Número!</span
      >
    </h1>
    <input
      v-model="phoneNumber"
      type="number"
      placeholder=""
      class="sticky top-20 bg-transparent border-b-2 border-green-600 text-3xl text-center text-gray-200 font-semibold py-2 px-4 w-full max-w-xl placeholder:text-gray-400 focus:outline-none focus:border-green-800"
    />
    <div class="flex justify-center gap-3">
      <button @click="copyLink" class="button">Copiar link</button>
      <button @click="openWhatsApp" class="button">Ir al chat</button>
    </div>
  </section>
</template>
<style lang="css" scoped>
.button {
  @apply rounded-2xl bg-green-700 text-white py-3 px-4 disabled:bg-green-900 disabled:text-gray-300;
}
</style>
