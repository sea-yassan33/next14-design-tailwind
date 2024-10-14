"use client"
import Image from "next/image"
import { tv } from 'tailwind-variants';
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Button } from "@/components/ui/button"

const tvContaner = tv({
  variants:{
    style:{
      cont1: '',
    },
  },
});

export default function Sample06(){
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true)
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-purple-600">Woohoo!</h1>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-xl mb-6 text-gray-700">Your inquiry has been successfully submitted!</p>
        </motion.div>

        {showMessage && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-6"
          >
            <p className="text-lg text-pink-500">We'll get back to you super soon!</p>
          </motion.div>
        )}

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold py-2 px-4 rounded-full hover:from-purple-500 hover:to-pink-600 transition duration-300">
            Back to Home
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}