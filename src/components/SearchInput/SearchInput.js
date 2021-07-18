export default {

    data(){
        return{
            inputValue: '',
        }
    },

    watch: {
        inputValue() {
            this.$emit('searchPlanetsByName', this.inputValue);
        }
    }
}