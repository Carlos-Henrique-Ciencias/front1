<script setup lang="ts">
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { FileIcon, ForwardIcon, PrinterIcon, PlayCircleIcon, StopCircleIcon } from 'lucide-vue-next';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const customerId = route.params.customerId;
const isRunning = ref(true);

const navigateTo = (route) => {
  router.push(route);
};

const handleToggleAtendimento = () => {
  isRunning.value = !isRunning.value;
};
</script>

<template>
  <div class="flex gap-4 flex-col">
    <Card class="w-full p-2 rounded-sm">
      <div class="flex w-full gap-4 items-center">
        <div>
          <Avatar class="w-20 h-20">
            <AvatarFallback class="text-xl">NO</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <span>Neusa Oliveira Rodrigues</span><br>
          <span><span class="font-bold">Idade: </span> 68 anos, 6 meses e 17 dias</span><br>
          <span><span class="font-bold">Convênio: </span> Cortesia</span><br>
          <span><span class="font-bold">Primeira consulta: </span> 20/03/2024</span>
        </div>
      </div>
    </Card>
    <div class="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      <Card class="p-4 rounded-sm w-full">
        <span class="font-bold">Antec. clínicos</span><br>
        <span class="text-sm">Endometriose</span><br>
        <Button variant="ghost" class="w-full flex justify-start mt-2" @click="navigateTo(`/patients/${customerId}/antecedentesclinicos`)">Ver Detalhes</Button>
      </Card>
      <Card class="p-4 rounded-sm w-full">
        <span class="font-bold">Antec. cirúrgicos</span><br>
        <span class="text-sm">Laparopsia para remoção de endometriose, cesária</span><br>
        <Button variant="ghost" class="w-full flex justify-start mt-2" @click="navigateTo(`/patients/${customerId}/antecedentescirurgicos`)">Ver Detalhes</Button>
      </Card>
      <Card class="p-4 rounded-sm w-full">
        <span class="font-bold">Antec. Familiares</span><br>
        <span class="text-sm">DMA, CA de mama</span><br>
        <Button variant="ghost" class="w-full flex justify-start mt-2" @click="navigateTo(`/patients/${customerId}/antecedentesfamiliares`)">Ver Detalhes</Button>
      </Card>
      <Card class="p-4 rounded-sm w-full">
        <span class="font-bold">Hábitos</span><br>
        <span class="text-sm">Caminhada de 30min 3x semana</span><br>
        <Button variant="ghost" class="w-full flex justify-start mt-2" @click="navigateTo(`/patients/${customerId}/habitos`)">Ver Detalhes</Button>
      </Card>
    </div>
    <div>
      <span>Últimos diagnósticos</span>
      <hr class="mt-2"/>
    </div>
    <div class="flex justify-end gap-4">
      <Button variant="outline" class="flex gap-2">
        <ForwardIcon />
        Compartilhar
      </Button>
      <Button variant="outline" class="flex gap-2">
        <PrinterIcon />
        Imprimir
      </Button>
      <Button variant="outline" class="flex gap-2">
        <FileIcon />
        Baixar PDF
      </Button>
    </div>
    <hr />
    <Card class="p-8 rounded-sm">
      <ol class="relative border-s border-gray-400 dark:border-gray-700">                  
        <li class="mb-10 ms-6">            
          <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-400 rounded-full -start-3 ring-8 ring-gray-300 dark:ring-gray-900 dark:bg-blue-900"></span>
          <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">20 de março de 2024</h3>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Por Dra. Carolina Rodriigues</time>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias inventore odio molestias ipsa laborum ut necessitatibus nemo a quasi, reiciendis itaque consectetur possimus, dolorem minima cum et voluptas libero esse!
          </p>
        </li>
      </ol>
    </Card>
    <!-- Seção de navegação -->
    <div class="w-full flex" style="height: calc(100vh - 3.4rem);">
      <div class="h-full w-60 border-r-2">
        <div class="flex items-center justify-start border-b-2 p-4">
          <span>Prontuário</span>
        </div>
        <div class="p-4">
          <Button :class="`w-full flex gap-2 items-center ${isRunning && 'bg-red-500 hover:bg-red-400'}`" @click="handleToggleAtendimento">
            <StopCircleIcon v-if="isRunning" />
            <PlayCircleIcon v-if="!isRunning" />
            {{ isRunning ? "Encerrar atendimento" : "Iniciar atendimento" }}
          </Button>
          <div class="mt-4 flex gap-2 flex-col">
            <button class="items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full flex justify-start" @click="navigateTo(`/patients/${customerId}/tabeladeacompanhamento`)">Tabela de acompanhamento</button>
            <button class="items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full flex justify-start" @click="navigateTo(`/patients/${customerId}/atendimento`)">Atendimento</button>
            <button
    class="items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full flex justify-start"
    @click="navigateTo(`/patients/${customerId}/examesprocedimentos`)">
    Exames e Procedimentos
  </button>
          </div>
        </div>
      </div>
      <div class="p-4 w-full">
        <!-- Aqui entra o componente de detalhes -->
      </div>
    </div>
  </div>
</template>
