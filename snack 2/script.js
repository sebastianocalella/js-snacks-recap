const { createApp } = Vue

createApp({
    data() {
    return {
        invitati : [],
        invitato : '',
        isInvited : false
    }
    },
    methods:{
        getRandomName(iteration){
            for (let i=0; i<iteration; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/name')
                .then( (response) => {
                    this.invitati.push(response.data.response)
                })
            }
        },
        checkInput(inputName){
            this.isInvited = this.invitati.includes(inputName)
        }
    },
    created(){
        this.getRandomName(10)
        
        console.log(this.invitati)
    }

}).mount('#app')