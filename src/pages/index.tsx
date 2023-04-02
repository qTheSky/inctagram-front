import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import IconArrow from 'shared/assets/icons/general/arrow-back.svg'
import {Header} from "pages/components/header";

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
              <Header/>
                <Button theme={ButtonTheme.PRIMARY}>Text</Button>
                <IconArrow/>
            </main>
        </>
    )
}
