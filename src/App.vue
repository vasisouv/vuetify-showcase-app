<template>
    <v-app>
        <v-content>
            <v-container fluid>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md8>
                        <v-toolbar>
                            <v-toolbar-title>PolicyFly Challenge</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-toolbar-items class="hidden-sm-and-down">
                                <v-btn to="/news?page=1" flat>News</v-btn>
                                <v-btn to="/jobs?page=1" flat>Jobs</v-btn>
                            </v-toolbar-items>
                        </v-toolbar>
                        <router-view></router-view>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>

export default {
  name: 'App'
}
</script>
