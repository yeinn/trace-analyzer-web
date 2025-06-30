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

  server.post('/urls/create', async (req, reply) => {
    const body = req.body as { url?: string, urlAlias: string }
    const url = body?.url?.trim()
    const urlAlias = body?.urlAlias?.trim()
    console.log('===', url)

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

  server.post('/urls/delete', async (req, reply) => {
    const body = req.body as { id: string }
    const id = body.id

    if (!id) {
      return reply.status(400).send({ error: 'ID가 필요합니다.' })
    }

    const index = urls.findIndex(entry => entry.id === id)
    if (index === -1) {
      return reply.status(404).send({ error: '해당 ID를 가진 URL이 없습니다.' })
    }

    urls.splice(index, 1)

    return { success: true }
  })
}