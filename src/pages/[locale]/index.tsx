import Head from 'next/head'
import { getStaticPaths, makeStaticProps } from '@/shared/lib/getStatic'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import Link from 'next/link'

export default function Home () {
    return (
        <>
            <Head>
                <title>Inctagram</title>
                <meta name="description" content="Inctagram" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <>
                    <Link href={'/confirm-email'}>Congratulations</Link>
                    <AppLink href={'/Verification'}>Verification</AppLink>
                    <AppLink href={'/auth/registration'}>registration</AppLink>
                </>

            </main>
        </>
    )
}

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }
