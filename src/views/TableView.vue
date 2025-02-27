<template>
  <div>Table</div>
  <input type="text" v-model="inputTable" />
  <button @click="addTable">ADD</button>
  <ul>
    <li v-for="(item, name) in store.tables" :key="name">
      {{ name }}
      <button @click="removeTable(name)">REMOVE</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useTableStore } from '@/stores'

let inputTable: string = ''
const store = useTableStore()

function addTable() {
  store.addTable(inputTable)
  inputTable = ''
}

function removeTable(tableName: string) {
  store.removeTable(tableName)
  console.log(store.tables)
}
</script>
