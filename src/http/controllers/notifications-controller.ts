import { FastifyReply, FastifyRequest } from "fastify"

export async function notificationWebhook(request: FastifyRequest, reply: FastifyReply) {
  reply.send('')
}
