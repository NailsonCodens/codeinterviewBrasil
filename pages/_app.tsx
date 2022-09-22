import type { AppProps } from 'next/app'
import { FC } from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { styled, globalCss } from 'stitches.config'
import globalStyles from 'css/cssglobal'

const Body = styled('div', {})

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  globalStyles()
  return (
    <Body>
      <Component {...pageProps} />
    </Body>
  )
}

export default MyApp
