<script setup lang="ts">
import { ref } from 'vue';

const marcacoes = ref([
  { id: 1, descricao: 'Consulta de retorno', data: '2024-04-01' },
  { id: 2, descricao: 'Exame de sangue', data: '2024-04-10' },
]);

const adicionarMarcacao = () => {
  if (novaMarcacaoDescricao.value.trim() !== '' && novaMarcacaoData.value.trim() !== '') {
    marcacoes.value.push({
      id: marcacoes.value.length + 1,
      descricao: novaMarcacaoDescricao.value,
      data: novaMarcacaoData.value
    });
    novaMarcacaoDescricao.value = '';
    novaMarcacaoData.value = '';
  }
};

const novaMarcacaoDescricao = ref('');
const novaMarcacaoData = ref('');
const resultadosExames = ref([]);
const novoResultado = ref('');

const adicionarResultado = () => {
  if (novoResultado.value.trim() !== '') {
    resultadosExames.value.push(novoResultado.value);
    novoResultado.value = '';
  }
};

const registrarResultados = () => {
  console.log('Resultados dos Exames:', resultadosExames.value);
};
</script>

<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Tabela de Acompanhamento</h2>
    <div class="mt-4">
      <label class="block mb-2">Descrição da Marcação</label>
      <input v-model="novaMarcacaoDescricao" type="text" class="input" placeholder="Descrição da marcação" />
    </div>
    <div class="mt-4">
      <label class="block mb-2">Data</label>
      <input v-model="novaMarcacaoData" type="date" class="input" />
    </div>
    <button @click="adicionarMarcacao" class="button mt-4">Adicionar Marcação</button>
    <div class="mt-4">
      <h3 class="text-xl font-bold mb-2">Marcações</h3>
      <ul class="list-disc list-inside">
        <li v-for="marcacao in marcacoes" :key="marcacao.id">
          {{ marcacao.descricao }} - {{ marcacao.data }}
        </li>
      </ul>
    </div>
    <div class="mt-4">
      <label class="block mb-2">Adicionar Resultado de Exame</label>
      <div class="flex gap-2">
        <input v-model="novoResultado" type="text" class="input" placeholder="Resultado do exame" />
        <button @click="adicionarResultado" class="button">Adicionar</button>
      </div>
      <ul class="list-disc list-inside mt-2">
        <li v-for="(resultado, index) in resultadosExames" :key="index">{{ resultado }}</li>
      </ul>
    </div>
    <button @click="registrarResultados" class="button button-primary mt-4">Registrar Resultados</button>
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
.button-primary {
  background-color: #38c172;
}
.button-primary:hover {
  background-color: #2d995b;
}
</style>
