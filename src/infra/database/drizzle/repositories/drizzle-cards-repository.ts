import { eq } from 'drizzle-orm'

import { Card, CardEntity, CardInsertDTO } from '~/domain/entities/Card'
import { CardsRepository } from '~/domain/repositories/cards-repository'
import { ResourceNotFoundError } from '~/domain/errors'
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

    await database
      .insert(Schemas.card)
      .values(DrizzleCardMapper.toPersistance(values))
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

  return {
    insert,
    findMany,
    update,
  }
}
