<template>
    <v-app>
        <v-content>
            <v-container fluid>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <breadcrumbs/>
                        <router-view></router-view>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import Breadcrumbs from '@/layout/Breadcrumbs'

export default {
  name: 'App',
  components: {
    Breadcrumbs
  },
  data () {
    return {
      //
    }
  }
}
</script>
