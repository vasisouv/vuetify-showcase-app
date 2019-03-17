<template>
    <v-form @submit.prevent v-model="formValid">
        <v-text-field
                v-model="filteringText"
                box
                clearable
                label="Text filter"
                type="text"
        >
            <template slot="append-outer">
                <v-btn type="submit" @click="filter" class="search-btn" fab dark small color="primary">
                    <v-icon dark>search</v-icon>
                </v-btn>
            </template>
        </v-text-field>
    </v-form>
</template>
<script>
export default {
  data: () => ({
    formValid: true,
    changedText: null
  }),
  computed: {
    filteringText: {
      get: function () {
        return this.$store.state.jobsFeed.filterText
      },
      set: function (newText) {
        this.changedText = newText
      }
    }
  },
  methods: {
    filter () {
      if (this.changedText) {
        this.$store.dispatch('jobsFeed/setFilterText', this.changedText)
      } else this.$store.dispatch('jobsFeed/setFilterText', this.filteringText)
    }
  }

}
</script>
<style scoped>
    .search-btn {
        margin-top: -10px;
    }
</style>
