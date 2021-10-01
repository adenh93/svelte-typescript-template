<script lang="ts">
  import type { HelloMessage } from '../../types'
  export let helloMessage: HelloMessage
</script>

<main>
  <h1>Hello {helloMessage.name}!</h1>
  <p>This template was last updated on {helloMessage.date}</p>
</main>
