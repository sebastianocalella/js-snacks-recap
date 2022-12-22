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
                this.chat.push({message : response.data.response, status : 'recived'})
            })
        },
        writeMessage(){
            this.chat.push({message : this.userMessage, status : 'sent'})
            this.userMessage = ''
        },
        chatting(){
            this.writeMessage()
            if(this.writeMessage!=''){
                this.getAnswer();
            }
        }
    },
    created(){

    }

}).mount('#app')