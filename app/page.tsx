'use client'
import DestinationCard from '@/components/DestinationCard';
import PackageCard from '@/components/PackageCard';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Calendar, Car, FileCheck, Hotel, MapPin, Phone, Plane, Search, Users } from 'lucide-react';
import Image from 'next/image';

const page = () => {
  // Featured Destinations
  const featuredDestinations = [
    {
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&h=500&q=80',
      name: "Cox's Bazar",
      location: 'Chittagong Division',
      attractions: 12,
      slug: 'coxs-bazar'
    },
    {
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&h=500&q=80',
      name: 'Sundarbans',
      location: 'Khulna Division',
      attractions: 15,
      slug: 'sundarbans'
    },
    {
      image: 'https://images.unsplash.com/photo-1666180765528-b0090962ba37?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Sylhet Tea Gardens',
      location: 'Sylhet Division',
      attractions: 8,
      slug: 'sylhet-tea-gardens'
    },
    {
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&h=500&q=80',
      name: 'Sajek Valley',
      location: 'Rangamati',
      attractions: 10,
      slug: 'sajek-valley'
    }
  ];

  // Popular Packages
  const popularPackages = [
    {
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&h=500&q=80',
      title: 'Sundarbans Explorer',
      days: 3,
      nights: 2,
      price: 249,
      rating: 4.8,
      reviews: 124,
      features: ['Boat Safari', 'Wildlife Spotting', 'Local Culture'],
      category: 'Adventure',
      slug: 'sundarbans-explorer'
    },
    {
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&h=500&q=80',
      title: "Cox's Bazar Beach Getaway",
      days: 4,
      nights: 3,
      price: 299,
      rating: 4.9,
      reviews: 218,
      features: ['Beach Activities', 'Seafood Dining', 'Sunset Views'],
      category: 'Beach',
      slug: 'coxs-bazar-beach-getaway'
    },
    {
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&h=500&q=80',
      title: 'Sylhet Tea Garden Tour',
      days: 2,
      nights: 1,
      price: 149,
      rating: 4.7,
      reviews: 86,
      features: ['Tea Gardens', 'Waterfalls', 'Nature Walks'],
      category: 'Nature',
      slug: 'sylhet-tea-garden-tour'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=150&h=150&q=80',
      name: 'Sarah Johnson',
      role: 'Tourist from USA',
      rating: 5,
      text: 'Our tour of the Sundarbans was absolutely incredible. The guides were knowledgeable and we even saw Bengal tigers! Highly recommended for nature lovers.'
    },
    {
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=150&h=150&q=80',
      name: 'David Chen',
      role: 'Photographer from Canada',
      rating: 5,
      text: "As a photographer, Bangladesh was a dream destination. Cox's Bazar offered stunning landscapes and the local guides from Discover Bangladesh knew all the best spots."
    },
    {
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=150&h=150&q=80',
      name: 'Emma Williams',
      role: 'Backpacker from Australia',
      rating: 4,
      text: "I had an amazing experience exploring Sylhet's tea gardens. The accommodation arranged by the tour company was excellent and the itinerary was perfect."
    }
  ];

  // Services
  const services = [
    {
      icon: <Hotel className='size-6' />,
      title: 'Hotel Booking',
      description: 'Find and book the best hotels across Bangladesh to suit your budget and preferences.'
    },
    {
      icon: <Plane className='size-6' />,
      title: 'Flight Booking',
      description: 'Book domestic and international flights with the best airlines at competitive prices.'
    },
    {
      icon: <Car className='size-6' />,
      title: 'Transportation',
      description: 'Reliable and comfortable transportation services during your entire trip in Bangladesh.'
    },
    {
      icon: <Users className='size-6' />,
      title: 'Tour Guides',
      description: 'Professional, multilingual tour guides who know Bangladesh inside out.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1920&h=1080&q=80"
            alt="Bangladesh Landscape"
            width={1920} height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-pattern"></div>
        </div>
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="animate-fade-in mb-4 text-4xl md:text-5xl lg:text-6xl font-bold">
              Discover the Beauty of Bangladesh
            </h1>
            <p className="animate-fade-in mb-8 text-lg opacity-90">
              Experience the soul of South Asia through breathtaking landscapes,
              vibrant cultures, and unforgettable adventures.
            </p>
            <div className="animate-fade-in flex flex-wrap gap-4">
              <Button size="lg" className="bg-forest hover:bg-forest-light">
                Explore Destinations
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-forest bg-transparent">
                View Tour Packages
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-lg p-6 -mt-20 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Where To</label>
                <div className="flex items-center border rounded-md p-2">
                  <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Destination"
                    className="flex-1 outline-none bg-transparent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">When</label>
                <div className="flex items-center border rounded-md p-2">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Select Date"
                    className="flex-1 outline-none bg-transparent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Tour Type</label>
                <select className="w-full border rounded-md p-2 outline-none bg-transparent">
                  <option value="">Any Type</option>
                  <option value="adventure">Adventure</option>
                  <option value="beach">Beach</option>
                  <option value="cultural">Cultural</option>
                  <option value="nature">Nature</option>
                </select>
              </div>

              <div className="flex items-end">
                <Button className="w-full flex items-center justify-center bg-forest hover:bg-forest-light">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            subtitle="Explore Bangladesh"
            title="Featured Destinations"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((destination, index) => (
              <DestinationCard
                key={index}
                image={destination.image}
                name={destination.name}
                location={destination.location}
                attractions={destination.attractions}
                slug={destination.slug}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline">View All Destinations</Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&h=600&q=80"
                width={800} height={600}
                alt="About Discover Bangladesh"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <SectionTitle
                subtitle="About Us"
                title="Your Gateway to Authentic Bangladesh Experiences"
              />
              <p className="text-gray-700 mb-6">
                Discover Bangladesh Tours is the leading tour operator specializing in authentic and immersive travel experiences throughout Bangladesh. With over 10 years of expertise, we&apos;ve helped thousands of travelers explore the hidden gems and iconic landmarks of our beautiful country.
              </p>
              <p className="text-gray-700 mb-6">
                Our team of experienced guides and travel experts are passionate about showcasing the rich cultural heritage, stunning landscapes, and warm hospitality that Bangladesh has to offer. Whether you&apos;re seeking adventure in the Sundarbans, relaxation on the beaches of Cox&apos;s Bazar, or cultural immersion in historic sites, we create tailored experiences that exceed expectations.
              </p>
              <Button>Learn More About Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            subtitle="Best Selling Tours"
            title="Popular Tour Packages"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularPackages.map((pkg, index) => (
              <PackageCard
                key={index}
                image={pkg.image}
                title={pkg.title}
                days={pkg.days}
                nights={pkg.nights}
                price={pkg.price}
                rating={pkg.rating}
                reviews={pkg.reviews}
                features={pkg.features}
                category={pkg.category}
                slug={pkg.slug}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline">View All Packages</Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            subtitle="Our Services"
            title="What We Offer"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-forest text-white">
        <div className="container-custom">
          <SectionTitle
            subtitle="Testimonials"
            title="What Our Clients Say"
            centered
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                image={testimonial.image}
                name={testimonial.name}
                role={testimonial.role}
                rating={testimonial.rating}
                text={testimonial.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1920&h=600&q=80"
            alt="Bangladesh Landscape"
            width={1920} height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-pattern"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Bangladesh?</h2>
            <p className="text-lg mb-8 opacity-90">
              Let us help you plan the perfect trip tailored to your interests, budget, and schedule.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-forest hover:bg-gray-100">
                <Phone className="h-5 w-5 mr-2" />
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-forest bg-transparent">
                <FileCheck className="h-5 w-5 mr-2" />
                Plan Your Trip
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;