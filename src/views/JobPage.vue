<template>
    <div>
        <v-breadcrumbs :items="breadcrumbs" divider="/"></v-breadcrumbs>
        <v-card v-if="job">

            <v-card-title primary-title>
                <div>
                    <v-btn to="/jobs" color="primary" flat small>
                        <v-icon> arrow_back</v-icon>
                        <span class="ml-1">back to all jobs</span>
                    </v-btn>
                    <h4 class="display-1 mt-3 mb-0">{{job.title}}</h4>
                    <div class="mt-2 font-weight-light">Posted {{job.datePosted | toLocale}}</div>
                    <h5 class="mt-2 headline">{{job.company.name}}</h5>
                    <h6 class="mt-2 title">Located @ {{job.country}}</h6>
                    <p class="mt-2 body-1">{{job.shortParagraph}}</p>
                    <v-divider></v-divider>
                    <h6 class="mt-3 mb-3 title">Technologies required</h6>
                    <v-chip outline :key="index" v-for="(tech, index) in job.technologies" color="green">{{tech.name}}
                    </v-chip>
                </div>
            </v-card-title>
            <v-card-actions>
                <v-btn
                        :loading="loading"
                        :disabled="loading"
                        color="green"
                        class="white--text"
                        @click="loader = 'loading'"
                >
                    Apply for this job
                </v-btn>
                <p class="ml-3" v-if="submitted">
                    Thanks for applying!
                </p>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
export default {
  data: () => ({
    jobId: null,
    job: null,
    loader: null,
    loading: false,
    submitted: false
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
  },
  filters: {
    toLocale (date) {
      return new Date(date).toLocaleDateString()
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => {
        this[l] = false
        this.submitted = true
      }, 2000)

      this.loader = null
    }
  }
}
</script>
