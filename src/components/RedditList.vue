<template>
    <v-list>
        <v-scroll-x-transition :group="true">
            <template v-if="noNew">
                <v-list-tile key="no_new_posts">
                    <v-list-tile-content>
                        <v-list-tile-title><p class="text-center"> No new posts found </p>
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </template>
            <template v-for="(post, index) in postsInPage">
                <v-list-tile
                        :key="index"
                        avatar
                        :href="'https://reddit.com' + post.data.permalink"
                        target="_blank"
                >
                    <v-list-tile-avatar :key="post.data.thumbnail">
                        <img v-if="post.data.thumbnail" :src="post.data.thumbnail">
                    </v-list-tile-avatar>

                    <v-list-tile-content :key="post.data.title">
                        <v-list-tile-title v-html="post.data.title"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="post.data.author"></v-list-tile-sub-title>
                    </v-list-tile-content>

                </v-list-tile>
            </template>
        </v-scroll-x-transition>
    </v-list>
</template>
<script>
export default {
  props: {
    posts: {
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
    postsInPage () {
      let currentPageMin = (this.page * 10) - 10
      let currentPageMax = (this.page * 10) - 1
      return this.posts.filter((post, index) => index >= currentPageMin && index < currentPageMax)
    },
    noNew () {
      return this.$store.state.redditFeed.noNew
    }
  }
}
</script>
