const { createApp } = Vue

createApp({
    data() {
    return {
        chat : []
    }
    },
    methods:{
        getAnswer(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
            .then((response) => {
                this.chat.push(response.data.response)
            })
        }
    },
    created(){

    }

}).mount('#app')