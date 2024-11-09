import { z } from 'zod'
import { currency } from './shared-properties'
import * as Schemas from '~/drizzle/schemas'
import { InferInsertModel, InferSelectModel } from 'drizzle-orm'
import { randomUUID } from 'expo-crypto'

export const reserveSchema = z.object({
  id: z.string().uuid(),
  label: z.string().min(3).max(30),
  institution: z.string().max(30).optional().nullable(),
  balance: z.number().int(),
  currency: z.enum(currency),
  createdAt: z.date(),
  updatedAt: z.date().nullable(),
})

export type Reserve = z.infer<typeof reserveSchema>
export class ReserveEntity {
  static create(props: Reserve): Reserve {
    return reserveSchema.parse(props)
  }

  static toDomain(raw: InferSelectModel<typeof Schemas.reserve>): Reserve {
    return reserveSchema.parse({
      ...raw,
      created_at: new Date(raw.createdAt),
      updated_at: raw.updatedAt ? new Date(raw.updatedAt) : null,
    })
  }

  static createRaw(props: Reserve): InferInsertModel<typeof Schemas.reserve> {
    return {
      id: randomUUID(),
      balance: props.balance,
      institution: props.institution,
      currency: props.currency,
      label: props.label,
      updatedAt: null,
    }
  }
}
