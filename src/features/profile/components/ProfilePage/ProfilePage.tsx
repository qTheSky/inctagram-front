import React from 'react'
import { useGetProfileData } from 'app/hooks/useGetProfileData'
import { AppRoutes } from 'shared/config/routeConfig/path'
import { routerPush } from 'shared/lib/routerPush/routerPush'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button } from 'shared/ui/Button/Button'
import { Card } from 'shared/ui/Card/Card'

import cls from './ProfilePage.module.scss'

export const ProfilePage = () => {
    const { response } = useGetProfileData()
    const userData = response?.data
    const onSettingsRedirectClick = () => {
        routerPush(AppRoutes.PROFILE.UPDATEPROFILE)
    }
    return (
        <div className={cls.container}>
            <div className={cls.infoButton}>
                <div className={cls.flex}>
                    <div className={cls.avatar}>
                        <Avatar size={192} src={userData ? userData.avatarUrl.replace('FILES_URL=', '') : undefined} />
                    </div>
                    <div>
                        <div className={cls.userName}>{userData?.userName}</div>
                        <div className={cls.info}>
                            <div>
                                <div className={cls.subscribe}>2 218</div>
                                <div>Subscriptions</div>
                            </div>
                            <div>
                                <div className={cls.subscribe}>2358</div>
                                <div>Subscribers</div>
                            </div>
                            <div>
                                <div className={cls.subscribe}>2764</div>
                                <div>Publications</div>
                            </div>
                        </div>
                        <div className={cls.aboutMe}>{userData?.aboutMe}</div>
                    </div>
                </div>
                <Button onClick={onSettingsRedirectClick} className={cls.button} > Profile Settings</Button>

            </div>
            <div className={cls.cardsList}>
                <div className={cls.card}>
                    <Card src={''} alt={''} />
                </div>
            </div>
        </div>
    )
}
