import { Card } from '~/domain/entities/Card'
type Ca = Pick<Card, 'label' | 'institution' | 'closingDate' | 'id' | 'dueDate'>
export const mockCards: Ca[] = [
  {
    id: '1',
    closingDate: '23',
    label: 'Card 1',
    institution: 'institution 1',
    dueDate: '25',
  },
  {
    id: '2',
    closingDate: '01',
    label: 'Card 2',
    institution: 'institution 2',
    dueDate: '15',
  },
  {
    id: '3',
    closingDate: '23',
    label: 'Card 3',
    institution: 'institution 3',
    dueDate: '25',
  },
  {
    id: '4',
    closingDate: '20',
    label: 'Card 4',
    institution: 'institution 4',
    dueDate: '25',
  },
  { id: '5', closingDate: '16', label: 'Card 5', dueDate: '25' },
  { id: '6', closingDate: '15', label: 'Card 6', dueDate: '25' },
  {
    id: '7',
    closingDate: '20',
    label: 'Card 7',
    institution: 'institution 7',
    dueDate: '25',
  },
  {
    id: '8',
    closingDate: '20',
    label: 'Card 8',
    institution: 'institution 8',
    dueDate: '25',
  },
  {
    id: '9',
    closingDate: '20',
    label: 'Card 9',
    institution: 'institution 9',
    dueDate: '25',
  },
  {
    id: '10',
    closingDate: '20',
    label: 'Card 10',
    institution: 'institution 10',
    dueDate: '25',
  },
]
