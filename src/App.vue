<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/tab'
import 'material-symbols//outlined.css'

import SettingsTab from '@/views/SettingsTab.vue'
import EditorTab from '@/views/EditorTab.vue'
import PerformanceTab from '@/views/PerformanceTab.vue'
import { Util } from '@/utils/Util'

import { onBeforeMount, onMounted } from 'vue'

onBeforeMount(() => {
  // set to true to enable debug logger
  Util.setDebugMode(true)
})

onMounted(() => {
  Util.debugLog('App mounted.')
})
</script>

<template>
  <div class="app-container">
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button
          class="nav-link active"
          id="nav-settings-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-settings"
          type="button"
          role="tab"
          aria-controls="nav-settings"
          aria-selected="true"
        >
          <span class="material-symbols-outlined fs-6">settings</span>
          {{ $t('App.settings') }}
        </button>
        <button
          class="nav-link"
          id="nav-editor-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-editor"
          type="button"
          role="tab"
          aria-controls="nav-editor"
          aria-selected="false"
        >
          <span class="material-symbols-outlined fs-6">contract_edit</span>
          {{ $t('App.editor') }}
        </button>
        <button
          class="nav-link"
          id="nav-performance-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-performance"
          type="button"
          role="tab"
          aria-controls="nav-performance"
          aria-selected="false"
        >
          <span class="material-symbols-outlined fs-6">developer_mode_tv</span>
          {{ $t('App.performance') }}
        </button>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane show active" id="nav-settings" role="tabpanel" aria-labelledby="nav-settings-tab">
        <settings-tab></settings-tab>
      </div>
      <div class="tab-pane" id="nav-editor" role="tabpanel" aria-labelledby="nav-editor-tab">
        <editor-tab ref="editorTab"></editor-tab>
      </div>
      <div class="tab-pane" id="nav-performance" role="tabpanel" aria-labelledby="nav-performance-tab">
        <performance-tab ref="performanceTab"></performance-tab>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.app-container {
  // CSS variable overrides
  --bs-body-bg: #222;
  --bs-body-color: #eee;
  --p-editor-content-background: #111;
  --p-editor-content-color: #eee;
  --p-datatable-row-background: #222;
  --p-datatable-row-hover-background: #333;
  --p-datatable-row-color: #aaa;
  --p-datatable-row-hover-color: #aac;
}

// Material Symbols
.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48;
}

// Tabs
nav,
.nav {
  --bs-nav-link-color: #555;
  background-color: var(--bs-body-bg);
  .nav-tabs {
    margin: 4px 0 0;

    .nav-link {
      padding: 0 7px;
      margin-left: 10px;
      vertical-align: middle;
    }
  }
}
</style>
