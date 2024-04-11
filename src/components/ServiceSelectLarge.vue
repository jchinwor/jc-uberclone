<template>
  <div id="ServiceSelectLarge">
    <div class="w-full rounded-2xl bg-custom-color custom-height">
       
       <div v-if="promo" class="w-full relative z-10">
          <span 
          class="
           absolute
           top-1/2
           left-1/2
           -translate-x-1/2
           -translate-y-1/2
           p-0.5
           px-2
           text-gray-100
           bg-green-700
           rounded-3xl
           text-xs
          "
          >
          Promo
          </span>
       </div>
       
        <div class="flex justify-between p-2">
          <div class="text-lg ml-2 text-gray-900 mt-14">
              {{text}}
          </div>
          <div class="mt-3 mr-1">
            <img :width="imageWidth" :src="'/image/uber/'+image+'.png'" :alt="text">
          </div>

        </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from "vue"

const props = defineProps({
  text: String,
  imageWidth: String, 
  image: String,
  promo: {Boolean, dafault:true}
})

const {text,imageWidth,image} = toRefs(props)

</script>

<style>
#ServiceSelectLarge .bg-custom-color{
  background: rgb(237, 237, 237);
}
#ServiceSelectLarge .custom-height{
 height:100px;
}
</style>