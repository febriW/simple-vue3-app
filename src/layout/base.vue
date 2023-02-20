<template>
    <header></header>
    <v-layout>

        <v-navigation-drawer
            v-model="drawer"    
        >
            <v-list-item class="py-3">
                <v-list-item-content>
                    <v-list-item-title class="title">Simple Vue Application</v-list-item-title>
                    <v-list-item-subtitle>Made By Febri</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>

            <v-list>
                <v-list-item link @click="logout">
                    <v-icon>mdi-logout</v-icon>
                    <v-list-item-content>
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar flat title="Vue Application" color="grey-lighten-4">
            <template v-slot:prepend>
                <v-app-bar-nav-icon variant="text" @click.stop="drawer=!drawer" />
            </template>
        </v-app-bar>

        <v-main style="min-height: 100vh;">
            <RouterView />
        </v-main>
    </v-layout>
</template>
<script>
import image from '../assets/user.png'
import { useAuthStore } from '../stores/auth'
import { mapStores } from 'pinia'

export default {
    computed: {
        ...mapStores(useAuthStore)
    },
    data: ()=>({
        drawer: false
    }),
    methods: {
        logout(){
            this.authStore.logout()
        }
    }
}
</script>