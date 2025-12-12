<script setup lang="ts">
// The EditBox module displays the TinyMCE editor.

// TODO: relay fonts from tauri
// TODO: relay images from tauri's pictureDir https://tauri.app/v1/api/js/path/#picturedir

import Editor from 'primevue/editor'
import { onMounted, ref } from 'vue'

import { Util } from '@/utils/Util'

const lineItem = ref<string>('')

onMounted(() => {
  Util.debugLog('EditBox module mounted.')
})
</script>

<template>
  <div id="editbox" style="margin-top: 7px">
    <Editor v-model="lineItem" editorStyle="height: 150px;" />
  </div>
</template>

<style lang="scss"></style>
