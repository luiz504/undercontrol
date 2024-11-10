import { Card } from '~/domain/entities/Card'
type Ca = Pick<Card, 'label' | 'institution' | 'dueDay' | 'id'>
export const mockCards: Ca[] = [
  { id: '1', dueDay: '23', label: 'Card 1', institution: 'institution 1' },
  { id: '2', dueDay: '01', label: 'Card 2', institution: 'institution 2' },
  { id: '3', dueDay: '23', label: 'Card 3', institution: 'institution 3' },
  { id: '4', dueDay: '20', label: 'Card 4', institution: 'institution 4' },
  { id: '5', dueDay: '30', label: 'Card 5' },
  { id: '6', dueDay: '15', label: 'Card 6' },
  { id: '7', dueDay: '20', label: 'Card 7', institution: 'institution 7' },
  { id: '8', dueDay: '20', label: 'Card 8', institution: 'institution 8' },
  { id: '9', dueDay: '20', label: 'Card 9', institution: 'institution 9' },
  { id: '10', dueDay: '20', label: 'Card 10', institution: 'institution 10' },
]
