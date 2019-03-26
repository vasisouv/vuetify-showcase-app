<template>
  <v-card>
    <v-toolbar color="green" dark>
      <v-toolbar-title>Jobs feed</v-toolbar-title>
    </v-toolbar>
    <!-- jobs feed controls -->
    <v-layout class="ml-3 mb-4 mt-4">
      <v-flex xs12 sm6 md6 d-flex auto mr-4 ml-2>
        <jobs-sorting></jobs-sorting>
      </v-flex>
      <v-flex xs12 sm6 md6 d-flex auto mr-4 ml-2>
        <jobs-filtering></jobs-filtering>
      </v-flex>

    </v-layout>
    <div class="text-xs-right pb-2">
      <v-pagination
        color="green"
        v-model="page"
        v-on:input="changePage"
        :length="pageLength"
      ></v-pagination>
    </div>
    <v-divider></v-divider>
    <jobs-list v-if="jobs.length > 0" :page="page" :jobs="jobs"></jobs-list>
    <v-layout v-else align-center justify-center row fill-height class="mt-5 mb-5">
      <v-progress-circular
        :size="70"
        :width="7"
        color="green"
        indeterminate
      ></v-progress-circular>
    </v-layout>
    <div class="text-xs-right pb-2">
      <v-pagination
        color="green"
        v-model="page"
        v-on:input="changePage"
        :length="pageLength"
      ></v-pagination>
    </div>
  </v-card>
</template>

<script>
import JobsFiltering from '@/components/JobsFiltering.vue'
import JobsSorting from '@/components/JobsSorting.vue'
import JobsList from '@/components/JobsList'

export default {
  components: { JobsList, JobsFiltering, JobsSorting },
  mounted () {
    this.$store.dispatch('jobsFeed/fetch')
  },
  methods: {
    changePage (newPage) {
      this.$store.dispatch('jobsFeed/setPage', newPage)
    }
  },
  computed: {
    page: {
      get: function () {
        return this.$store.state.jobsFeed.page
      },
      set: function (newPage) {
      }
    },
    pageLength () {
      return Math.ceil(this.$store.state.jobsFeed.allJobs.length / 10)
    },

    jobs: {
      get () {
        if (this.newJobs) {
          return this.newJobs
        } else {
          return this.$store.state.jobsFeed.allJobs
        }
      },
      set (newJobs) {
        this.newJobs = newJobs
      }
    }
  }
}
</script>
