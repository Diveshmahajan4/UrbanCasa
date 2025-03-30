"use client"

import React, { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { ArrowLeft, Minus, Plus, ShoppingCart, Heart, ArrowRight } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import { useCart } from '@/context/CartContext'
import Footer from '@/components/Footer'

const products = [
  {
    id: 1,
    name: 'Minimalist Sofa',
    category: 'living room',
    price: 1299,
    imageSrc: '/image1.jpg',
    isNew: true,
    description: 'A sleek, minimalist sofa design perfect for modern living spaces. Features high-density foam cushions and a solid wood frame for lasting comfort and support.',
    dimensions: '84" W x 38" D x 34" H',
    material: 'Premium polyester upholstery, solid wood frame',
    color: 'Light Grey',
  },
  {
    id: 2,
    name: 'Wooden Dining Table',
    category: 'dining',
    price: 899,
    imageSrc: '/image2.jpg',
    isNew: false,
    description: 'A beautiful solid wood dining table that combines rustic charm with modern aesthetics. Perfect centerpiece for family dinners and gatherings.',
    dimensions: '72" L x 36" W x 30" H',
    material: 'Solid oak wood with natural finish',
    color: 'Natural Wood',
  },
  {
    id: 3,
    name: 'Modern Armchair',
    category: 'living room',
    price: 649,
    imageSrc: '/image3.jpg',
    isNew: true,
    description: 'A contemporary armchair with clean lines and exceptional comfort. Perfect for reading corners or to complement your living room set.',
    dimensions: '31" W x 34" D x 35" H',
    material: 'Premium fabric upholstery, solid wood legs',
    color: 'Charcoal Grey',
  },
  {
    id: 4,
    name: 'Bedroom Nightstand',
    category: 'bedroom',
    price: 349,
    imageSrc: '/image4.jpg',
    isNew: false,
    description: 'A practical and stylish nightstand featuring two spacious drawers for bedside storage. Crafted with attention to detail.',
    dimensions: '22" W x 18" D x 24" H',
    material: 'Engineered wood with oak veneer',
    color: 'Walnut',
  },
  {
    id: 5,
    name: 'Elegant Coffee Table',
    category: 'living room',
    price: 499,
    imageSrc: '/image6.jpg',
    isNew: false,
    description: 'An elegant coffee table with a distinctive design that makes it the focal point of any living space. Features a tempered glass top and solid wood base.',
    dimensions: '48" L x 28" W x 18" H',
    material: 'Tempered glass, solid walnut wood base',
    color: 'Clear/Walnut',
  },
  {
    id: 6,
    name: 'Compact Desk',
    category: 'office',
    price: 749,
    imageSrc: '/image7.jpg',
    isNew: true,
    description: 'A compact desk perfect for home offices and small spaces. Features built-in cable management and a drawer for organization.',
    dimensions: '42" W x 24" D x 30" H',
    material: 'Oak veneer with steel legs',
    color: 'White/Natural',
  },
  {
    id: 7,
    name: 'Platform Bed',
    category: 'bedroom',
    price: 1499,
    imageSrc: '/image8.jpg',
    isNew: false,
    description: 'A modern platform bed with integrated nightstands and LED lighting. Creates a floating effect for a contemporary bedroom style.',
    dimensions: 'Queen: 60" W x 80" L x 14" H',
    material: 'Engineered wood with matte finish',
    color: 'Matte Black',
  },
  {
    id: 8,
    name: 'Modern Bookshelf',
    category: 'office',
    price: 899,
    imageSrc: '/image5.jpg',
    isNew: true,
    description: 'A contemporary bookshelf with an asymmetrical design that adds visual interest to any room. Perfect for displaying books and decorative items.',
    dimensions: '36" W x 12" D x 72" H',
    material: 'Powder-coated steel frame, engineered wood shelves',
    color: 'Black/Walnut',
  },
]

export default function ProductPage() {
  const router = useRouter()
  const params = useParams()
  const { addToCart } = useCart()
  
  const [quantity, setQuantity] = useState(1)
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching product data
    const productId = Number(params.id)
    const foundProduct = products.find(p => p.id === productId)
    
    if (foundProduct) {
      setProduct(foundProduct)
    }
    
    setLoading(false)
  }, [params.id])

  // Generate suggested products: category matches and new items
  const suggestedProducts = useMemo(() => {
    if (!product) return [];

    // Get products from the same category (excluding current product)
    const sameCategory = products
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 2);
    
    // Get some new items (that are not already in sameCategory)
    const newItems = products
      .filter(p => p.isNew && p.id !== product.id && !sameCategory.some(item => item.id === p.id))
      .slice(0, 2);
    
    // If we need more items to reach 4 total suggestions
    let additional: typeof products = [];
    if (sameCategory.length + newItems.length < 4) {
      additional = products
        .filter(p => 
          p.id !== product.id && 
          !sameCategory.some(item => item.id === p.id) && 
          !newItems.some(item => item.id === p.id)
        )
        .slice(0, 4 - (sameCategory.length + newItems.length));
    }
    
    return [...sameCategory, ...newItems, ...additional].slice(0, 4);
  }, [product]);
  
  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product)
      }
      // Optional: Add a success message
    }
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return
    setQuantity(newQuantity)
  }

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`)
  }

  if (loading) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="flex justify-center items-center h-[70vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
        </div>
      </main>
    )
  }

  if (!product) {
    return (
      <main className="flex-1 pb-20">
        <Navbar />
        <div className="px-4 sm:px-8 md:px-20 py-8 sm:py-16 text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4">Product Not Found</h1>
          <p className="text-gray-500 mb-8">The product you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <button 
            className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            onClick={() => router.push('/shop')}
          >
            Return to Shop
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="flex-1 pb-20">
      <Navbar />
      
      <div className="px-4 sm:px-8 md:px-20 pt-4 sm:pt-8 pb-6 sm:pb-12">
        <motion.div
          className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          onClick={() => router.push('/shop')}
        >
          <ArrowLeft size={16} />
          <span>Back to Products</span>
        </motion.div>
      </div>
      
      <div className="px-4 sm:px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 sm:mb-20">
        {/* Product Image */}
        <motion.div
          className="aspect-square relative rounded-lg overflow-hidden bg-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image 
            src={product.imageSrc} 
            alt={product.name} 
            fill 
            className="object-cover" 
          />
          {product.isNew && (
            <span className="absolute top-4 left-4 bg-black text-white text-xs px-2 py-1 rounded">
              New
            </span>
          )}
        </motion.div>
        
        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-2xl sm:text-3xl font-semibold mb-2">{product.name}</h1>
          <p className="text-gray-500 mb-4">{product.category}</p>
          <p className="text-xl sm:text-2xl font-bold mb-6">${product.price}</p>
          
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
            
            <div className="space-y-2 mb-6">
              <p><span className="font-medium">Dimensions:</span> {product.dimensions}</p>
              <p><span className="font-medium">Material:</span> {product.material}</p>
              <p><span className="font-medium">Color:</span> {product.color}</p>
            </div>
          </div>
          
          <div className="mb-8">
            <p className="font-medium mb-2">Quantity</p>
            <div className="flex items-center border border-gray-200 rounded-md w-fit">
              <button 
                className="px-3 sm:px-4 py-2 text-gray-500 hover:text-black transition-colors"
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
              >
                <Minus size={16} />
              </button>
              <span className="px-3 sm:px-4 py-2 border-x border-gray-200">{quantity}</span>
              <button 
                className="px-3 sm:px-4 py-2 text-gray-500 hover:text-black transition-colors"
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              className="flex-1 py-3 sm:py-4 bg-black text-white font-medium rounded-md flex justify-center items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
            >
              <ShoppingCart size={18} />
              <span>Add to Cart</span>
            </motion.button>
            
            <motion.button 
              className="p-3 sm:p-4 border border-gray-200 rounded-md sm:w-auto flex justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart size={20} className="text-gray-500" />
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Suggested Products Section */}
      {suggestedProducts.length > 0 && (
        <motion.section
          className="px-4 sm:px-8 md:px-20 mt-12 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold">You May Also Like</h2>
            <motion.button 
              className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors"
              whileHover={{ x: 5 }}
              onClick={() => router.push('/shop')}
            >
              <span className="hidden sm:inline">View All</span>
              <ArrowRight size={16} />
            </motion.button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {suggestedProducts.map((suggestedProduct) => (
              <motion.div
                key={suggestedProduct.id}
                className="group cursor-pointer"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleProductClick(suggestedProduct.id)}
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-md mb-3 sm:mb-4">
                  <Image
                    src={suggestedProduct.imageSrc}
                    alt={suggestedProduct.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {suggestedProduct.isNew && (
                    <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-black text-white text-xs px-2 py-1 rounded">
                      New
                    </span>
                  )}
                </div>
                
                <h3 className="font-medium text-sm sm:text-base group-hover:underline">{suggestedProduct.name}</h3>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-gray-500 text-xs sm:text-sm">{suggestedProduct.category}</p>
                  <p className="font-semibold text-sm sm:text-base">${suggestedProduct.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}
      <Footer/>
    </main>
  )
} 