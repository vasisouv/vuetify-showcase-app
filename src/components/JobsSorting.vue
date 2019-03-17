<template>
    <div>
        <sort-radio></sort-radio>
        <sort-select></sort-select>
    </div>
</template>
<script>
import SortSelect from '@/components/SortSelect.vue'
import SortRadio from '@/components/SortRadio'

export default {
  components: { SortRadio, SortSelect }
}
</script>
