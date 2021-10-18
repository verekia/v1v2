import React, { useState, useEffect, ReactNode } from 'react'

export const useDefer = (delay = 300) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), delay)
    return () => clearTimeout(timeout)
  })

  return show
}

const Defer = ({ children, delay = 300 }: { children: ReactNode; delay?: number }) => {
  const show = useDefer(delay)

  return show ? <>{children}</> : null
}

export default Defer
