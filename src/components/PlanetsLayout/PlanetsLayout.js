import Planet from '../Planet/Planet.vue'
import Pagination from '../Pagination/Pagination.vue'
import axios from 'axios'

export default {
  components: {
    Planet,
    Pagination
  },

  data() {
    return{
      buttonTitle: 'Show planets',
      showPlanets: false,
      isLoading: false,
      planetsData: false,
      firstPage: 'https://swapi.dev/api/planets',
      linksArr: []
    }
  },

  computed: {

  },

  methods: {
    getData(link) {
      this.linksArr = [];
      this.isLoading = true;
      axios 
        .get(link)
        .then(res => {
          this.planetsData = res.data;
         
        });
    },
    ShowOrHidePlanetsLayout() {
     this.showPlanets = !this.showPlanets; 
    },
  },

  watch: {
    showPlanets() {
      if (this.showPlanets === true) {
        this.getData(this.firstPage);
        return this.buttonTitle = "Close PlanetsLayout"
      } else {
        return (
        this.planetsData = false,
        this.buttonTitle = "Show planets"
        )
      }
    },
    planetsData() {
      let count = this.planetsData.count;
      // if( count%10 !== 0 )
      
      for(let i = 1; i <= count/10; i++) {
        this.linksArr.push(`https://swapi.dev/api/planets/?page=${i}`);
      }
    }
  },
}