<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
function toCounter() {
  router.push({
    name: 'counter',
  })
}
function toHistory() {
  router.push({
    name: 'history',
  })
}
function toTable() {
  router.push({
    name: 'table',
  })
}
</script>

<template>
  <RouterView />
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-bottom">
    <div class="container-fluid justify-content-center">
      <ul class="navbar-nav">
        <li class="nav-item">
          <button @click="toCounter">COUNTER</button>
        </li>
        <li class="nav-item">
          <button @click="toHistory">HISTORY</button>
        </li>
        <li class="nav-item">
          <button @click="toTable">TABLE</button>
        </li>
      </ul>
    </div>
  </nav>
</template>
