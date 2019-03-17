<template>
    <v-card>
        <v-toolbar color="green" dark>
            <v-toolbar-title>Jobs feed</v-toolbar-title>
        </v-toolbar>
        <!-- news feed controls -->
        <div class="ml-3 mb-4 mt-4">
            <v-flex xs12 sm6 d-flex>
                <sort-select></sort-select>
                <filter-select></filter-select>
            </v-flex>
        </div>
        <v-divider></v-divider>
        <jobs-list :jobs="jobs"></jobs-list>
        <div class="text-xs-center">
            <v-pagination
                    v-model="page"
                    :length="6"
            ></v-pagination>
        </div>
    </v-card>
</template>

<script>
// import { mapGetters, mapState } from 'vuex'
import FilterSelect from '@/components/FilterSelect.vue'
import SortSelect from '@/components/SortSelect.vue'
import JobsList from '@/components/JobsList'

export default {
  components: { JobsList, FilterSelect, SortSelect },
  data: () => {
    return {
      jobs: null,
      page: 1
    }
  },
  created () {
    this.$store.dispatch('jobsFeed/fetch').then(jobs => {
      this.jobs = jobs.data
    })
  },
  computed: {
    sortBy () {
      return this.$store.state.jobs.sortBy
    },
    filterBy () {
      return this.$store.state.jobs.filterBy
    },
    filter () {
      return this.$store.state.jobs.filter
    }
  }
}
</script>
