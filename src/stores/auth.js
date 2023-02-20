import { defineStore } from "pinia"

export const useAuthStore = defineStore("auth",{
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
        message: ''
    }),
    actions: {
        async login(email, password) {
            const user = await fetch('@/helpers.db.json')
            .then(res => {
                const user = res.firstname
                const check = res.find(f => f.password === password && f.email === email)
                    if(check)
                        localStorage.setItem('user', JSON.stringify(user))
                        router.push('/')
                }
            )
            .catch((err)=> {
                console.error(err)
                localStorage.removeItem('user')
                reject(err)
            })
        }
    }
})
