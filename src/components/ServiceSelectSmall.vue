<template>
  <div id="ServiceSelectSmall">
    <div class="w-full rounded-2xl bg-custom-color custom-height relative">
       
    
          <div 
          class="
           absolute
           top-1/3
           left-1/3
           transform
           -translate-x-1/4
           -translate-y-1/4
           mt-0.5
          "
          >
            <img width="55" :src="'/image/uber/'+image+'.png'" :alt="text">
         
          </div> 
    </div>
     <div class="text-xs text-center mt-2 text-gray-900 ">
              {{text}}
      </div>
  </div>
</template>

<script setup>
import { toRefs } from "vue"

const props = defineProps({
  text: String,
  image: String,

})

const {text,image} = toRefs(props)

</script>

<style>
#ServiceSelectSmall .bg-custom-color{
  background: rgb(237, 237, 237);
}
#ServiceSelectSmall .custom-height{
 height:70px;
}
</style>