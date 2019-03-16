<template>

    <v-card>
        <v-toolbar color="light-blue" dark>
            <v-toolbar-title>News feed</v-toolbar-title>
        </v-toolbar>
        <interval-select></interval-select>
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
import IntervalSelect from '@/components/newsfeed/IntervalSelect.vue'

export default {
  components: { IntervalSelect },
  data: () => {
    return {
      newsPolling: null,
      page: 1
      // items: [
      //   { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
      //   { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
      //   { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' }
      // ],
      // items2: [
      //   { icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
      //   { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' }
      // ]
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
  methods: {
    pollNews () {
      // dispatch the first fetching immediately
      this.$store.dispatch('newsFeed/fetch')
      // then fetch news based on a used-set interval
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
