import React from 'react'
import type { Theme } from '@react-navigation/native'
import { ThemeContext } from '@react-navigation/core'

ThemeContext.displayName = 'ThemeContext'

interface IProps {
  value: Theme | undefined
  children: React.ReactNode
}

export function ThemeProvider({ children, value }: IProps) {
  return <ThemeContext.Provider value={value}>
    {children}
  </ThemeContext.Provider>
}