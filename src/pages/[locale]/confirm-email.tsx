import CongratulationsImg from '@/shared/assets/images/congratulations.png'
import { useTranslation } from 'next-i18next'
import { makeStaticProps, getStaticPaths } from '@/shared/lib/getStatic'
import { Info } from '@/entities/Info'
import { useRouter } from 'next/router'
import { useMutation } from '@tanstack/react-query'
import { AuthService } from '@/features/authorization'
import { useEffect } from 'react'

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }

export default function ConfirmEmail () {
    const router = useRouter()
    const code = router.query.code
    console.log(code)
    const { mutate: confirmEmail } = useMutation({
        mutationFn: AuthService.registrationConfirm,
        retry: false,
        onSuccess: () => {
            void router.push('/ru/auth/login')
        }
    })
    useEffect(() => {
        if (typeof code === 'string') {
            confirmEmail(code)
        }
    }, [])

    const { t } = useTranslation()
    return (
        <Info title={t('congratulations-title')} // Поздравляю!
              text={t('congratulations-text')} // Ваше сообщение было подтверждено
              buttonText={t('congratulations-button')} // Войти
              image={CongratulationsImg} />
    )
}
function registrationConfirm (code: string | string[] | undefined): Promise<unknown> {
    throw new Error('Function not implemented.')
}
