"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, XCircle } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success');
        setMessage('Thank you for subscribing to our newsletter!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Please enter a valid email address.');
      }
    }, 1500);
  };

  return (
    <section className="relative max-w-[1440px] mx-auto">
      <div className="absolute inset-0 bg-[#F9F1E7] -skew-y-3 transform origin-left" />
      
      <div className="relative px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay in the Loop
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, design inspiration,
            and early access to new collections.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-6 py-4 rounded-full bg-white border-2 border-transparent
                  focus:border-[#B88E2F] focus:outline-none shadow-sm text-gray-900
                  placeholder-gray-400"
                disabled={status === 'loading'}
              />
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={status === 'loading'}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#B88E2F] text-white
                  px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#A07B2A]
                  transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Send className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <>
                    Subscribe
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </div>

            {/* Status Messages */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: status !== 'idle' ? 1 : 0,
                y: status !== 'idle' ? 0 : 10
              }}
              className="mt-4"
            >
              {status === 'success' && (
                <p className="text-green-600 flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  {message}
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-600 flex items-center justify-center gap-2">
                  <XCircle className="w-5 h-5" />
                  {message}
                </p>
              )}
            </motion.div>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-sm text-gray-500"
          >
            <p>By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
            <p className="mt-2">We promise not to spam your inbox. You can unsubscribe at any time.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 