# @v1v2/nanoid

A [Nano ID](https://github.com/ai/nanoid) default configuration with no lookalikes (`0`, `O`, `1`, `l`, `I`), and without `-` and `_`. This custom alphabet uses a length of 22 to have a similar collision risk to UUID v4 (twice less actually), for a 30% shorter length.

To reach a 1% collision risk at 1000 IDs per hour calculated on [Nano ID Collision Calculator](https://zelark.github.io/nano-id-cc/), UUID v4 (32 characters) takes 149 billion years. This `nanoid` function takes 334 billion years. It could be shortened a lot but at least at 22 characters you can rest assured that your IDs are as safe as UUIDs collision-wise.

## Installation

```sh
npm i @v1v2/nanoid
# or
yarn add @v1v2/nanoid
```

### Usage

```js
import { nanoid } from '@v1v2/nanoid'

nanoid() // '4wEkBX8dJmMrzoXFBgQDwM'
```

An [SQL function](src/nanoid/nanoid.sql) is also available.
