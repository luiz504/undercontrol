import { render, screen } from '@testing-library/react-native'
import { MonoText } from '.'

describe('Component: MonoText', () => {
  it('should render correctly', () => {
    const id = 'mono-text'
    render(<MonoText testID={id as any} />)

    expect(screen.getByTestId(id)).toBeOnTheScreen()
  })
})
