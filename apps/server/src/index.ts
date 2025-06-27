import fastify from "fastify";
import cors from '@fastify/cors'
import { urlsRoutes } from "./routes/urls";

const server = fastify()

await server.register(cors, {
  origin: '*'
})


await server.register(urlsRoutes)


server.listen({ port: 4000 }, () => { console.log(`Server running at http://localhost:4000`) })