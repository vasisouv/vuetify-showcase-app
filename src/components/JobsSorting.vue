<template>
    <div>
        <jobs-sorting-radio></jobs-sorting-radio>
        <jobs-sorting-select></jobs-sorting-select>
    </div>
</template>
<script>
import JobsSortingRadio from '@/components/JobsSortingRadio'
import JobsSortingSelect from '@/components/JobsSortingSelect.vue'

export default {
  components: { JobsSortingRadio, JobsSortingSelect }
}
</script>
