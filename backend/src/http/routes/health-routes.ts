import { FastifyInstance } from "fastify"

export async function healthRoutes(app: FastifyInstance) {
  app.get("/health", async (request, reply) => {
    try {
      // Check database connection
      // await prisma.$queryRaw`SELECT 1`
      return { status: "ok", message: "Server is healthy" }
    } catch (e) {
      app.log.error("Health check failed", { e })
      reply
        .status(500)
        .send({ status: "error", message: "Server is not healthy" })
    }
  })
}
