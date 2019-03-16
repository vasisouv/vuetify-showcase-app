<template>
    <v-chip>

        <v-avatar @click="fetchNewsNow" class="blue">
            <v-btn flat icon color="white">
                <v-icon>refresh</v-icon>
            </v-btn>
        </v-avatar>
        Fetching more posts in {{ timeRemainingToFetch }}
    </v-chip>
</template>
<script>
export default {
  methods: {
    fetchNewsNow () {
      console.log('fetching news..')
    }
  },
  computed: {
    timeRemainingToFetch () {
      return ''
    }
  }
}
</script>
