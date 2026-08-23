import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

function BootSequence({ onComplete }) {
  useEffect(() => {
    // Power users hate fake delays. Just a very quick, sleek transition to establish context.
    const timer = setTimeout(() => {
      onComplete();
    }, 850); 
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div style={{
      height: '100vh', width: '100vw', backgroundColor: '#020203',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      position: 'relative', zIndex: 10
    }}>
      <motion.div
        initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ width: '260px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <h2 style={{ 
            fontFamily: 'var(--font-sans)', 
            fontSize: '0.85rem', 
            fontWeight: 600, 
            letterSpacing: '2px',
            color: '#fff',
            margin: 0
          }}>
            SECOND BRAIN
          </h2>
          <span style={{ 
            fontFamily: 'var(--font-mono)', 
            fontSize: '0.65rem', 
            color: 'var(--accent)',
            opacity: 0.8,
            letterSpacing: '1px'
          }}>
            INIT
          </span>
        </div>

        <div style={{ width: '100%', height: '1px', backgroundColor: '#1a1a24', position: 'relative', overflow: 'hidden' }}>
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ duration: 0.7, ease: "circOut" }}
            style={{ width: '100%', height: '100%', backgroundColor: 'var(--accent)', position: 'absolute', top: 0, left: 0 }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default BootSequence;