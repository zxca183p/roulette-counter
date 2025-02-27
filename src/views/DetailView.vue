<template>
  <div>DETAIL</div>
  <div>{{ tableName }}</div>
  <li v-for="item in store.tables[tableName].slice().reverse()" :key="item">
    {{ item }}
  </li>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useTableStore } from '@/stores'

const route = useRoute()
const tableName: string = route.params.tableName as string

const store = useTableStore()

console.log(route.params)
</script>
