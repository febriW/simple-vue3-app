<template>
    <v-container fluid>
        <v-row align="start" justify="end">
            <v-col cols="12" sm="5" md="4" lg="3">
                <v-text-field
                v-model="search"
                    append-inner-icon="mdi-magnify"
                    label="Cari Data"
                    hide-details
                    variant="outlined"
                />
            </v-col>
        </v-row>

        <v-row align="start">
            <v-col cols="12">
                <v-data-table 
                    :headers="headers"
                    :items="data"
                    class="elevation-1"
                    :search="search"
                    @click:row="goTo"
                >
                    <template v-slot:top>
                        <v-toolbar flat color="white">
                        <v-toolbar-title class="headline">Data Asset</v-toolbar-title>
                    </v-toolbar>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import  { VDataTable }  from 'vuetify/labs/VDataTable'
export default {
    components: {
        VDataTable
    },
    data: () => ({
        search: '',
        data: [],
        headers: [
            { text: 'First Name', value: 'firstName'},
            { text: 'Last Name', value: 'lastName'},
            { text: 'Maiden Name', value: 'maidenName'},
        ]
    }),
    methods: {
        goTo(e){
            console.log(e.firstName)
        }
    },
    beforeRouteEnter(to, from, next) {
        const data = fetch('../../db.json')
            .then((res) => { return res.json()})
            .then((json) => {
                next(vm => {
                    vm.data = json.account
                })
            })
            .catch((err)=> {
            })
    }
}
</script>