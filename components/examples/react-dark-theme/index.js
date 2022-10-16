import { ThemeProvider } from './ThemeContext'
import { MyComponent } from './MyComponent'
import { BaseButton } from '../../app-common/button.base'
import { useRouteGoBack } from '../../../utils/hooks/useRouteGoBack'

export const ReactDarkThemeComponent = () => {
    const goBack = useRouteGoBack()

    return (
        <ThemeProvider>
            <MyComponent />
            <div className="text-center">
                <BaseButton onClick={goBack}>
                    Go back to post
                </BaseButton>
            </div>
        </ThemeProvider>
    )
}