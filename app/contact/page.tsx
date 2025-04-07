

import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Youtube
} from 'lucide-react';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1920&h=600&q=80"
            alt="Contact Us"
            width={1920} height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get in touch with our travel experts to plan your perfect Bangladesh adventure.
          </p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div>
              <SectionTitle
                subtitle="Get in Touch"
                title="We'd Love to Hear from You"
              />

              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <div className="bg-forest/10 p-3 rounded-full text-forest mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Our Location</h3>
                    <p className="text-gray-600">123 Travel Street, Gulshan</p>
                    <p className="text-gray-600">Dhaka 1212, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-forest/10 p-3 rounded-full text-forest mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-gray-600">+880 1234 56789</p>
                    <p className="text-gray-600">+880 9876 54321</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-forest/10 p-3 rounded-full text-forest mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-gray-600">info@discoverbangladesh.com</p>
                    <p className="text-gray-600">bookings@discoverbangladesh.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-forest/10 p-3 rounded-full text-forest mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Working Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-forest/10 p-3 rounded-full text-forest hover:bg-forest hover:text-white transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-forest/10 p-3 rounded-full text-forest hover:bg-forest hover:text-white transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-forest/10 p-3 rounded-full text-forest hover:bg-forest hover:text-white transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-forest/10 p-3 rounded-full text-forest hover:bg-forest hover:text-white transition-colors">
                    <Youtube className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-forest/50"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-forest/50"
                      placeholder="Your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-forest/50"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-forest/50"
                    placeholder="Subject of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-forest/50"
                    placeholder="Tell us about your travel plans or questions"
                  ></textarea>
                </div>

                <Button className="bg-forest hover:bg-forest-light w-full flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            subtitle="Our Location"
            title="Find Us on the Map"
            centered
          />

          <div className="mt-8 h-[400px] rounded-lg overflow-hidden shadow-lg">
            {/* This would normally be a Google Maps embed, using a placeholder image for now */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-forest mx-auto mb-4" />
                <p className="text-lg font-medium">Google Maps Embed Would Appear Here</p>
                <p className="text-gray-500">123 Travel Street, Gulshan, Dhaka 1212, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            subtitle="Quick Answers"
            title="Frequently Asked Questions"
            centered
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Do I need a visa to visit Bangladesh?</h3>
              <p className="text-gray-600">
                Most visitors require a visa to enter Bangladesh. The visa requirements vary depending on your nationality. We provide visa assistance services to help you obtain the necessary documentation for your trip.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">What is the best time to visit Bangladesh?</h3>
              <p className="text-gray-600">
                The best time to visit Bangladesh is during the winter season (November to February) when the weather is pleasant and dry. However, certain regions like Sylhet are beautiful during the monsoon season (June to September).
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Are your tours customizable?</h3>
              <p className="text-gray-600">
                Yes, all of our tour packages can be customized according to your preferences, schedule, and budget. We also offer completely tailor-made itineraries designed specifically for you.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept various payment methods including credit/debit cards, bank transfers, and mobile banking options. For international clients, we also accept PayPal and wire transfers.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline">View All FAQs</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-forest text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Bangladesh Adventure?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our travel experts are ready to help you plan an unforgettable journey through Bangladesh.
          </p>
          <Button size="lg" className="bg-white text-forest hover:bg-gray-100">
            Plan Your Trip Now
          </Button>
        </div>
      </section>
    </>
  );
};

export default ContactPage;