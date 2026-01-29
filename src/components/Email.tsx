import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

interface CustomForm extends HTMLFormElement {
  elements: FormElements;
}

const Email = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<CustomForm>): Promise<void> => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget as CustomForm;
    const data = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/xdazgaoy', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
        // Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={status === 'sending'}
            className="w-full px-4 py-3 rounded-lg bg-neutral-100/50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white disabled:opacity-50 transition-all"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={status === 'sending'}
            className="w-full px-4 py-3 rounded-lg bg-neutral-100/50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white disabled:opacity-50 transition-all"
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          disabled={status === 'sending'}
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-neutral-100/50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white disabled:opacity-50 transition-all resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      {/* Submit button */}
      <div className="text-center">
        <motion.button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full text-lg font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={status !== 'sending' ? { scale: 1.04 } : {}}
          whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
        >
          {status === 'sending' ? (
            <>
              <div className="w-5 h-5 border-2 border-white dark:border-neutral-900 border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </motion.button>
      </div>

      {/* Status messages */}
      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-4 py-3 rounded-lg"
        >
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-4 py-3 rounded-lg"
        >
          <AlertCircle className="w-5 h-5" />
          <span className="font-medium">Failed to send message. Please try again or email me directly.</span>
        </motion.div>
      )}
    </form>
  );
};

export default Email;