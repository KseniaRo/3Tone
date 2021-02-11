import { DefaultTheme } from '@react-navigation/native'
import React from 'react'
import colors from '../config/colors'

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white
  }
}
