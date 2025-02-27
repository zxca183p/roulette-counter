<template>
  <div>COUNTER</div>
  table name
  <select v-model="selectedTable" @change="selectedTableChanged">
    <option v-for="(item, name) in store.tables" :key="name">{{ name }}</option>
  </select>
  <br />
  NUMBER: {{ input }}
  <button @click="add">ADD</button>
  <button @click="clear">CLEAR</button>
  <br />
  <div class="number-pad">
    <button @click="press(1)">1</button>
    <button @click="press(2)">2</button>
    <button @click="press(3)">3</button>
    <br />
    <button @click="press(4)">4</button>
    <button @click="press(5)">5</button>
    <button @click="press(6)">6</button>
    <br />

    <button @click="press(7)">7</button>
    <button @click="press(8)">8</button>
    <button @click="press(9)">9</button>
  </div>
</template>

<script setup lang="ts">
import { useTableStore } from '@/stores'
import { ref } from 'vue'

const store = useTableStore()
const input = ref<string>('')
const selectedTable = ref<string>('')

function selectedTableChanged() {
  console.log(selectedTable.value)
}

function add() {
  store.addRecord(selectedTable.value, input.value)
  console.log(store.tables)
  clear()
}
function clear() {
  input.value = ''
}

function press(num: number) {
  input.value += num
}
</script>
