<script setup lang="ts">
// The LineList module displays the datatable containing the current script.
import { onMounted, ref } from 'vue'
import { Util } from '../utils/Util'
import Datatable from 'primevue/datatable'
import Column from 'primevue/column'

const selectedLine = ref<any>(null)
const testTableData = [
  {
    lineNumber: 1,
    start: '00:00:01,000',
    end: '00:00:04,000',
    lengthMS: 3000,
    cssClass: 'md',
    line: 'Lorem ipsum dolor sit amet consectetur adipiscing elit velit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    lineNumber: 2,
    start: '00:00:05,000',
    end: '00:00:08,000',
    lengthMS: 3000,
    cssClass: 'md',
    line: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
]

onMounted(() => {
  Util.debugLog('LineList module mounted.')
})
</script>

<template>
  <div class="line-list-module">
    <Datatable
      :value="testTableData"
      class="p-datatable-sm d-flex flex-column"
      responsiveLayout="scroll"
      :scrollable="true"
      scrollHeight="400px"
      selectionMode="single"
      dataKey="lineNumber"
      :selection="selectedLine"
      :metaKeySelection=false
    >
      <Column field="lineNumber" header="#" style="width: 3rem;"></Column>
      <Column field="start" header="Start" style="width: 5rem;"></Column>
      <Column field="end" header="End" style="width: 5rem;"></Column>
      <Column field="lengthMS" header="Length (ms)" style="width: 7rem;"></Column>
      <Column field="cssClass" header="Class" style="width: 7rem;"></Column>
      <Column field="line" header="Line"></Column>
    </Datatable>
  </div>
</template>

<style scoped lang="scss">
</style>
