import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: string;
    text: string;
  }>({ type: '', text: '' });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Your message has been sent successfully!',
      });
      reset();
      setTimeout(() => {
        setSubmitMessage({ type: '', text: '' });
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Get In <span className="text-indigo-600 dark:text-indigo-400">Touch</span>
        </motion.h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Let's discuss your next project or opportunity!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-1"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-800 rounded-full text-indigo-600 dark:text-indigo-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:yasmarfaq51@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    yasmarfaq51@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-800 rounded-full text-indigo-600 dark:text-indigo-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">Kaduna, Nigeria</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-800 rounded-full text-indigo-600 dark:text-indigo-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    Phone
                  </h3>
                  <a
                    href="tel:+2348037323011"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    +2348037323011
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    id="name"
                    className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 ${
                      errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email address',
                      },
                    })}
                    id="email"
                    className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 ${
                      errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  {...register('subject', { required: 'Subject is required' })}
                  id="subject"
                  className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 ${
                    errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 ${
                    errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              {submitMessage.text && (
                <motion.div
                  className={`p-4 rounded-md ${
                    submitMessage.type === 'success'
                      ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200'
                      : 'bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {submitMessage.text}
                </motion.div>
              )}
              <div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;