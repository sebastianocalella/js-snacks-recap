const { createApp } = Vue

createApp({
    data() {
    return {
        sum : 0
    }
    },
    methods:{
        getArrayNumbers(min,max,items){
            axios.get(`https://flynn.boolean.careers/exercises/api/array/integers?min=${min}&max=${max}&items=${items}`)
            .then((response) =>{
            for(let i=0; i<response.data.response.length; i++){
                this.sum += response.data.response[i];
            }
            })
        },
    },
    created(){

    }

}).mount('#app')