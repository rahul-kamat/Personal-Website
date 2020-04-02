import React, { cloneElement } from 'react'
import { DarkMode } from './darkMode'
import { LightMode } from './lightMode'

const providers = [<DarkMode.Provider />, <LightMode.Provider />];

const Store = ({ children: initial }) =>
  providers.reduce((children, parent) => cloneElement(parent, { children }), initial)

export { Store, DarkMode, LightMode }
