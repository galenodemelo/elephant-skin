import type { AppProps } from 'next/app'
import Layout from '@components/templates/layout'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout title={pageProps.title} description={pageProps.description}>
            <Component {...pageProps} />
        </Layout>
    )
}
