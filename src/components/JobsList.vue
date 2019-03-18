<template>
    <v-list three-line>
        <v-scroll-x-transition :group="true">
            <template v-for="(job, index) in jobsInPage">
                <v-list-tile
                        :key="index"
                        avatar
                        ripple
                        :to="'/jobs/' + job.id"
                >
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <span class="font-weight-bold">{{ job.title }}</span>
                            ({{job.company.name}} - {{job.country}})
                        </v-list-tile-title>
                        <v-list-tile-sub-title class="text--primary">{{ job.shortParagraph }}
                        </v-list-tile-sub-title>
                        <v-list-tile-sub-title>
                            <v-chip v-for="(tech, index) in job.technologies" :key="index" small outline
                                    color="primary">
                                {{tech.name}}
                            </v-chip>
                        </v-list-tile-sub-title>

                    </v-list-tile-content>

                    <v-list-tile-action>
                        <v-list-tile-action-text>
                            <v-layout column align-end>
                                <div>Date posted</div>
                                {{ job.datePosted | toLocale }}
                            </v-layout>
                        </v-list-tile-action-text>
                    </v-list-tile-action>
                </v-list-tile>
                <v-divider
                        v-if="index + 1 < jobs.length"
                        :key="job.datePosted"
                ></v-divider>
            </template>
        </v-scroll-x-transition>
    </v-list>
</template>
<script>
export default {
  props: {
    jobs: {
      default: null,
      type: Array,
      required: true
    },
    page: {
      default: 1,
      type: Number,
      required: true
    }
  },
  filters: {
    toLocale (date) {
      return new Date(date).toLocaleDateString()
    }
  },
  computed: {
    jobsInPage () {
      let currentPageMin = (this.page * 10) - 10
      let currentPageMax = (this.page * 10) - 1
      return this.jobs.filter((job, index) => index >= currentPageMin && index < currentPageMax)
    }
  }
}
</script>
