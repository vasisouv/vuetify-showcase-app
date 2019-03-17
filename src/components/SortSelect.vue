<template>
    <v-select
            v-on:change="changeSorting"
            :items="getSortingLabels()"
            box
            item-value="label"
            v-model="selectedSort"
            label="Sort by"
    ></v-select>
</template>
<script>
export default {
  data: () => ({
    sortingOptions: [
      {
        label: 'By date',
        field: 'datePosted'
      },
      {
        label: 'By company name',
        field: 'company.name'
      },
      {
        label: 'By job title',
        field: 'title'
      }
    ]
  }),
  methods: {
    getSortingLabels () {
      return this.sortingOptions.map(sort => sort.label)
    },
    changeSorting (newSort) {
      // get the new sorting option
      const newSortingOption = this.sortingOptions.find(sort => sort.label === newSort).field
      // dispatch an action to set a new sorting field in vuex state
      this.$store.dispatch('jobsFeed/setSortField', newSortingOption)
    }
  },
  computed: {
    selectedSort: {
      // getter
      get: function () {
        // if the user has changed the sort by option, use the selection
        if (this.selectedLabel) {
          return this.selectedLabel
        }
        // else get the value by searching based on vuex sort value
        return this.sortingOptions.find(
          sort => (
            sort.field === this.$store.state.jobsFeed.sortField
          )
        )
      },
      // setter
      set: function (newSort) {
        this.selectedLabel = newSort
      }
    }
  }
}

</script>
