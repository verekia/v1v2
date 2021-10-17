import { useEffect } from 'react'

import { between, exists, either, wait } from '@v1v2/util'
import { AlertTrigger, ModalTrigger } from '@v1v2/chakra'

const IndexPage = () => {
  const handleClick = async () => {
    console.log(await wait())
    console.log('Delayed click')
  }

  useEffect(() => {
    console.log(between(50, 10, 100))
    console.log(exists(''))
    console.log(either('x', 'y', 'x', 'z'))
  }, [])

  return (
    <div>
      <button onClick={handleClick}>Delayed log</button>
      <ModalTrigger trigger={openModal => <button onClick={openModal}>Open Modal</button>}>
        {() => <div>Modal Content</div>}
      </ModalTrigger>
      <AlertTrigger trigger={openModal => <button onClick={openModal}>Open Alert</button>}>
        {() => <div>Alert Content</div>}
      </AlertTrigger>
    </div>
  )
}

export default IndexPage
