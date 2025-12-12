import React from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './theme/theme'
import { CartProvider } from './context/CartContext'
import { ProductsProvider } from './context/ProductsContext'
import AppRouter from './router/AppRouter'

import CartDrawer from './components/CartDrawer/CartDrawer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProductsProvider>
        <CartProvider>
          <AppRouter />
          <CartDrawer />
        </CartProvider>
      </ProductsProvider>
    </ThemeProvider>
  )
}

export default App
