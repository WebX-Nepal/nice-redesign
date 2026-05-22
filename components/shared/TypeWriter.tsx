"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
  className?: string;
}

export default function Typewriter({
  words,
  typingSpeed = 150,
  deletingSpeed = 90,
  delay = 2200,
  className,
}: TypewriterProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const isPaused = useRef(false);

  useEffect(() => {
    if (!words.length) return;

    // While paused (after finishing a word), do nothing —
    // the pause setTimeout below will kick off deletion.
    if (isPaused.current) return;

    const currentWord = words[wordIndex];

    if (!isDeleting) {
      const updated = currentWord.substring(0, text.length + 1);

      const timeout = setTimeout(() => {
        setText(updated);

        if (updated === currentWord) {
          // Word fully typed — pause before deleting
          isPaused.current = true;
          setTimeout(() => {
            isPaused.current = false;
            setIsDeleting(true);
          }, delay);
        }
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      const updated = currentWord.substring(0, text.length - 1);

      const timeout = setTimeout(() => {
        setText(updated);

        if (updated === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, deletingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay]);

  return (
    <span className={className}>
      {text}
      <span className="animate-pulse duration-75">|</span>
    </span>
  );
}