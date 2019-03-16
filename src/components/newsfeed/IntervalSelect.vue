<template>
    <v-container>
        <v-flex xs6 sm4 d-flex>
            <v-select
                    :items="getIntervalsLabels()"
                    v-model="selectedInterval.label"
                    label="News fetching interval"
                    outline
            ></v-select>
        </v-flex>
    </v-container>
</template>
<script>
export default {
  data: () => ({
    intervals: [
      {
        label: 'Every 10 sec',
        millisec: 10000
      },
      {
        label: 'Every 20 sec',
        millisec: 20000
      },
      {
        label: 'Every 1 minute',
        millisec: 60000
      },
      {
        label: 'Every 5 minutes',
        millisec: 300000
      }
    ]
  }),
  methods: {
    getIntervalsLabels () {
      return this.intervals.map(interval => interval.label)
    }
  },
  computed: {
    selectedInterval () {
      // Set initial interval to 20 sec
      const newsFeedInterval = this.$store.state.newsFeed.interval
      return this.intervals.find(interval => interval.millisec === newsFeedInterval)
    }
  },
  watch: {
    selectedInterval (value) {
      console.log(value)
    }
  }
}
</script>
