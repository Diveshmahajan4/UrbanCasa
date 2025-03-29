"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { Filter, ShoppingCart, Heart } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useRouter } from 'next/navigation'

// Sample furniture product data
type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  imageSrc: string;
  isNew: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Minimalist Sofa',
    category: 'living room',
    price: 1299,
    imageSrc: '/image1.jpg',
    isNew: true,
  },
  {
    id: 2,
    name: 'Wooden Dining Table',
    category: 'dining',
    price: 899,
    imageSrc: '/image2.jpg',
    isNew: false,
  },
  {
    id: 3,
    name: 'Modern Armchair',
    category: 'living room',
    price: 649,
    imageSrc: '/image3.jpg',
    isNew: true,
  },
  {
    id: 4,
    name: 'Bedroom Nightstand',
    category: 'bedroom',
    price: 349,
    imageSrc: '/image4.jpg',
    isNew: false,
  },
  {
    id: 5,
    name: 'Elegant Coffee Table',
    category: 'living room',
    price: 499,
    imageSrc: '/image6.jpg',
    isNew: false,
  },
  {
    id: 6,
    name: 'Compact Desk',
    category: 'office',
    price: 749,
    imageSrc: '/image7.jpg',
    isNew: true,
  },
  {
    id: 7,
    name: 'Platform Bed',
    category: 'bedroom',
    price: 1499,
    imageSrc: '/image8.jpg',
    isNew: false,
  },
  {
    id: 8,
    name: 'Modern Bookshelf',
    category: 'office',
    price: 899,
    imageSrc: '/image5.jpg',
    isNew: true,
  },
]

// Filter options
const categories = ['all', 'living room', 'dining', 'bedroom', 'office']
const sortOptions = ['newest', 'price: high to low', 'price: low to high']

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeSortOption, setActiveSortOption] = useState('newest')
  const [showFilters, setShowFilters] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const { addToCart } = useCart()
  const router = useRouter()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.17, 0.67, 0.83, 0.67],
        duration: 0.8,
      },
    },
  }

  const filterVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: 'auto', 
      opacity: 1,
      transition: {
        height: {
          duration: 0.4,
        },
        opacity: {
          duration: 0.3,
          delay: 0.1,
        }
      } 
    },
  }

  // Filter and sort products
  useEffect(() => {
    let result = [...products]
    
    // Apply category filter
    if (activeCategory !== 'all') {
      result = result.filter(product => product.category === activeCategory)
    }
    
    // Apply sorting
    if (activeSortOption === 'price: high to low') {
      result.sort((a, b) => b.price - a.price)
    } else if (activeSortOption === 'price: low to high') {
      result.sort((a, b) => a.price - b.price)
    } else if (activeSortOption === 'newest') {
      result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1))
    }
    
    setFilteredProducts(result)
  }, [activeCategory, activeSortOption])

  const handleAddToCart = (product: Product) => {
    addToCart(product)
    // Optional: show a toast notification
  }

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`)
  }

  return (
    <main className="min-h-screen pb-20">
      <Navbar />
      
      {/* Shop Hero Section */}
      <motion.div
        className="relative h-[40vh] overflow-hidden mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <motion.h1 
            className="text-[90px] font-semibold text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2,
              ease: [0.17, 0.67, 0.83, 0.67],
            }}
          >
            Collection
          </motion.h1>
        </div>
        <Image 
          src="/image5.jpg" 
          alt="Shop collection banner"
          fill 
          className="object-cover object-center"
        />
      </motion.div>
      
      {/* Filter Section */}
      <div className="px-8 md:px-20 mb-8">
        <div className="flex justify-between items-center mb-4">
          <motion.h2 
            className="text-3xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Products
          </motion.h2>
          
          <div className="flex items-center gap-4">
            <motion.button
              onClick={() => router.push('/cart')}
              className="relative" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart size={24} />
            </motion.button>
            
            <motion.button 
              className="flex items-center gap-2 px-4 py-2 border border-black rounded-md"
              onClick={() => setShowFilters(!showFilters)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter size={18} />
              <span>Filter & Sort</span>
            </motion.button>
          </div>
        </div>
        
        <AnimatePresence>
          {showFilters && (
            <motion.div 
              className="bg-gray-50 p-4 rounded-md mb-6 overflow-hidden"
              variants={filterVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-semibold mb-3">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        className={`px-4 py-2 text-sm rounded-full transition-all ${
                          activeCategory === category
                            ? 'bg-black text-white'
                            : 'bg-white border border-gray-200 hover:border-black'
                        }`}
                        onClick={() => setActiveCategory(category)}
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold mb-3">Sort By</h3>
                  <div className="flex flex-wrap gap-2">
                    {sortOptions.map(option => (
                      <button
                        key={option}
                        className={`px-4 py-2 text-sm rounded-full transition-all ${
                          activeSortOption === option
                            ? 'bg-black text-white'
                            : 'bg-white border border-gray-200 hover:border-black'
                        }`}
                        onClick={() => setActiveSortOption(option)}
                      >
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Products Grid */}
      <motion.div 
        className="px-8 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProducts.map(product => (
          <motion.div
            key={product.id}
            className="group relative"
            variants={itemVariants}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div 
              className="relative aspect-square overflow-hidden bg-gray-100 mb-4 cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <Image
                src={product.imageSrc}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {product.isNew && (
                <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 rounded">
                  New
                </span>
              )}
              
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-2">
                  <motion.button 
                    className="p-2 bg-white rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                  >
                    <ShoppingCart size={18} />
                  </motion.button>
                  <motion.button 
                    className="p-2 bg-white rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Heart size={18} />
                  </motion.button>
                </div>
              </div>
            </div>
            
            <h3 
              className="font-medium text-lg cursor-pointer hover:underline"
              onClick={() => handleProductClick(product.id)}
            >
              {product.name}
            </h3>
            <div className="flex justify-between items-center mt-1">
              <p className="text-gray-700">{product.category}</p>
              <p className="font-semibold">${product.price}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <motion.div 
          className="flex flex-col items-center justify-center py-20 px-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-medium mb-2">No products found</h3>
          <p className="text-gray-500 mb-6">Try adjusting your filters or browse our other categories.</p>
          <button 
            className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            onClick={() => setActiveCategory('all')}
          >
            View All Products
          </button>
        </motion.div>
      )}
    </main>
  )
}