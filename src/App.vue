<script setup>

</script>

<template>
<router-view v-slot="{ Component }">
  <transition name="slide" >
    <component :is="Component" />
  </transition>
</router-view>
</template>

<style >
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}

.slide-leave-active{
    transition: transform 0.175s ease-out;
  }
  .slide-leave-to{
    transform: translate(-100%, 0);
  }

</style>
