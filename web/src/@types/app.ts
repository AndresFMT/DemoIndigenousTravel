import { ReactNode } from 'react'
import { NextPage } from 'next'

export type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode
}

