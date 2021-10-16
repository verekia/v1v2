import { wait } from '@v1v2/util'

const IndexPage = () => {
  const handleClick = async () => {
    console.log(await wait())
    console.log('Delayed click')
  }

  return (
    <div>
      <button onClick={handleClick}>Delayed log</button>
    </div>
  )
}

export default IndexPage
