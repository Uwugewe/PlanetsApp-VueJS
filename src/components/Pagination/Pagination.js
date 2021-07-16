export default {
  props: ['LinksArr'],

  data() {
    return{
      activePageNumber: 0,
      countPages: this.LinksArr.length
    }
  },

  computed: {
    
  },
  
  methods: {
    getDataByLink(link, i) {
      this.activePageNumber = i;
      this.$emit('getDataByLink', link)
    },
    setPageByButton(prevOrNext) {
      if (prevOrNext === 'prev' && this.activePageNumber > 0) {
        this.getDataByLink(this.LinksArr[this.activePageNumber - 1], this.activePageNumber - 1)
      } else if (prevOrNext === 'next' && this.activePageNumber !== this.LinksArr.length - 1) {
        this.getDataByLink(this.LinksArr[this.activePageNumber + 1], this.activePageNumber + 1)
      }
    }
  },

  mounted() {
    console.log(this.LinksArr);
  }
}