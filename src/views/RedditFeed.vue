<template>
    <v-card>
        <v-toolbar color="orange" dark>
            <v-toolbar-title>Reddit feed</v-toolbar-title>
        </v-toolbar>
        <!-- news feed controls -->
        <div class="ml-3 mb-4 mt-4">
            <reddit-interval-select></reddit-interval-select>
            <reddit-interval-countdown></reddit-interval-countdown>
        </div>
        <v-divider></v-divider>
        <reddit-list v-if="posts.length > 0" :page="page" :posts="posts"></reddit-list>
        <v-layout v-else align-center justify-center row fill-height class="mt-5 mb-5">
            <v-progress-circular
                    :size="70"
                    :width="7"
                    color="blue"
                    indeterminate
            ></v-progress-circular>
        </v-layout>
        <div class="text-xs-right pb-2">
            <v-pagination
                    color="orange"
                    v-model="page"
                    v-on:input="changePage"
                    :length="pageLength"
            ></v-pagination>
        </div>
    </v-card>
</template>

<script>
import RedditIntervalSelect from '@/components/RedditIntervalSelect.vue'
import RedditIntervalCountdown from '@/components/RedditIntervalCountdown.vue'
import RedditList from '@/components/RedditList.vue'

export default {
  components: { RedditIntervalSelect, RedditIntervalCountdown, RedditList },
  data: () => {
    return {
      redditPolling: null,
      page: 1
    }
  },
  computed: {
    interval () {
      return this.$store.state.redditFeed.interval
    },
    posts () {
      return this.$store.state.redditFeed.posts
    },
    pageLength () {
      return Math.ceil(this.$store.state.redditFeed.posts.length / 10)
    }
  },
  watch: {
    interval () {
      this.setupInterval()
    }
  },
  methods: {
    pollPosts () {
      // dispatch the first fetching immediately
      this.$store.dispatch('redditFeed/fetch')
      // then fetch reddit posts based on a used-set interval
      this.setupInterval()
    },
    setupInterval () {
      // destroy the old interval
      clearInterval(this.redditPolling)
      // setup the new news fetching interval
      this.redditPolling = setInterval(() => {
        this.$store.dispatch('redditFeed/fetch')
      }, this.$store.state.redditFeed.interval)
    },
    changePage (newPage) {
      this.page = newPage
    }
  },
  created () {
    this.pollPosts()
  },
  beforeDestroy () {
    clearInterval(this.redditPolling)
  }
}
</script>
