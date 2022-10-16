import { useState, useContext, createContext } from 'react'

// create a new context to store value
const ThemeContext = createContext()

// create a new context to update value
const ThemeContextUpdate = createContext()

// create a hook to access the value of context
// we will use this hook later in MyComponent.js
export const useTheme = () => {
    return useContext(ThemeContext)
}

export const useThemeUpdate = () => {
    return useContext(ThemeContextUpdate)
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeContextUpdate.Provider value={toggleTheme}>
                {children}
            </ThemeContextUpdate.Provider>
        </ThemeContext.Provider>
    )
}