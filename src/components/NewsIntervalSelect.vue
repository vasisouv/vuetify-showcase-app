<template>
    <v-flex xs6 sm4 d-flex>
        <!--{{selectedInterval}}-->
        <v-select
                v-on:change="changeInterval"
                :items="getIntervalsLabels()"
                item-value="label"
                v-model="selectedInterval"
                label="News fetching interval"
                box
        ></v-select>
    </v-flex>
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
    },
    changeInterval (newIntervalLabel) {
      // get the interval in millisec from the available intervals, based on the label from v-select
      const newIntervalMillisec = this.intervals.find(interval => interval.label === newIntervalLabel).millisec
      // dispatch an action to set a new interval in vuex state
      this.$store.dispatch('newsFeed/setInterval', newIntervalMillisec)
    }
  },
  computed: {
    // selectedInterval () {
    //   return
    // }
    selectedInterval: {
      // getter
      get: function () {
        return this.intervals.find(interval => interval.millisec === this.$store.state.newsFeed.interval)
      },
      // setter
      set: function (newVal) {
        this.interval = newVal
      }
    }
  }
}
</script>
