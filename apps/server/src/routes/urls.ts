import { FastifyInstance } from "fastify"

type UrlEntry = {
  id: string
  url: string
  urlAlias: string
  createdAt: number
}

const urls: UrlEntry[] = []

export const urlsRoutes = async (server: FastifyInstance) => {
  server.get('/urls', async () => { return urls })

  server.post('/urls', async (req, reply) => {
    const body = req.body as { url?: string, urlAlias: string }
    const url = body?.url?.trim()
    const urlAlias = body?.urlAlias?.trim()

    if (!url || !url.startsWith('http')) {
      return reply.status(400).send({ error: '유효하지 않은 URL 입니다.' })
    }

    const newEntry: UrlEntry = {
      id: crypto.randomUUID(),
      url,
      urlAlias,
      createdAt: Date.now()
    }

    urls.unshift(newEntry)

    return { success: true, entry: newEntry }
  })
}