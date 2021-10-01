import { cleanup, render } from '@testing-library/svelte'
import type { HelloMessage } from '../../types'
import App from '.'

describe('App Component', () => {
  let helloMessage: HelloMessage = {
    name: 'Test',
    date: '10/10/10',
  }

  afterEach(cleanup)

  test('should render', () => {
    const { getByText } = render(App, { helloMessage })

    expect(getByText(`Hello ${helloMessage.name}!`))
  })

  test('should match snapshot', () => {
    const { container } = render(App, { helloMessage })

    expect(container).toMatchSnapshot()
  })
})
