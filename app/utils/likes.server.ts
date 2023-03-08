import type { Prisma } from '@prisma/client'
import { prisma } from './prisma.server'

export const createLike = async (input: Prisma.LikeCreateInput) => {
  const created = await prisma.like.create({
    data: input
  })

  return created
}

export const deleteLike = async (
  input: Prisma.LikePhotoIdUserIdCompoundUniqueInput
) => {
  const deleted = prisma.like.delete({
    where: {
      photoId_userId: input
    }
  })

  return deleted
}
