<template>
    <div>
        <filter-radio></filter-radio>
        <filter-select></filter-select>
    </div>
</template>
<script>
import FilterSelect from '@/components/FilterSelect'
import FilterRadio from '@/components/FilterRadio'

export default {
  components: { FilterSelect, FilterRadio }
}
</script>
