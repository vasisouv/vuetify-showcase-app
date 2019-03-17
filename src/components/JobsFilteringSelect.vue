<template>
    <v-select
            clearable
            v-on:change="changeFilterValue"
            :items="getFilteringLabels()"
            box
            item-value="label"
            v-model="selectedFilter"
            label="Select"
    ></v-select>
</template>
<script>
export default {
  data: () => ({
    filteringOptions: [
      {
        field: 'company.name',
        values: ['Some-Company Ltd', 'The Best Insurance Company',
          'We Are The Worst Company LLC', 'Another Marketing Company LLP']
      },
      {
        field: 'title',
        values: ['Software Developer', 'Software Engineer', 'Programmer',
          'Front-end developer', 'Back-end developer', 'Software Engineer']
      },
      {
        field: 'datePosted',
        values: ['Today', 'Yesterday']
      }
    ]
  }
  ),
  props: {
    filterBy: {
      required: true,
      default: 'company.name',
      type: String
    }
  },
  methods: {
    changeFilterValue (newValue) {
      this.$store.dispatch('jobsFeed/setFilterValue', newValue)
    },
    getFilteringLabels () {
      return this.filteringOptions.find(filter => filter.field === this.$store.state.jobsFeed.filterField).values
    }
  },
  computed: {
    selectedFilter: {
      // getter
      get: function () {
        if (this.filter) {
          return this.filter
        }
        let relevantValues =
            this.filteringOptions.find(
              filter => (
                filter.field === this.$store.state.jobsFeed.filterField
              )
            )
        let value = relevantValues.values.find(value => value === this.$store.state.jobsFeed.filterValue)
        if (value) {
          return value
        } else return null
      },
      // setter
      set: function (newFilter) {
        this.filter = newFilter
      }
    }
  }
}
</script>
