"use client"

import { useInView } from 'framer-motion';
import { useState, useRef, useEffect, ReactNode } from 'react';

const SYMBOLS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwyz123456789_+{}:"[].,/\\~`';
const HackerHTag = ({ children, className }:{children:string, className?:string}) => {
  const container = useRef(null);
  const [Text, setText] = useState(children);
  const isInView = useInView(container);
  useEffect(() => {
    let pos = 0;
    const interval = setInterval(() => {
      const newText = children
        .split('')
        .map((char, index) => {
          if (pos / 4 > index) {
            return char;
          }
          const randomChar =
            SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
          return randomChar;
        })
        .join('');
      setText(newText);
      pos++;
    }, 20);
    return () => {
      clearInterval(interval);
      setText(children);
    };
  });

  return (
    <span className={className} ref={container}>
      {Text}
    </span>
  );
};
HackerHTag.displayName = "HackerHTag"
const HackerTextTag = ({ children, className }:{children:String, className?:string}) => {
    //TODO:Fix for the type
  const intervalRef = useRef<any>(null);
  const [Text, setText] = useState(children);
  const scramble = () => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const newText = children
        .split('')
        .map((char, index) => {
          if (pos / 3 > index) {
            return char;
          }
          const randomChar =
            SYMBOLS[Math.floor(Math.floor(Math.random() * SYMBOLS.length))];
          return randomChar;
        })
        .join('');
      setText(newText);
      pos++;
    }, 25);
  };
  const stop = () => {
    clearInterval(intervalRef.current);
    setText(children);
  };

  return (
    <span onMouseEnter={scramble} onMouseLeave={stop} className={className}>
      {Text}
    </span>
  );
};
HackerTextTag.displayName = "HackerTextTag"
export { HackerHTag, HackerTextTag };
