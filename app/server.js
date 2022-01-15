const fastify = require('fastify')({ logger:true })

const host = process.env.POSTGRES_SERVICE
const port = process.env.POSTGRES_PORT
const user = process.env.POSTGRES_USER
const password = process.env.POSTGRES_PASSWORD
const database = process.env.POSTGRES_DB

fastify.register(require('fastify-postgres'), {
    connectionString: 'postgres://' + user + ':' + password +'@' + host + ':' + port + '/' + database
})
fastify.register(require('./routes'));

// Run the server
const start = () => {
    fastify.listen(3000, '0.0.0.0', (err, address) => {
        if(err){
            fastify.log.error(err)
            process.exit(1)
        }
    })
}
start()