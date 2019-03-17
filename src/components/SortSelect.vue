<template>
    <v-select
            :items="sortingOptions"
            box
            label="Sort by"
    ></v-select>
</template>
<script>
export default {
  data: () => ({
    sortingOptions: ['By date', 'By company name']
  })
}

</script>
