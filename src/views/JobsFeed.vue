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
        <v-divider></v-divider>
        <jobs-list v-if="jobs.length > 0" :jobs="jobs"></jobs-list>
        <v-layout v-else align-center justify-center row fill-height class="mt-5 mb-5">
            <v-progress-circular
                    :size="70"
                    :width="7"
                    color="green"
                    indeterminate
            ></v-progress-circular>
        </v-layout>
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
