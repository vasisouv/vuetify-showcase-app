<template>
    <div>
        <v-breadcrumbs :items="breadcrumbs" divider="/"></v-breadcrumbs>
        <v-card v-if="job">
            <v-card-title primary-title>
                <div>
                    <h5 class="headline mb-0">{{job.title}}</h5>
                    <div class="mt-2">{{job.shortParagraph}}</div>
                </div>
            </v-card-title>

            <v-card-actions>
                <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
        </v-card>

    </div>

</template>
<script>
export default {
  data: () => ({
    jobId: null,
    job: null
  }),
  created () {
    this.jobId = this.$route.params.jobId
  },
  computed: {
    breadcrumbs () {
      return [
        {
          text: 'Jobs',
          disabled: false,
          href: '/jobs/'
        },
        {
          text: this.jobId,
          disabled: true
        }
      ]
    }
  },
  mounted () {
    this.$store.dispatch('jobsFeed/fetchJob', this.jobId)
      .then(job => {
        this.job = job.data[0]
      })
      .catch(error => {
        console.error(error)
      })
  }
}
</script>
