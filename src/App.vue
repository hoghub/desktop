<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import ToolBar from "./components/ToolBar.vue";

console.log("[App.vue]", `Hello world from Electron ${process.versions.electron}!`)
</script>

<template>
  <tool-bar />
  <div class="app">
    <div style="margin-top: 2000px"></div>
  </div>
</template>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
}

body {
  background-image: url("assets/images/bg.webp");
  background-repeat: no-repeat;
}

.app {
  overflow: auto;
  max-height: calc(100vh - var(--nav-size));
}
</style>
