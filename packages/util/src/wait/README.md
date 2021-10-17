# wait

A `Promise`-based delay.

```js
import { wait } from '@v1v2/util'

const main = async () => {
  console.log('Hello...')
  await wait(3000)
  console.log('...world!')
}

main()
```
