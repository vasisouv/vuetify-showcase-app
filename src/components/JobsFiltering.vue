<template>
    <div>
        <jobs-filtering-radio></jobs-filtering-radio>
        <jobs-filtering-select v-if="filterBy" :filter-by="filterBy"></jobs-filtering-select>
    </div>
</template>
<script>
import JobsFilteringRadio from '@/components/JobsFilteringRadio'
import JobsFilteringSelect from '@/components/JobsFilteringSelect'

export default {
  components: { JobsFilteringRadio, JobsFilteringSelect },
  data: () => ({
    filterBy: null
  }),
  created () {
    this.$bus.$on('new-filter-by', filterBy => {
      this.filterBy = filterBy
    })
  }
}
</script>
