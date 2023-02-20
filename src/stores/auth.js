import { defineStore } from "pinia"
import router from '../router'

export const useAuthStore = defineStore("auth",{
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
        message: '',
        errors: false
    }),
    getters: {
        error(){
            return this.errors
        }
    },
    actions: {
        async login(email, password) {
            const user = await fetch('../../db.json')
            .then((res) => { return res.json()})
            .then((json) => {
                const check = json.account.find(f => f.password === password && f.email === email)
                if(check){
                    localStorage.setItem('user', JSON.stringify(check))
                    this.errors = false
                    this.message = 'Akun Ditemukan'
                }
                else{
                    localStorage.removeItem('user')
                    this.message = 'Akun Tidak Ditemukan'
                    this.errors = true
                }
                        
            })
            .catch((err)=> {
                localStorage.removeItem('user')
            })
        },
        logout(){
            localStorage.removeItem('user')
            router.push('/login')
        },
        checking(){
            return this.error
        }
    }
})
