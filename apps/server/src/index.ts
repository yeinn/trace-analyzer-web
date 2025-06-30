import Fastify from "fastify";
import cors from '@fastify/cors'
import { urlsRoutes } from "./routes/urls";

const server = Fastify({ logger: true })

//cors 등록
await server.register(cors, {
  origin: true,
  methods: ['GET', 'POST']
})

await server.register(urlsRoutes, { prefix: '/api' })

//서버 시작
const start = () => {
  try {
    server.listen({ port: 4000, host: '0.0.0.0' }, () => { console.log(`Server listening on port 4000`) })
  }
  catch (err) {
    process.exit(1)
  }
}

start()

