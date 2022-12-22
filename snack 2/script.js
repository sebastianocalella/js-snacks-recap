const { createApp } = Vue

createApp({
    data() {
    return {
        invitati : []
    }
    },
    methods:{
        getRandomName(iteration){
            for (let i=0; i<iteration; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( (response) => {
                    this.invitati.push(response.data.response)
                })
            }
        },
        checkInput(inputName){
            (this.invitati.includes(inputName)) ? true : false
        }
    },
    created(){
        this.getRandomName(10)
        console.log(this.invitati)
    }

}).mount('#app')