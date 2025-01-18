import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { PERSONAL_DATA, SOCIAL_LINKS } from '@/lib/constants';
import Section from '../ui/Section';
import { SectionIcons } from '@/utils/icons';

type FormData = {
    name: string;
    email: string;
    message: string;
};

const Contact = () => {
    useEffect(() => {
        // Initialize EmailJS
        const initEmailJS = () => {
            if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
                try {
                    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
                    console.log('EmailJS initialized successfully');
                } catch (error) {
                    console.error('Failed to initialize EmailJS:', error);
                }
            } else {
                console.error('EmailJS public key is missing');
            }
        };

        initEmailJS();
    }, []);

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        // Validate environment variables
        if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
            !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
            !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
            setErrorMessage('Email service is not properly configured. Please contact me directly.');
            setSubmitStatus('error');
            setIsSubmitting(false);
            return;
        }

        try {
            console.log('Attempting to send email...');
            const response = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: PERSONAL_DATA.name,
                    to_email: PERSONAL_DATA.email,
                }
            );

            console.log('Email sent successfully:', response);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Failed to send email:', error);
            setErrorMessage(
                error instanceof Error
                    ? `Error: ${error.message}`
                    : 'Failed to send message. Please try again or contact me directly.'
            );
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <Section id="contact" className="py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="heading text-center">
                    {SectionIcons.contact} Get in Touch
                </h2>
                <p className="subheading text-center mt-4 mb-12">
                    Have a question or want to work together?
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="soft-bg p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-text-default">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-text-default">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-text-default">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="form-input resize-none"
                                    placeholder="Your message"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn btn-primary disabled:opacity-50"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                            {submitStatus === 'success' && (
                                <p className="text-accent-green text-sm text-center">
                                    Message sent successfully! I'll get back to you soon.
                                </p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="text-red-500 text-sm text-center">
                                    {errorMessage || `Failed to send message. Please try again or contact me directly at ${PERSONAL_DATA.email}`}
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="soft-bg p-6">
                            <h3 className="text-lg font-semibold mb-4 text-text-default">Contact Information</h3>
                            <div className="space-y-4">
                                <p className="flex items-center space-x-2 text-text-light">
                                    <span>{SectionIcons.location}</span>
                                    <span>{PERSONAL_DATA.location}</span>
                                </p>
                                <p className="flex items-center space-x-2">
                                    <span>{SectionIcons.email}</span>
                                    <a
                                        href={`mailto:${PERSONAL_DATA.email}`}
                                        className="text-text-light hover:text-primary transition-colors"
                                    >
                                        {PERSONAL_DATA.email}
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="soft-bg p-6">
                            <h3 className="text-lg font-semibold mb-4 text-text-default">Connect on Social Media</h3>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={SOCIAL_LINKS.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={SOCIAL_LINKS.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href={SOCIAL_LINKS.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary"
                                >
                                    Twitter
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
};

export default Contact;