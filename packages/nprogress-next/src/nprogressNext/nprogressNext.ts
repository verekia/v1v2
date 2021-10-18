import Router from 'next/router'
import NProgress from 'nprogress'

const nprogressNext = (nprogressOptions: any) => {
  NProgress.configure(nprogressOptions)

  let lastUrl: string
  let progressTimeout

  Router.events.on('routeChangeStart', url => {
    if (url !== lastUrl) {
      lastUrl = url
      progressTimeout = setTimeout(() => NProgress.start(), nprogressOptions.delay ?? 0)
    }
  })
  Router.events.on('routeChangeComplete', () => {
    clearTimeout(progressTimeout)
    NProgress.done()
  })
  Router.events.on('routeChangeError', () => {
    clearTimeout(progressTimeout)
    NProgress.done()
  })
}

export default nprogressNext
