import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ServerError {
  msg: string;
  param: string;
}

// Fix: Use import.meta.env for Vite or fallback for other bundlers
const API_URL = import.meta.env?.VITE_API_URL || 
               (typeof process !== 'undefined' && process.env?.REACT_APP_API_URL) || 
               'http://localhost:3000';

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [submitStatus, setSubmitStatus] = useState({
    status: 'idle', // 'idle', 'submitting', 'success', 'error'
    message: ''
  });

  const [serverErrors, setServerErrors] = useState<ServerError[]>([]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setSubmitStatus({
      status: 'submitting',
      message: ''
    });
    setServerErrors([]);

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.errors && Array.isArray(result.errors)) {
          setServerErrors(result.errors);
          setSubmitStatus({
            status: 'error',
            message: 'Please correct the errors and try again.'
          });
        } else {
          throw new Error(result.error || 'Something went wrong');
        }
      } else {
        setSubmitStatus({
          status: 'success',
          message: result.message || 'Your message has been sent successfully!'
        });
        reset();

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({
            status: 'idle',
            message: ''
          });
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        status: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Let's discuss your next project or opportunity!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-full text-blue-600 dark:text-blue-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:yasmarfaq51@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    yasmarfaq51@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-full text-blue-600 dark:text-blue-400">
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
                <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-full text-blue-600 dark:text-blue-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    Phone
                  </h3>
                  <a
                    href="tel:+2348037323011"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    +2348037323011
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
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
                    className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
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
                    className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
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
                  className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
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
                  className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Display server-side validation errors */}
              {serverErrors.length > 0 && (
                <div className="bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200 p-4 rounded-md">
                  <p className="font-semibold mb-1">Please fix the following errors:</p>
                  <ul className="list-disc pl-5">
                    {serverErrors.map((error, index) => (
                      <li key={index}>{error.msg}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Status Message */}
              {submitStatus.message && (
                <div
                  className={`p-4 rounded-md ${submitStatus.status === 'success'
                      ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200'
                      : 'bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200'
                    }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={submitStatus.status === 'submitting'}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {submitStatus.status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>

                {/* Add rate limit warning */}
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  Limited to 5 messages per 15 minutes. Please allow time for a response.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;