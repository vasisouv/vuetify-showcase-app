<template>
    <v-list three-line>
        <v-scroll-x-transition :group="true">
            <template v-for="(article, index) in articles">
                <v-list-tile
                        :key="index"
                        avatar
                        @click=""
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
    }
  }
}
</script>
