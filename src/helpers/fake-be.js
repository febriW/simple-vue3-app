export { fakebe }

function fakebe() {
    const account = [
        {
            id: 1,
            email: 'testing@gmail.com',
            password: 'testing',
            name: 'Test User'
        }
    ]
    const realFetch = window.fetch;
    window.fetch = (url, opts) => {
        return new Promise((resolve, reject) => {
            setTimeout(handleRoute, 500)
            function handleRoute(){
                switch(true) {
                    case url.endsWith('/users/auth') && opts.method === 'POST' :
                        return authenticate()
                    case url.endsWith('/users') && opts.method === 'GET' :
                        return getUsers()
                    default:
                        return realFetch(url, opts)
                            .then(res => resolve(res))
                            .catch(err => reject(err))
                }
            }

            function authenticate(){
                const { email, password } = body();
                const user = account.find()
            }
        })
    }
}