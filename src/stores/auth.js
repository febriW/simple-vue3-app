import { defineStore } from "pinia"
import router from '../router'

export const useAuthStore = defineStore("auth",{
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
        message: '',
        errors: false
    }),
    actions: {
        async login(email, password) {
            const user = await fetch('../../db.json')
            .then((res) => { return res.json()})
            .then((json) => {
                const check = json.account.find(f => f.password === password && f.email === email)
                if(check){
                    localStorage.setItem('user', JSON.stringify(check))
                    this.errors = false
                }
                else{
                    localStorage.removeItem('user')
                    this.message = 'Akun tidak dapat ditemukan'
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
        error(){
            return this.errors
        },
        messages(){
            return this.message
        }
    }
})
