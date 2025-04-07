
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import {
  Camera,
  Car,
  FileCheck,
  Hotel,
  Plane,
  ShieldCheck,
  Users,
  UtensilsCrossedIcon
} from 'lucide-react';
import Image from 'next/image';

const ServicesPage = () => {
  // Services
  const services = [
    {
      icon: <Hotel className='size-6' />,
      title: 'Hotel Booking',
      description: 'Find and book the best hotels across Bangladesh to suit your budget and preferences. We partner with trusted accommodations for a comfortable stay.'
    },
    {
      icon: <Plane className='size-6' />,
      title: 'Flight Booking',
      description: 'Book domestic and international flights with the best airlines at competitive prices. We handle all your air travel needs with ease.'
    },
    {
      icon: <Car className='size-6' />,
      title: 'Transportation',
      description: 'Reliable and comfortable transportation services during your entire trip in Bangladesh. Choose from cars, vans, or coaches based on your group size.'
    },
    {
      icon: <Users className='size-6' />,
      title: 'Tour Guides',
      description: 'Professional, multilingual tour guides who know Bangladesh inside out. Our guides are certified, experienced, and passionate about sharing local culture.'
    },
    {
      icon: <FileCheck className='size-6' />,
      title: 'Visa Assistance',
      description: 'Get expert assistance with visa applications and processing for your trip to Bangladesh. We simplify the bureaucratic procedures for a hassle-free journey.'
    },
    {
      icon: <ShieldCheck className='size-6' />,
      title: 'Travel Insurance',
      description: 'Protect your journey with comprehensive travel insurance options. We offer various coverage plans for medical emergencies, trip cancellations, and more.'
    },
    {
      icon: <Camera className='size-6' />,
      title: 'Photography Tours',
      description: 'Special tours designed for photography enthusiasts, with expert guides to help you capture the most stunning images of Bangladesh.'
    },
    {
      icon: <UtensilsCrossedIcon className='size-6' />,
      title: 'Culinary Experiences',
      description: 'Immerse yourself in authentic Bangladeshi cuisine through cooking classes, food tours, and dining experiences with local families.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1920&h=600&q=80"
            width={1920} height={600}
            alt="Bangladesh Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive travel services to make your Bangladesh experience smooth and memorable.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            subtitle="What We Offer"
            title="Our Premium Travel Services"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
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

      {/* Service Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            subtitle="How We Work"
            title="Our Service Process"
            centered
          />

          <div className="relative mt-16">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-forest/20"></div>

            {/* Process Steps */}
            <div className="space-y-24">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8">
                  <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
                  <p className="text-gray-600">We start by understanding your travel preferences, interests, budget, and schedule to create a tailored experience.</p>
                </div>
                <div className="my-4 md:my-0 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-forest text-white font-bold">1</div>
                <div className="flex-1 md:pl-8">
                  {/* Intentionally left blank for layout */}
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8">
                  {/* Intentionally left blank for layout */}
                </div>
                <div className="my-4 md:my-0 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-forest text-white font-bold">2</div>
                <div className="flex-1 md:pl-8">
                  <h3 className="text-xl font-bold mb-2">Custom Itinerary Development</h3>
                  <p className="text-gray-600">Our expert planners create a detailed itinerary with accommodations, transportation, activities, and experiences.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8">
                  <h3 className="text-xl font-bold mb-2">Confirmation and Preparation</h3>
                  <p className="text-gray-600">Once you approve the plan, we handle all bookings and provide comprehensive pre-departure information.</p>
                </div>
                <div className="my-4 md:my-0 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-forest text-white font-bold">3</div>
                <div className="flex-1 md:pl-8">
                  {/* Intentionally left blank for layout */}
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8">
                  {/* Intentionally left blank for layout */}
                </div>
                <div className="my-4 md:my-0 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-forest text-white font-bold">4</div>
                <div className="flex-1 md:pl-8">
                  <h3 className="text-xl font-bold mb-2">Journey Support</h3>
                  <p className="text-gray-600">During your trip, our local team provides 24/7 support, ensuring everything runs smoothly and addressing any issues.</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-8">
                  <h3 className="text-xl font-bold mb-2">Post-Travel Follow-up</h3>
                  <p className="text-gray-600">We collect your feedback to continuously improve our services and help plan your next adventure in Bangladesh.</p>
                </div>
                <div className="my-4 md:my-0 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-forest text-white font-bold">5</div>
                <div className="flex-1 md:pl-8">
                  {/* Intentionally left blank for layout */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&h=600&q=80"
                width={800} height={600}
                alt="Corporate Travel Services"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <SectionTitle
                subtitle="Corporate Solutions"
                title="Business Travel & Event Management"
              />
              <p className="text-gray-700 mb-4">
                Beyond leisure travel, Discover Bangladesh Tours offers specialized services for corporate clients. From business travel arrangements to complete MICE (Meetings, Incentives, Conferences, and Exhibitions) solutions, we handle all aspects of your corporate travel needs.
              </p>
              <p className="text-gray-700 mb-6">
                Our corporate services include venue selection, accommodation booking, transportation logistics, team building activities, and cultural experiences tailored for business groups of all sizes.
              </p>
              <Button className="bg-forest hover:bg-forest-light">
                Learn More About Corporate Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-forest text-white relative">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1920&h=600&q=80"
            alt="Bangladesh Landscape"
            width={1920} height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-pattern"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Our Services?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss how we can help make your Bangladesh journey unforgettable.
          </p>
          <Button size="lg" className="bg-white text-forest hover:bg-gray-100">
            Contact Us Now
          </Button>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;