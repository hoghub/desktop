<script setup>
import WindowMinimize from 'vue-material-design-icons/WindowMinimize.vue';
import WindowMaximize from 'vue-material-design-icons/WindowMaximize.vue';
import WindowClose from 'vue-material-design-icons/WindowClose.vue';
</script>

<template>
<div class="tool-bar">
  <span class="tool-bar__logo">
    <img src="../assets/images/logo.webp" alt="hoghub" />
  </span>
  <nav class="tool-bar__nav">
    <button class="tool-bar__btn" @click="window.electronAPI.test()">
      <window-minimize />
    </button>
    <button class="tool-bar__btn">
      <window-maximize />
    </button>
    <button class="tool-bar__btn">
      <window-close />
    </button>
  </nav>
</div>
</template>

<style lang="scss">
.tool-bar {
  display: flex;
  align-content: center;
  justify-content: space-between;
  background: linear-gradient(90deg,rgba(23,47,73,.5),rgba(23,47,73,.5) 58%,rgba(23,47,73,0));
  max-height: var(--nav-size);
  overflow: hidden;

  &__logo {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 1.6rem;
    padding: var(--spacing-little);
    flex: 1;
    -webkit-app-region: drag;

    img {
      height: 30px;
    }
  }

  &__nav {
    display: flex;
    align-content: center;
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: rgb(var(--sub-color));
    padding: var(--spacing-little);
    cursor: pointer;

    &:hover {
      background-color: rgba(var(--sub-color), 0.1);
    }

    svg {
      width: 14px;
    }
  }
}
</style>