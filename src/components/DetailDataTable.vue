<template>
    <v-container fluid>
        <v-row align="start" no-gutters>
            <v-btn
                size="small"
                color="primary"
                dark
                link to="/table"
                class="hidden-md-and-down my-4 mx-4"
                >
                <v-icon aria-hidden="false" small class="mr-2">mdi-arrow-left</v-icon>Kembali
            </v-btn>
            <v-col cols="12">
                <v-col cols="12" class="py-0"><h1>Detail Data</h1></v-col>
                <v-col cols="12">
                    <v-card>
                        <v-card-text>
                            <v-row>
                                <v-col 
                                    cols="4"
                                    v-for="(value,key) in data"
                                >
                                    {{ key }} : {{ value }}
                                </v-col>
                            </v-row>
                        </v-card-text>
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