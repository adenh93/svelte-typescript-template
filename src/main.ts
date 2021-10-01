import App from './components/App'
import type { HelloMessage } from './types'

const helloMessage: HelloMessage = {
  name: 'world',
  date: '01/10/2021',
}

const app = new App({
  target: document.body,
  props: {
    helloMessage,
  },
})

export default app
