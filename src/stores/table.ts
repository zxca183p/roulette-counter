import { reactive } from 'vue'
import { defineStore } from 'pinia'
import type { Tables } from '@/types'

export const useTableStore = defineStore('tables', () => {
  const tables = reactive<Tables>({})

  function addRecord(tableName: string, record: string) {
    if (tables[tableName]) tables[tableName].push(record)
  }

  function addTable(tableName: string) {
    if (!tables[tableName]) tables[tableName] = []
  }

  function removeTable(tableName: string) {
    if (tables[tableName]) delete tables[tableName]
  }

  ;(function addTestData() {
    addTable('table1')
    addTable('table2')
    addTable('table3')
    addRecord('table1', '1')
    addRecord('table1', '2')
    addRecord('table1', '3')
    addRecord('table1', '4')
    addRecord('table1', '5')
    addRecord('table1', '6')
  })()

  return { tables, addTable, removeTable, addRecord }
})
