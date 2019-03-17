<template>
    <v-card>
        <v-toolbar color="green" dark>
            <v-toolbar-title>Jobs feed</v-toolbar-title>
        </v-toolbar>
        <!-- jobs feed controls -->
        <v-layout class="ml-3 mb-4 mt-4">
            <v-flex xs12 sm6 md6 d-flex auto mr-2 ml-2>
                <jobs-sorting></jobs-sorting>
            </v-flex>
            <v-flex xs12 sm6 md6 d-flex mr-2 ml-2>
                <jobs-filtering></jobs-filtering>
            </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <jobs-list v-if="jobs" :jobs="jobs"></jobs-list>
        <div class="text-xs-center">
            <v-pagination
                    v-model="page"
                    :length="6"
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
  data: () => {
    return {
      page: 1
    }
  },
  created () {
    this.$store.dispatch('jobsFeed/fetch')
  },
  computed: {
    jobs () {
      return this.$store.state.jobsFeed.allJobs
    }
  }
}
</script>
