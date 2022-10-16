import { useMemo } from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'
import styles from './MyComponent.module.scss'

export const MyComponent = () => {
    const theme = useTheme()
    const toggleTheme = useThemeUpdate()

    const isDark = useMemo(() => theme === 'dark', [theme])

    return (
        <div className={styles.wrapper}>
            <div
                className={isDark ? styles.themeDark : styles.themeLight}>
                Current theme is: {theme}
            </div>
            <button
                className={styles.button}
                onClick={toggleTheme}
            >
                Change theme
            </button>
        </div>
    )
}