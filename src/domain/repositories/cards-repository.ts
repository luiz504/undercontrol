import { Card, CardInsertDTO, CardUpdateDTO } from '../entities/Card'

export interface CardsRepository {
  insert(props: CardInsertDTO): Promise<void>
  update(props: CardUpdateDTO): Promise<void>
  findMany(): Promise<Card[]>
}
