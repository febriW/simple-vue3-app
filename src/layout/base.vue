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
                <v-list-item
                    v-for="(menu, i) in menu"
                    :key="i"
                    :value="menu"
                    active-color="primary"
                    :to="menu.link"
                >
                    <template v-slot:prepend>
                        <v-icon :icon="menu.icon"></v-icon>
                    </template>
                    <v-list-item-title v-text="menu.text"></v-list-item-title>
                </v-list-item>

                <v-list-item link @click="logout">
                    <template v-slot:prepend>
                        <v-icon icon="mdi-logout"></v-icon>
                    </template>
                    <v-list-item-title>Logout</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar flat title="Vue Application" color="grey-lighten-4">
            <template v-slot:prepend>
                <v-app-bar-nav-icon variant="text" @click.stop="drawer=!drawer" />
            </template>
        </v-app-bar>

        <v-main>
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
        drawer: false,
        menu: [
            {text: 'Home', link:'/', icon:'mdi-home'},
            {text: 'Table', link:'/table', icon:'mdi-table'},
            {text: 'Portofolio', link:'/portofolio', icon:'mdi-information-outline'},
        ]
    }),
    methods: {
        logout(){
            this.authStore.logout()
        }
    }
}
</script>