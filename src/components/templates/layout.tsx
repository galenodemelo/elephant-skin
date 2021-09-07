import Head from 'next/head'

type Props = {
    title: string,
    description: string,
    children: JSX.Element
}

export default function Layout({title, description, children}: Props) {
    if (!title || !description) throw "É obrigatório definir título e descrição para a página"

    const siteName: string = process.env.SITE_NAME
    if (!title.includes(siteName)) title += ` - ${siteName}`

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="shortcut icon" href="/img/favicon.jpg" type="image/jpeg" />
            </Head>

            {children}
        </>
    )
}
