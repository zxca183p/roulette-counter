<template>
  <div>History</div>
  <ul>
    <li v-for="(item, name) in store.tables" :key="name">
      {{ name }}
      <button @click="goToDetail(name)">DETAIL</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useTableStore } from '@/stores'
import { useRouter } from 'vue-router'

const store = useTableStore()
const router = useRouter()

function goToDetail(tableName: string) {
  router.push({
    name: 'detail',
    params: {
      tableName,
    },
  })
}
</script>
