<template>
    <v-select
            v-on:change="changeFilterValue"
            :items="getFilteringLabelsByFilter()"
            box
            item-value="label"
            v-model="selectedFilter"
            label="Select"
    ></v-select>
</template>
<script>
export default {
  data: () => ({
    selectedFilter: null
  }),
  props: {
    filterBy: {
      required: true,
      default: 'company.name',
      type: String
    }
  },
  methods: {
    changeFilterValue () {
      this.$store.dispatch('jobsFeed/setFilterValue', this.selectedFilter)
    },
    getFilteringLabelsByFilter () {
      const filteringLabels = {
        'company.name': ['Some-Company Ltd', 'The Best Insurance Company',
          'We Are The Worst Company LLC', 'Another Marketing Company LLP'],
        'title': ['Software Developer', 'Software Engineer', 'Programmer',
          'Front-end developer', 'Back-end developer', 'Software Engineer'],
        'datePosted': ['Today', 'Yesterday']
      }
      // let currentFilterBy = String()
      return filteringLabels[this.filterBy]
    }
  }
}
</script>
