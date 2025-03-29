"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

export type CartItem = {
  id: number
  name: string
  category: string
  price: number
  imageSrc: string
  quantity: number
}

type CartContextType = {
  cartItems: CartItem[]
  addToCart: (product: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  cartTotal: number
  cartCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [cartTotal, setCartTotal] = useState(0)
  const [cartCount, setCartCount] = useState(0)

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("urbancasa-cart")
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart))
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem("urbancasa-cart", JSON.stringify(cartItems))
    
    // Calculate totals
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    setCartTotal(total)
    
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    setCartCount(count)
  }, [cartItems])

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id)
      
      if (existingItem) {
        // Increment quantity if item already exists
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        )
      } else {
        // Add new item with quantity 1
        return [...prev, { ...product, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId)
      return
    }
    
    setCartItems(prev => 
      prev.map(item => 
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
} 