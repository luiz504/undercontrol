import { Card, CardInsertDTO, CardUpdateDTO } from '../entities/card'

export interface CardsRepository {
  insert(props: CardInsertDTO): Promise<void>
  update(props: CardUpdateDTO): Promise<void>
  findMany(): Promise<Card[]>
  findById(id: string): Promise<Card | null>
}
