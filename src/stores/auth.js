import { defineStore } from "pinia"
import router from '../router'

export const useAuthStore = defineStore("auth",{
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
        message: ''
    }),
    actions: {
        async login(email, password) {
            const user = await fetch('../../db.json')
            .then((res) => { return res.json()})
            .then((json) => {
                const check = json.account.find(f => f.password === password && f.email === email)
                if(check)
                    localStorage.setItem('user', JSON.stringify(check))
                    router.push('/')
            })
            .catch((err)=> {
                console.error(err)
                localStorage.removeItem('user')
            })
        },

        logout(){
            localStorage.removeItem('user')
            router.push('/login')
        }
    }
})
