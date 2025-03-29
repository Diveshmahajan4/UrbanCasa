"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { useCart } from '@/context/CartContext'
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, CreditCard } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart()
  const router = useRouter()
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout'>('cart')

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.17, 0.67, 0.83, 0.67],
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  }

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`)
  }

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    updateQuantity(productId, newQuantity)
  }

  return (
    <main className="min-h-screen pb-20">
      <Navbar />
      
      {/* Page Title */}
      <div className="px-8 md:px-20 pt-8 pb-12">
        <motion.h1 
          className="text-4xl font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {checkoutStep === 'cart' ? 'Shopping Cart' : 'Checkout'}
        </motion.h1>
        
        <motion.div
          className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={() => router.push('/shop')}
        >
          <ArrowLeft size={16} />
          <span>Continue Shopping</span>
        </motion.div>
      </div>
      
      {checkoutStep === 'cart' ? (
        <div className="px-8 md:px-20">
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <motion.div 
                className="lg:col-span-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="border-b border-gray-200 pb-4 mb-6 hidden md:grid md:grid-cols-12 text-sm text-gray-500">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-center">Total</div>
                </div>
                
                <AnimatePresence>
                  {cartItems.map(item => (
                    <motion.div 
                      key={item.id}
                      className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8 items-center"
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {/* Product Info */}
                      <div className="col-span-6 flex gap-4">
                        <div 
                          className="w-24 h-24 relative rounded-md overflow-hidden bg-gray-100 flex-shrink-0 cursor-pointer"
                          onClick={() => handleProductClick(item.id)}
                        >
                          <Image 
                            src={item.imageSrc} 
                            alt={item.name} 
                            fill 
                            className="object-cover"
                          />
                        </div>
                        
                        <div className="flex flex-col justify-center">
                          <h3 
                            className="font-medium text-lg cursor-pointer hover:underline"
                            onClick={() => handleProductClick(item.id)}
                          >
                            {item.name}
                          </h3>
                          <p className="text-gray-500 text-sm">{item.category}</p>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="flex items-center gap-1 text-gray-400 hover:text-black transition-colors text-sm mt-2 w-fit"
                          >
                            <Trash2 size={14} />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="col-span-2 text-center">
                        <p className="md:hidden text-gray-500 text-sm">Price:</p>
                        <p>${item.price.toLocaleString()}</p>
                      </div>
                      
                      {/* Quantity */}
                      <div className="col-span-2 flex justify-center">
                        <p className="md:hidden text-gray-500 text-sm mr-2">Quantity:</p>
                        <div className="flex items-center border border-gray-200 rounded-md">
                          <button 
                            className="px-3 py-1 text-gray-500 hover:text-black transition-colors"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 py-1 border-x border-gray-200">{item.quantity}</span>
                          <button 
                            className="px-3 py-1 text-gray-500 hover:text-black transition-colors"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      
                      {/* Total */}
                      <div className="col-span-2 text-center font-medium">
                        <p className="md:hidden text-gray-500 text-sm">Total:</p>
                        <p>${(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                <motion.div
                  className="flex justify-between items-center border-t border-gray-200 pt-6 mt-10"
                  variants={fadeVariants}
                >
                  <button 
                    className="text-gray-500 hover:text-black transition-colors flex items-center gap-2"
                    onClick={clearCart}
                  >
                    <Trash2 size={16} />
                    <span>Clear Cart</span>
                  </button>
                </motion.div>
              </motion.div>
              
              {/* Order Summary */}
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg h-fit"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">${(cartTotal * 0.07).toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${(cartTotal * 1.07).toFixed(2)}</span>
                  </div>
                </div>
                
                <motion.button 
                  className="w-full py-4 bg-black text-white font-medium rounded-md flex justify-center items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCheckoutStep('checkout')}
                >
                  <CreditCard size={18} />
                  <span>Proceed to Checkout</span>
                </motion.button>
              </motion.div>
            </div>
          ) : (
            <motion.div 
              className="flex flex-col items-center justify-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <ShoppingBag size={64} className="text-gray-300 mb-6" />
              <h2 className="text-2xl font-medium mb-2">Your cart is empty</h2>
              <p className="text-gray-500 mb-8">Looks like you haven't added any products to your cart yet.</p>
              <Link href="/shop">
                <motion.button 
                  className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Continue Shopping</span>
                </motion.button>
              </Link>
            </motion.div>
          )}
        </div>
      ) : (
        <motion.div 
          className="px-8 md:px-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
              {/* Simple checkout form placeholder */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Zip Code
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-between">
                <button 
                  className="px-6 py-3 border border-black text-black rounded-md hover:bg-gray-100 transition-colors"
                  onClick={() => setCheckoutStep('cart')}
                >
                  Back to Cart
                </button>
              </div>
            </div>
            
            {/* Order Summary (Same as in cart) */}
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg h-fit"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({cartItems.length} items)</span>
                  <span className="font-medium">${cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${(cartTotal * 0.07).toFixed(2)}</span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${(cartTotal * 1.07).toFixed(2)}</span>
                </div>
              </div>
              
              <motion.button 
                className="w-full py-4 bg-black text-white font-medium rounded-md flex justify-center items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => alert('Order placed successfully!')}
              >
                <span>Place Order</span>
              </motion.button>
              
              <div className="mt-4 text-xs text-gray-500 text-center">
                By placing your order, you agree to our Terms of Service and Privacy Policy.
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </main>
  )
} 