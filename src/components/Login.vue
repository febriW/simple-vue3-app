<template>
    <v-container>
        <v-row align="center" justify="center" style="height:100vh">
            <v-col cols="12" sm="6" md="5" lg="4">
                <v-card>
                    <v-row justify="center" align="center">
                        <v-col cols="6" class="py-8">
                            <v-img :src="image" aspect-ratio="2" p-5/>
                        </v-col>
                    </v-row>
                    <v-form @submit.prevent v-model="isValid">
                        <v-card-text>
                            <v-text-field :rules="emailRules" variant="outlined" type="email" v-model="email" label="Email"></v-text-field>
                            <v-text-field :rules="passwordRules" variant="outlined" v-model="password" label="Password"  :type="show ? 'text' : 'password'"  :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'" @click:appendInner="show = !show"></v-text-field>
                            <v-checkbox v-model="rememberme" label="Remember me"></v-checkbox>
                        </v-card-text>
                        <v-card-actions class="px-4">
                            <v-spacer></v-spacer>
                            <v-btn depressed dark color="blue" class="px-5" @click="login" :disabled="!isValid" :loading="loading">Masuk</v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import image from '../assets/user.png'
import { useAuthStore } from '../stores/auth'
import { mapStores } from 'pinia'

export default {
    computed: {
        ...mapStores(useAuthStore)
    },
    data(){
        return {
            show: false,
            email: '',
            password: '',
            loading: false,
            rememberme: false,
            image: image,
            isValid: true,
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid',
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length >= '6') || 'Password length must be at least 6 character',
            ],
        }
    },
    methods: {
        login(){
            this.loading = true
            this.authStore.login(this.email,this.password)
            .then(()=> {
               if(this.authStore.checking() === true) setTimeout(() => this.loading = false,1000)
               else setTimeout(()=> this.$router.push('/'),1000)
            })
            .catch(() => this.loading = false)
        }
    }
}
</script>