const { createApp } = Vue

createApp({
    data() {
    return {
        numberList : ''
    }
    },
    methods:{
        getArrayNumbers(min,max,items){
            axios.get(`https://flynn.boolean.careers/exercises/api/array/integers?min=${min}&max=${max}&items=${items}`)
            .then((response) =>{
                console.log(response.data.response)
                this.numberList = response.data.response
                console.log(this.numberList)
            })
        },
        sum(){
            let sum = 0
            for(let i=0; i<this.numberList.length; i++){
                sum += this.numberlist[i]
            }
        },
        cLog(element){
            console.log(element)
        }

    },
    created(){

    }

}).mount('#app')