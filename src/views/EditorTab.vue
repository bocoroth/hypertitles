<script setup lang="ts">
// The Editor tab is used for editing the current script.

import EditBox from '@/components/EditBox.vue'
import LineList from '@/components/LineList.vue'
import { Util } from '@/utils/Util'

import { onMounted } from 'vue'

onMounted(() => {
  Util.debugLog('Editor view mounted.')
})
</script>

<template>
  <edit-box></edit-box>
  <line-list ref="editorLineList"></line-list>
</template>

<style lang="scss" scoped></style>
