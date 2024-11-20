import { eq } from 'drizzle-orm'

import { Card, CardEntity, CardInsertDTO } from '~/domain/entities/card'
import { CardsRepository } from '~/domain/repositories/cards-repository'
import { ResourceNotFoundError, UniqueConstraintError } from '~/domain/errors'
import { DrizzleCardMapper } from '../mappers/drizzle-card-mapper'

import { DrizzleDatabase, Schemas } from '../types'
import { getShallowDiff } from '~/utils/get-shallow-diff'

export const DrizzleCardRepository = (
  database: DrizzleDatabase,
): CardsRepository => {
  const insert: CardsRepository['insert'] = async (
    params: CardInsertDTO,
  ): Promise<void> => {
    const values = CardEntity.insert(params)
    try {
      await database
        .insert(Schemas.card)
        .values(DrizzleCardMapper.toPersistence(values))
    } catch (err) {
      if (err instanceof Error) {
        if (err.message.includes('UNIQUE constraint failed')) {
          throw new UniqueConstraintError()
        }
      }
      throw err
    }
  }

  const update: CardsRepository['update'] = async (params) => {
    const values = CardEntity.update(params)

    const persisted = await database.query.card.findFirst({
      where: (card, { eq }) => eq(card.id, params.id),
    })

    if (!persisted) {
      throw new ResourceNotFoundError()
    }

    const diffs = getShallowDiff(persisted, values)

    const hasDiff = Object.keys(diffs).length > 0

    if (!hasDiff) {
      return
    }

    await database
      .update(Schemas.card)
      .set(diffs)
      .where(eq(Schemas.card.id, params.id))
  }

  const findMany: CardsRepository['findMany'] = async (): Promise<Card[]> => {
    const items = await database.query.card.findMany({ limit: 30 })

    return items.map(DrizzleCardMapper.toDomain)
  }

  const findById: CardsRepository['findById'] = async (id: string) => {
    const item = await database.query.card.findFirst({
      where: eq(Schemas.card.id, id),
    })
    if (!item) {
      return null
    }
    return DrizzleCardMapper.toDomain(item)
  }

  return {
    insert,
    findMany,
    update,
    findById,
  }
}
