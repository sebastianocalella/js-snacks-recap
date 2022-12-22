const { createApp } = Vue

createApp({
    data() {
    return {
    
    }
    },
    methods:{
        getArrayNumbers(min,max,items){
            axios.get(`https://flynn.boolean.careers/exercises/api/array/integers?min=${min}&max=${max}&items=${items}`)
            .then((response) =>{
                this.numberList = response
                console.log(this.numberList)
            })
        }
    },
    created(){

    }

}).mount('#app')