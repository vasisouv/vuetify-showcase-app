<template>
    <v-chip>

        <v-avatar @click="fetchNewNow" class="orange">
            <v-btn flat icon color="white">
                <v-icon>cloud_download</v-icon>
            </v-btn>
        </v-avatar>
        Fetching more posts in {{ time }} seconds
    </v-chip>
</template>
<script>
export default {
  data: () => ({
    now: Math.trunc((new Date()).getTime() / 1000),
    timeRemainingInterval: null,
    time: null
  }),
  methods: {
    fetchNewNow () {
      this.$store.dispatch('redditFeed/fetch')
    },
    setupInterval () {
      clearInterval(this.timeRemainingInterval)
      this.time = this.stateInterval / 1000
      this.timeRemainingInterval = setInterval(() => {
        this.time = this.time - 1
        if (this.time === 0) {
          this.setupInterval()
        }
      }, 1000)
    }
  },
  computed: {
    stateInterval () {
      return this.$store.state.redditFeed.interval
    }
  },
  watch: {
    stateInterval () {
      this.setupInterval()
    }
  },
  created () {
    this.setupInterval()
  },
  beforeDestroy () {
    clearInterval(this.timeRemainingInterval)
  }
}
</script>
