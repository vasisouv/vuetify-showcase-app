<template>
    <div>
        <span> Filter by </span>
        <v-radio-group class="mt-1" row v-model="selectedFiltering">
            <v-radio
                    v-on:change="changeFiltering"
                    color="green"
                    v-for="(filter, index) in filteringOptions"
                    :key="index"
                    :label="filter.label"
                    :value="filter"
            ></v-radio>
        </v-radio-group>
    </div>
</template>
<script>
export default {
  data: () => ({
    filteringOptions: [
      {
        label: 'Company name',
        abbr: 'company.name'
      },
      {
        label: 'Job Title',
        abbr: 'title'
      }
    ]
  }),
  methods: {
    changeFiltering (newFiltering) {
      // get the new radio filtering selection
      const newFilteringSelected = this.filteringOptions.find(order => order.label === newFiltering.label).abbr
      this.$store.dispatch('jobsFeed/setFilterField', newFilteringSelected)
      this.$bus.$emit('new-filter-by', newFilteringSelected)
    }
  },
  computed: {
    selectedFiltering: {
      // getter
      get: function () {
        return this.filteringOptions.find(
          filter => (
            filter.abbr === this.$store.state.jobsFeed.filterField
          )
        )
      },
      // setter
      set: function () {
      }
    }
  },
  mounted () {
    this.$bus.$emit('new-filter-by', this.selectedFiltering.abbr)
  }
}
</script>
