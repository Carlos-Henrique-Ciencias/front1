<script setup lang="ts">
import { ref } from 'vue';

const antecedentesClinicos = ref([
  'Endometriose',
  'Hipertensão',
]);

const adicionarAntecedente = () => {
  if (novoAntecedente.value.trim() !== '') {
    antecedentesClinicos.value.push(novoAntecedente.value);
    novoAntecedente.value = '';
  }
};

const novoAntecedente = ref('');
</script>

<template>
  <div class="p-4">
    <h2>Antecedentes Clínicos</h2>
    <ul class="list-disc list-inside mt-4">
      <li v-for="(antecedente, index) in antecedentesClinicos" :key="index">{{ antecedente }}</li>
    </ul>
    <div class="mt-4">
      <label class="block mb-2">Novo Antecedente</label>
      <input v-model="novoAntecedente" type="text" class="input" placeholder="Digite o novo antecedente" />
      <button @click="adicionarAntecedente" class="button mt-2">Adicionar</button>
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
