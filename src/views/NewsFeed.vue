<template>

    <v-card>
        <v-toolbar color="light-blue" dark>
            <v-toolbar-title>News feed</v-toolbar-title>
        </v-toolbar>
        <!-- news feed controls -->
        <div class="ml-3 mb-4 mt-4">
            <interval-select></interval-select>
            <interval-countdown></interval-countdown>
        </div>

        <v-divider></v-divider>
        <v-list three-line>
            <template v-for="(article, index) in articles">
                <v-list-tile
                        :key="index"
                        avatar
                        @click=""
                >
                    <v-list-tile-avatar>
                        <img v-if="article.urlToImage" :alt="article.title" :src="article.urlToImage">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title v-html="article.title"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="article.description"></v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
            </template>
        </v-list>
        <!--<v-divider inset></v-divider>-->

        <!--<v-subheader inset>Files</v-subheader>-->

        <!--&lt;!&ndash;<v-list-tile&ndash;&gt;-->
        <!--&lt;!&ndash;v-for="(article, index) in news"&ndash;&gt;-->
        <!--&lt;!&ndash;:key="index"&ndash;&gt;-->
        <!--&lt;!&ndash;avatar&ndash;&gt;-->
        <!--&lt;!&ndash;@click=""&ndash;&gt;-->
        <!--&lt;!&ndash;&gt;&ndash;&gt;-->
        <!--&lt;!&ndash;<v-list-tile-avatar>&ndash;&gt;-->
        <!--&lt;!&ndash;&lt;!&ndash;<v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>&ndash;&gt;&ndash;&gt;-->
        <!--&lt;!&ndash;</v-list-tile-avatar>&ndash;&gt;-->

        <!--&lt;!&ndash;<v-list-tile-content>&ndash;&gt;-->
        <!--&lt;!&ndash;<v-list-tile-title>{{ article.title }}</v-list-tile-title>&ndash;&gt;-->
        <!--&lt;!&ndash;&lt;!&ndash;<v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>&ndash;&gt;&ndash;&gt;-->
        <!--&lt;!&ndash;</v-list-tile-content>&ndash;&gt;-->

        <!--&lt;!&ndash;<v-list-tile-action>&ndash;&gt;-->
        <!--&lt;!&ndash;<v-btn icon ripple>&ndash;&gt;-->
        <!--&lt;!&ndash;<v-icon color="grey lighten-1">info</v-icon>&ndash;&gt;-->
        <!--&lt;!&ndash;</v-btn>&ndash;&gt;-->
        <!--&lt;!&ndash;</v-list-tile-action>&ndash;&gt;-->
        <!--&lt;!&ndash;</v-list-tile>&ndash;&gt;-->
        <!--</v-list>-->
        <div class="text-xs-center">
            <v-pagination
                    v-model="page"
                    :length="6"
            ></v-pagination>
        </div>
    </v-card>
</template>

<script>
// import { mapGetters, mapState } from 'vuex'
import IntervalSelect from '@/components/IntervalSelect.vue'
import IntervalCountdown from '@/components/IntervalCountdown.vue'

export default {
  components: { IntervalSelect, IntervalCountdown },
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
