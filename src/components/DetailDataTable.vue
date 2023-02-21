<template>
    <v-container fluid>
        <v-row align="start" no-gutters>
            <v-col md="7" lg="8">
                <v-col cols="12" class="py-0"><h1>Tessting</h1></v-col>
                <v-col cols="12">
                    <v-card>
                        <v-list>
                            <v-list-item>
                                <v-list-item-content>First Name</v-list-item-content>
                                <v-list-item-content class="justify-end">{{ data.firstName }}</v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-col>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data: () => {
        return {
            data: []
        }
    },
    beforeRouteEnter(to, from, next) {
        fetch('../../db.json')
        .then((res) => { return res.json()})
        .then((json) => {
            const check = json.account.find(f => f.id == to.params.id)
            next(vm => {
                vm.data = check
            })
        })
        .catch((err)=> {
            console.log(err)
        })
    }
}
</script>