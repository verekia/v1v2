const wait = (ms: number = 1000) => new Promise<void>(_ => setTimeout(_, ms))

export default wait
