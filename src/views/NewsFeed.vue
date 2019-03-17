<template>
    <v-card>
        <v-toolbar color="blue" dark>
            <v-toolbar-title>News feed</v-toolbar-title>
        </v-toolbar>
        <!-- news feed controls -->
        <div class="ml-3 mb-4 mt-4">
            <news-interval-select></news-interval-select>
            <news-interval-countdown></news-interval-countdown>
        </div>
        <v-divider></v-divider>
        <news-list v-if="articles.length > 0" :articles="articles"></news-list>
        <v-layout v-else align-center justify-center row fill-height class="mt-5 mb-5">
            <v-progress-circular
                    :size="70"
                    :width="7"
                    color="blue"
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
import NewsIntervalSelect from '@/components/NewsIntervalSelect.vue'
import NewsIntervalCountdown from '@/components/NewsIntervalCountdown.vue'
import NewsList from '@/components/NewsList.vue'

export default {
  components: { NewsIntervalSelect, NewsIntervalCountdown, NewsList },
  data: () => {
    return {
      newsPolling: null,
      page: 1
    }
  },
  computed: {

    interval () {
      return this.$store.state.newsFeed.interval
    },
    articles () {
      return this.$store.state.newsFeed.articles
    }
  },
  watch: {
    interval () {
      this.setupInterval()
    }
  },
  methods: {
    pollNews () {
      // dispatch the first fetching immediately
      this.$store.dispatch('newsFeed/fetch')
      // then fetch news based on a used-set interval
      this.setupInterval()
    },
    setupInterval () {
      // destroy the old interval
      clearInterval(this.newsPolling)
      // setup the new news fetching interval
      this.newsPolling = setInterval(() => {
        this.$store.dispatch('newsFeed/fetch')
      }, this.$store.state.newsFeed.interval)
    }
  },
  created () {
    this.pollNews()
  },
  beforeDestroy () {
    clearInterval(this.newsPolling)
  }
}
</script>
