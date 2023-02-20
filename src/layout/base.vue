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
                <v-list-item title="Navigation drawer" />
            </v-list>
        </v-navigation-drawer>

        <v-app-bar flat title="Vue Application" color="grey-lighten-4">
            <template v-slot:prepend>
                <v-app-bar-nav-icon variant="text" @click.stop="drawer=!drawer" />
            </template>
        </v-app-bar>

        <v-main scrollable="true">
            <RouterView />
        </v-main>
    </v-layout>
</template>
<script>
export default {
    data: ()=>({
        drawer: false
    })
}
</script>