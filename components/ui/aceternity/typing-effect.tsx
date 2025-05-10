"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export const TypingEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: string[]
  className?: string
  cursorClassName?: string
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Current word being processed
      const currentWord = words[currentWordIndex]

      // If deleting
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1))
        setTypingSpeed(50) // Faster when deleting
      } else {
        // If typing
        setCurrentText(currentWord.substring(0, currentText.length + 1))
        setTypingSpeed(150) // Normal typing speed
      }

      // If word is complete and not deleting yet
      if (!isDeleting && currentText === currentWord) {
        // Pause at the end of typing
        setTypingSpeed(2000)
        setIsDeleting(true)
      }
      // If deletion is complete
      else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentWordIndex((currentWordIndex + 1) % words.length)
        setTypingSpeed(500) // Pause before typing next word
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, typingSpeed, words])

  return (
    <div className="flex">
      <motion.div className={className}>{currentText}</motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className={cursorClassName}
      >
        |
      </motion.div>
    </div>
  )
}
