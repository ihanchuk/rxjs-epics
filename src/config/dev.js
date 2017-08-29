const config = {
    backend: {
        endpoints:{
            form: {
                url: 'http://localhost:9000/products',
                params:  { 'Content-Type': 'application/json' }
            },
            products:{
                url:'http://localhost:9000/products'
            }
        }
    },
    ui:{
        dialogDelay: 2000
    }
}

export default config;