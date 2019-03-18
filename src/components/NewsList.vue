<template>
    <v-list three-line>
        <v-scroll-x-transition :group="true">
            <template v-if="noNew">
                <v-list-tile key="no_new_posts">
                    <v-list-tile-content>
                        <v-list-tile-title><p class="text-center"> No new article headlines found </p>
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </template>
            <template v-for="(article, index) in articlesInPage">
                <v-list-tile
                        :key="index"
                        avatar
                        :href="article.url"
                        target="_blank"
                >
                    <v-list-tile-avatar :key="article.urlToImage">
                        <img v-if="article.urlToImage" :src="article.urlToImage">
                    </v-list-tile-avatar>

                    <v-list-tile-content :key="article.title">
                        <v-list-tile-title v-html="article.title"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="article.description"></v-list-tile-sub-title>
                    </v-list-tile-content>

                </v-list-tile>
            </template>
        </v-scroll-x-transition>
    </v-list>
</template>
<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true,
      default: () => {
        return []
      }
    },
    page: {
      type: Number,
      required: true,
      default: () => {
        return 1
      }
    }
  },
  computed: {
    articlesInPage () {
      let currentPageMin = (this.page * 6) - 6
      let currentPageMax = (this.page * 6) - 1
      return this.articles.filter((article, index) => index >= currentPageMin && index < currentPageMax)
    },
    noNew () {
      return this.$store.state.newsFeed.noNew
    }
  }
}
</script>
