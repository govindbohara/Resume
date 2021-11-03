import Head from 'next/head'
import { FC } from 'react'

type LayoutProps = {
    title?: string
}

export const Layout: FC<LayoutProps> = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title ?? 'Govind Bohara - Frontend Developer'}</title>
            </Head>
            <section>{children}</section>
        </>
    )
}
