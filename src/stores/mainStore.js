import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDirectionStore = defineStore('direction', {
  state: () =>({

     pickup: null,
     destination: null,

  }),
    //To persist the state
    persist: true
 
})
