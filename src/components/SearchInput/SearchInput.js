export default {

    data(){
        return{
            inputValue: '',
        }
    },

    watch: {
        inputValue() {
            this.inputValue = this.inputValue.trim().charAt(0).toUpperCase() + this.inputValue.slice(1).toLowerCase();
            this.$emit('searchPlanetsByName', this.inputValue);
        }
    }
}