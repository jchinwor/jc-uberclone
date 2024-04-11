<template>
<div id="Directions" >
   <div class="grid grid-cols-12 mt-4 shadow-md">
        <div  class="col-span-2 mx-auto">
            <div @click="goBack()">
                <ArrowIcon :size="35" />
            </div>
            <div class="h-16 mt-4 w-full">
                <div :class="isPickupActive ? 'circle-black' : 'circle-gray'">
                </div>
                <div class="line"></div>
                <div :class="!isPickupActive ? 'square-black' : 'square-gray'">
                </div>
            </div>

        </div>
        <div class="col-span-10 pr-4">
            <div class="w-full h-5"></div>
            <div class="mb-2 mt-5">
                <AutoCompleteInput 
                 theid="firstInput"
                 v-model:input="pickup"
                 @clearInput="clearInputFunc('firstInput')"
                 placeholder="Enter pick-up location"
                 @isActive="isPickupActive = true"
                />
            </div>

            <div class="mb-3">
                <AutoCompleteInput 
                 theid="secondInput"
                 @clearInput="clearInputFunc('secondInput')"
                 v-model:input="destination"
                 placeholder="Where to? "
                 @isActive="isPickupActive = false"
                />
            </div>
        </div>
   </div>

      <div v-for="address in addressData" :key="address">
              <div @click="storeAddress(address.description)" class="flex items-center cursor-pointer">
                    <div class="bg-gray-400 mx-5 my-3.5 p-1.5 rounded-full">
                        <MapMarkerIcon :size="30" fillColor="#f5f5f5"/>
                    </div> 
                    <div>
                        <div class="text-lg text-gray-600">
                        {{address.description}}  
                        </div>
                        <div class="text-lg text-gray-400">
                        {{address.terms[0].value}} 
                        </div>
                    </div>
            </div>
      </div>
      
</div>
</template>

<script setup>
import AutoCompleteInput from '@/components/AutoCompleteInput.vue'
import { onMounted, ref, watch } from 'vue'
import ArrowIcon from 'vue-material-design-icons/ArrowLeft.vue'
import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue'
import { debounce } from 'lodash'
import axios from 'axios'
import { useDirectionStore } from '@/stores/mainStore' 
import router from '@/router'
 
const isPickupActive = ref(true)
const pickup = ref('')
const destination = ref('')
const addressData = ref('')

const direction = useDirectionStore()


onMounted(()=>{ 

    document.getElementById('firstInput').focus()
})

const goBack = () =>{
    router.push('./')
}

const clearInputFunc = (inputId) =>{
    if(inputId === 'firstInput'){
        pickup.value = ''
        direction.pickup = ''
    }
    if(inputId === 'secondInput'){
        destination.value = ''
        direction.destination = ''
    }
}

const storeAddress = (address) =>{

    if(isPickupActive.value){

        direction.pickup = address
        pickup.value = address
        addressData.value = ''
    }else{
        direction.destination = address
        destination.value = address

    }

    if(direction.pickup.length > 0 && direction.destination.length>0){
        router.push('/map')
    }

}
const findAddress = debounce(async(address) =>{

    if(address == null || address === 'null' || address === ''){

        addressData.value = ''
        return ''
    }

   try {

     let res = await axios.get('address/'+address)
     addressData.value = res.data
    
   } catch (err) {

    console.log(err) 
    
   }
     
},300)

watch(pickup, async(pickup)=> await findAddress(pickup))
watch(destination, async(destination)=> await findAddress(destination))

</script>

<style>
#Directions .bg-custom-color{
  background: rgb(237, 237, 237);
}
#Directions .circle-black{
    margin:0 auto;
    width:9px;
    height:9px;
    background-color:black;
    border-radius:100%;
}
#Directions .circle-gray{
    margin:0 auto;
    width:9px;
    height:9px;
    background-color:rgb(191,191,191);
    border-radius:100%;
}

#Directions .square-black{
    margin:0 auto;
    width:9px;
    height:9px;
    background-color:black;
    
}
#Directions .square-gray{
    margin:0 auto;
    width:9px;
    height:9px;
    background-color:rgb(191,191,191);
    
}
#Directions .line{
    margin:0 auto;
    width:2px;
    height:45px;
    background-color:rgb(191,191,191);
    
}
#Directions .custom-border-bottom{
   border-bottom: 1px solid rgb(230, 230, 230)
    
}
</style>