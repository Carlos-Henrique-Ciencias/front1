<script setup lang="ts">
import { ref } from 'vue';

const habitos = ref([
  'Caminhada de 30min 3x semana',
]);

const adicionarHabito = () => {
  if (novoHabito.value.trim() !== '') {
    habitos.value.push(novoHabito.value);
    novoHabito.value = '';
  }
};

const novoHabito = ref('');
</script>

<template>
  <div class="p-4">
    <h2>Hábitos</h2>
    <ul class="list-disc list-inside mt-4">
      <li v-for="(habito, index) in habitos" :key="index">{{ habito }}</li>
    </ul>
    <div class="mt-4">
      <label class="block mb-2">Novo Hábito</label>
      <input v-model="novoHabito" type="text" class="input" placeholder="Digite o novo hábito" />
      <button @click="adicionarHabito" class="button mt-2">Adicionar</button>
    </div>
  </div>
</template>

<style scoped>
.input {
  border: 1px solid #ccc;
  padding: 8px;
  width: 100%;
}

.button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.button:hover {
  background-color: #45a049;
}
</style>
