<template>
    <div>
        <span>Sorting order</span>
        <v-radio-group class="mt-1" row v-model="selectedOrdering">

            <v-radio
                    v-on:change="changeOrdering"
                    color="green"
                    v-for="(order, index) in sortOrders"
                    :key="index"
                    :label="order.label"
                    :value="order"
            ></v-radio>
        </v-radio-group>
    </div>

</template>
<script>
export default {
  data: () => ({
    sortOrders: [
      {
        label: 'Ascending',
        abbr: 'asc'
      },
      {
        label: 'Descending',
        abbr: 'desc'
      }
    ]
  }),
  methods: {
    changeOrdering (newOrdering) {
      // get the new ordering radio selection
      const newOrderingOption = this.sortOrders.find(order => order.label === newOrdering.label).abbr
      // dispatch an action to set a new ordering method in vuex state
      this.$store.dispatch('jobsFeed/setSortOrder', newOrderingOption)
    }
  },
  computed: {
    selectedOrdering: {
      // getter
      get: function () {
        return this.sortOrders.find(
          method => (
            method.abbr === this.$store.state.jobsFeed.sortOrder
          )
        )
      },
      // setter
      set: () => ({})
    }
  }
}
</script>
