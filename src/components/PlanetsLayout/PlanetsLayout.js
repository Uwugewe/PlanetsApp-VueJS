import Planet from '../Planet/Planet.vue'
import Pagination from '../Pagination/Pagination.vue'
import axios from 'axios'
import Loading from '../Loading/Loading.vue'
import SearchInput from '../SearchInput/SearchInput.vue'

export default {
  components: {
    Planet,
    Pagination,
    Loading,
    SearchInput
  },

  data() {
    return{
      buttonTitle: 'Show planets',
      showPlanets: false,
      isLoading: false,
      planetsData: false,
      currentPage: 1,
      firstPage: 'https://swapi.dev/api/planets',
      linksArr: [],
      filteredByName: [],
    }
  },

  methods: {
    getData(link) {
      this.isLoading = true;
      this.linksArr = [];
      axios 
        .get(link)
        .then(res => {
          this.planetsData = res.data;
          this.isLoading = false;
        });
    },
    ShowOrHidePlanetsLayout() {
     this.showPlanets = !this.showPlanets; 
    },
  
    searchPlanetsByName(inputVal) {
      console.log(inputVal);
      if(inputVal.length > 1) {
        let sorted = this.planetsData.results.filter(planet => {
          return planet.name.includes(inputVal);
        });
        this.filteredByName = sorted;
      }
    }
  },

  watch: {
    showPlanets() {
      if (this.showPlanets) {
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