<script setup lang="ts">
import { onMounted } from 'vue'

import { Util } from '@/utils/Util'

// TODO: get i18n translations working with vue-mount-component

const props = defineProps({
  isEditorMode: {
    type: Boolean,
    required: false,
    default: false
  }
})

onMounted(() => {
  Util.debugLog('LineListButtons module mounted.')
})
</script>

<template>
  <div class="goto-line-container" style="display: none">
    <label class="goto-line-label">
      {{ $t('LineList.gotoline') }}
    </label>
    <input class="goto-line-input" type="text" />
    <button class="goto-line-view btn btn-sm btn-info">
      {{ $t('LineList.view') }}
    </button>
    <button class="goto-line-cue btn btn-sm btn-warning" :class="{ 'd-none': props.isEditorMode }">
      {{ $t('LineList.cue') }}
    </button>
    <button class="goto-line-go btn btn-sm btn-danger" :class="{ 'd-none': props.isEditorMode }">
      {{ $t('LineList.go') }}
    </button>
  </div>
</template>

<style lang="scss"></style>
