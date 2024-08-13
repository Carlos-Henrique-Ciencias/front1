<script setup lang="ts">
import { ref } from 'vue';

const exames = ref([]);
const novoExame = ref('');

const adicionarExame = () => {
  if (novoExame.value.trim() !== '') {
    exames.value.push(novoExame.value);
    novoExame.value = '';
  }
};

const registrarExames = () => {
  console.log('Exames e Procedimentos:', exames.value);
};
</script>

<template>
  <div class="p-4">
    <h2>Exames e Procedimentos</h2>
    <div class="mt-4">
      <label class="block mb-2">Adicionar Exame/Procedimento</label>
      <div class="flex gap-2">
        <input v-model="novoExame" type="text" class="input" placeholder="Descrição do Exame/Procedimento" />
        <button @click="adicionarExame" class="button">Adicionar</button>
      </div>
    </div>
    <div class="mt-4">
      <h3>Lista de Exames/Procedimentos</h3>
      <ul>
        <li v-for="(exame, index) in exames" :key="index">{{ exame }}</li>
      </ul>
    </div>
    <button @click="registrarExames" class="button button-primary mt-4">Registrar Exames</button>
  </div>
</template>

<style scoped>
.input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.button {
  padding: 0.5rem 1rem;
  background-color: #3490dc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.button:hover {
  background-color: #2779bd;
}
</style>
