
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Award, Clock, ThumbsUp } from 'lucide-react';
import Image from 'next/image';

const AboutPage = () => {
  // Team members
  const teamMembers = [
    {
      name: 'Sarah Rahman',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bio: 'With over 15 years of experience in the tourism industry, Sarah founded Discover Bangladesh Tours to share her passion for her homeland with the world.'
    },
    {
      name: 'Ahmed Khan',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bio: 'Ahmed ensures all our tours run smoothly, managing our extensive network of local guides and partners across Bangladesh.'
    },
    {
      name: 'Nadia Islam',
      role: 'Chief Experience Officer',
      image: 'https://images.unsplash.com/photo-1558369553-4064d2f362db?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bio: 'Nadia is dedicated to creating unique experiences that showcase the authentic culture and natural beauty of Bangladesh.'
    }
  ];

  // Why choose us features
  const features = [
    {
      icon: <Award className="h-10 w-10" />,
      title: 'Expert Local Knowledge',
      description: 'Our team of guides are all local experts with deep knowledge of Bangladesh\'s history, culture and hidden gems.'
    },
    {
      icon: <ThumbsUp className="h-10 w-10" />,
      title: 'Personalized Service',
      description: 'We customize every tour to match your interests, travel style, and budget for a truly personal experience.'
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: '24/7 Support',
      description: 'Our support team is available around the clock to ensure your travel experience is smooth and hassle-free.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1920&h=600&q=80"
            width={1920} height={600}
            alt="Bangladesh Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover the story behind Discover Bangladesh Tours and our passion for showcasing the beauty of Bangladesh.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionTitle
                subtitle="Our Story"
                title="Bringing Bangladesh to the World"
              />
              <p className="text-gray-700 mb-4">
                Founded in 2012, Discover Bangladesh Tours grew from a simple passion: showcasing the incredible natural beauty, rich cultural heritage, and warm hospitality of Bangladesh to the world.
              </p>
              <p className="text-gray-700 mb-4">
                What began as a small operation with just two tour guides has blossomed into Bangladesh&apos;s premier travel agency, serving thousands of local and international travelers each year.
              </p>
              <p className="text-gray-700 mb-4">
                Our mission remains unchanged: to create authentic, sustainable travel experiences that benefit both our visitors and the local communities they encounter during their journey.
              </p>
              <p className="text-gray-700 mb-6">
                Today, with a team of over 30 dedicated professionals, we continue to explore new destinations, develop unique tour concepts, and provide exceptional service to adventurers from around the globe.
              </p>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&h=600&q=80"
                width={800} height={600}
                alt="Bangladesh landscape"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            subtitle="Meet The Team"
            title="The Faces Behind Your Perfect Trip"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={475} height={250}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-forest mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            subtitle="Why Choose Us"
            title="What Sets Us Apart"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {features.map((feature, index) => (
              <div key={index} className="p-6 border rounded-lg text-center">
                <div className="inline-flex items-center justify-center bg-forest/10 p-4 rounded-full text-forest mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore Bangladesh with Us?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join the thousands of travelers who have discovered the beauty of Bangladesh with our expert guidance.
          </p>
          <Button size="lg" className="bg-white text-forest hover:bg-gray-100">
            Start Planning Your Journey
          </Button>
        </div>
      </section>
    </>
  );
};

export default AboutPage;