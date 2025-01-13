<script setup lang="ts">
import { ref } from 'vue'
import SimpleButton from './SimpleButton.vue'

const phoneNumber = ref()
const message = ref(``)

const copyLink = async () => {
  try {
    const link = getLink()
    if (!link) return
    await navigator.clipboard.writeText(link)
    alert('¡Enlace copiado al portapapeles! 📋')
  } catch (err) {
    console.error('Error al copiar el enlace:', err)
  }
}

const openWhatsApp = () => {
  const link = getLink()
  if (!link) return
  window.open(link, '_blank')
}

const getLink = () => {
  if (!phoneNumber.value) {
    alert('Por favor, ingresa un número de teléfono 📞')
    return
  }
  let encodedMessage = ''

  if (message.value) {
    encodedMessage = `&text=${encodeURIComponent(message.value)}`
  }

  return `https://web.whatsapp.com/send?phone=${phoneNumber.value}${encodedMessage}`
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
      <SimpleButton @click="copyLink">Copiar link</SimpleButton>
      <SimpleButton @click="openWhatsApp">Ir al chat</SimpleButton>
    </div>
    <div class="flex flex-col items-center justify-center w-full gap-3">
      <label for="message" class="text-xl font-semibold text-gray-300"
        >Mensaje Predeterminado</label
      >
      <textarea
        id="message"
        v-model="message"
        placeholder="Escribe tu mensaje aquí."
        class="sticky top-20 bg-slate-800 rounded-xl min-h-60 border-2 border-green-600 text-md text-gray-200 font-semibold py-2 px-4 w-full max-w-xl placeholder:text-gray-400 focus:outline-none focus:border-green-800"
      ></textarea>
    </div>
  </section>
</template>
