import NotFoundImg from 'shared/assets/images/404error.png'
import { Info } from 'entities/Info'
import { getAuthLayout } from 'layouts/Layout/AuthLayout/AuthLayout'

export default function NotFound () {
    return (
        <Info title={'404! Page not found'}
              text={'Looks like the page you are looking for is not available'}
              buttonText={'Back'}
              image={NotFoundImg}
              onClick={() => { history.back() }}
        />
    )
}

NotFound.getLayout = getAuthLayout
