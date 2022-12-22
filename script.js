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
                    this.even.push(response.data)
                } else{
                    this.odd.push(response.data)
                }
            })
        }
    },
    created(){

    }

}).mount('#app')