const { createApp } = Vue

createApp({
    data() {
    return {
        oddNumbers : [],
        evenNumbers : []
    }
    },
    methods:{
        getNumber(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/int')
            .then((response) =>{
                if (response%2 == 0){
                    this.evenNumbers.push(response.data.response)
                } else{
                    this.oddNumbers.push(response.data.response)
                }
            })
        }
    },
    created(){

    }

}).mount('#app')