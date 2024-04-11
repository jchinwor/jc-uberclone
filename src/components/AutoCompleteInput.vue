<template>
  <div id="AutoCompleteInput" class="flex items-center">
    <input :id="theid" v-model="inputComputed" @click="emit('isActive',true)" type="text" name="" class="
    text-md
    bg-gray-100
    appearance-none
    w-full
    py-2.5
    px-3
    text-gray-700
    leading-light
    focus:outline-none
    focus:shadow-outline
    focus:bg-gray-200
    "
    :placeholder="placeholder"
    autocomplete="off"
    >

    <WindowCloseIcon @click="emit('clearInput')" fillColor="#2e2e2d"/>
  </div>
</template>

<script setup>
import { computed, toRefs } from "vue"
import WindowCloseIcon from 'vue-material-design-icons/WindowClose.vue'
const emit = defineEmits(['update:input','clearInput', 'isActive'])

const props = defineProps({
  theid: String,
  input: String, 
  placeholder: String,
  
})

const {theid,input,placeholder} = toRefs(props)

const inputComputed = computed({
    get: () => input.value,
    set: (val) => emit('update:input', val)
})

</script>

