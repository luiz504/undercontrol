import { InferInsertModel, InferSelectModel } from 'drizzle-orm'
import { randomUUID } from 'expo-crypto'

import { Card, CardEntity, CardInsertDTO } from '~/domain/entities/Card'
import { Schemas } from '../types'

export class DrizzleCardMapper {
  static toDomain(raw: InferSelectModel<typeof Schemas.card>) {
    return CardEntity.create({
      id: raw.id,
      label: raw.label,
      closingDate: raw.closingDate,
      dueDate: raw.dueDate,
      currency: raw.currency as Card['currency'],
      createdAt: new Date(raw.createdAt),
      updatedAt: raw.updatedAt ? new Date(raw.updatedAt) : null,
    })
  }

  static toPersistence(
    props: CardInsertDTO,
  ): InferInsertModel<typeof Schemas.card> {
    return {
      id: randomUUID(),
      label: props.label,
      closingDate: props.closingDate,
      dueDate: props.dueDate,
      currency: props.currency,
    }
  }
}
