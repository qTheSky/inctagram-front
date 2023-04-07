import 'app/styles/index.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../app/providers/ThemeProvider'
import { appWithTranslation } from 'next-i18next'
import { Layout } from 'shared/ui/Layout/Layout'
import AdminMenu from '../shared/ui/AdminMenu/AdminMenu'
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import {AuthRedirect} from "@/features/authorization/ui/authRedirect";

function App ({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient())
    return (
        <QueryClientProvider client={queryClient}>

            <ThemeProvider>
                <Layout>
                    <AdminMenu/>
                    <AuthRedirect>
                    <Component {...pageProps} />
                    </AuthRedirect>
                </Layout>
            </ThemeProvider>

        </QueryClientProvider>
    )
}

export default appWithTranslation(App)
