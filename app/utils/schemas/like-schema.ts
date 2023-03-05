import type { Like as PrismaLike, Photos } from '@prisma/client'
import type { SerializeFrom } from '@remix-run/node'

export type Like = SerializeFrom<PrismaLike> & {
  photo: SerializeFrom<Photos>
}
