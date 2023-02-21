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
                    :items-per-page="5"
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
    defaults: {
        VDataTable: {
            noDataText: 'Data tidak dapat ditemukan'
        }
    },
    data: () => ({
        search: '',
        data: [],
        headers: [
            { title: 'First Name', key: 'firstName'},
            { title: 'Last Name', key: 'lastName'},
            { title: 'Maiden Name', key: 'maidenName'},
            { title: 'Email', key: 'email'}
        ]
    }),
    methods: {
        goTo(item,row,){
            console.log(row.item.props.title.id)
            this.$router.push({name:'tabledetail', params: { id: row.item.props.title.id}})
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