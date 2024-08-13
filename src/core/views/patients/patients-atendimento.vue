<script setup lang="ts">
import { ref } from 'vue';

const convenio = ref('');
const informacoesEspecificas = ref('');
const dataConsulta = ref('');
const exames = ref([]);
const novoExame = ref('');

const adicionarExame = () => {
  if (novoExame.value.trim() !== '') {
    exames.value.push(novoExame.value);
    novoExame.value = '';
  }
};

const registrarAtendimento = () => {
  console.log('Convênio:', convenio.value);
  console.log('Informações Específicas:', informacoesEspecificas.value);
  console.log('Data da Consulta:', dataConsulta.value);
  console.log('Exames:', exames.value);
};
</script>

<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Atendimento</h2>
    <div class="mb-4">
      <label class="block mb-2">Convênio</label>
      <input v-model="convenio" type="text" class="input" placeholder="Digite o convênio" />
    </div>
    <div class="mb-4">
      <label class="block mb-2">Informações Específicas</label>
      <textarea v-model="informacoesEspecificas" class="input" placeholder="Digite as informações específicas"></textarea>
    </div>
    <div class="mb-4">
      <label class="block mb-2">Data da Consulta</label>
      <input v-model="dataConsulta" type="date" class="input" />
    </div>
    <div class="mb-4">
      <label class="block mb-2">Adicionar Exame</label>
      <div class="flex gap-2">
        <input v-model="novoExame" type="text" class="input" placeholder="Nome do exame" />
        <button @click="adicionarExame" class="button">Adicionar</button>
      </div>
      <ul class="list-disc list-inside mt-2">
        <li v-for="(exame, index) in exames" :key="index">{{ exame }}</li>
      </ul>
    </div>
    <button @click="registrarAtendimento" class="button button-primary">Registrar Atendimento</button>
  </div>
</template>
<style scoped>
.input {
  border: 1px solid #ccc;
  padding: 8px;
  width: 100%;
}

.textarea {
  border: 1px solid #ccc;
  padding: 8px;
  width: 100%;
  min-height: 100px;
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