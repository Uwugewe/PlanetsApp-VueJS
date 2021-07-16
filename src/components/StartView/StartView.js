import axios from 'axios';
import PlanetsLayout from '../PlanetsLayout/PlanetsLayout.vue'

export default {
  components: {
    PlanetsLayout
  },
  data(){
    return{
      isLoading: false,
      dataObject: false,
      currentPage: 1,
      firstPage: 'https://swapi.dev/api/planets',
    }
  },
  methods: {
    getData() {
      this.isLoading = true;
      axios 
        .get(this.firstPage)
        .then(res => {
          this.dataObject = res.data;
        })
    }
  },
}