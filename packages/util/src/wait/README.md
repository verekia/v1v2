# wait

**`wait`**: A `Promise`-based delay.

```js
import { wait } from '@v1v2/util'

const main = async () => {
  console.log('Legen - wait for it...')
  await wait(3000)
  console.log('...dary!')
}

main()
```
