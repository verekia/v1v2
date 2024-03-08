const wait = (ms: number = 1000): Promise<void> => new Promise<void>(_ => setTimeout(_, ms))

export default wait
