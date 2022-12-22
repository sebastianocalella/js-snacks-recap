const { createApp } = Vue

createApp({
    data() {
    return {
        botAnswer : ''
    }
    },
    methods:{
        getAnswer(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
            .then((response) => {
                this.botAnswer = response.data.response
                console.log(response.data.response)
            })
        }
    },
    created(){

    }

}).mount('#app')