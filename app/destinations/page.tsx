
import DestinationCard from '@/components/DestinationCard';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const DestinationsPage = () => {
  // Destination categories
  const categories = ['All', 'Nature', 'Adventure', 'Heritage', 'Beaches', 'Religious'];

  // Featured Destinations
  const destinations = [
    {
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&h=500&q=80',
      name: "Cox's Bazar",
      location: 'Chittagong Division',
      attractions: 12,
      slug: 'coxs-bazar',
      category: 'Beaches'
    },
    {
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&h=500&q=80',
      name: 'Sundarbans',
      location: 'Khulna Division',
      attractions: 15,
      slug: 'sundarbans',
      category: 'Nature'
    },
    {
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&h=500&q=80',
      name: 'Sylhet Tea Gardens',
      location: 'Sylhet Division',
      attractions: 8,
      slug: 'sylhet-tea-gardens',
      category: 'Nature'
    },
    {
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&h=500&q=80',
      name: 'Sajek Valley',
      location: 'Rangamati',
      attractions: 10,
      slug: 'sajek-valley',
      category: 'Adventure'
    },
    {
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&h=500&q=80',
      name: 'Saint Martin Island',
      location: 'Bay of Bengal',
      attractions: 7,
      slug: 'saint-martin-island',
      category: 'Beaches'
    },
    {
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&h=500&q=80',
      name: 'Bandarban',
      location: 'Chittagong Division',
      attractions: 9,
      slug: 'bandarban',
      category: 'Adventure'
    },
    {
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&h=500&q=80',
      name: 'Srimangal',
      location: 'Sylhet Division',
      attractions: 6,
      slug: 'srimangal',
      category: 'Nature'
    },
    {
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&h=500&q=80',
      name: 'Bagerhat',
      location: 'Khulna Division',
      attractions: 5,
      slug: 'bagerhat',
      category: 'Heritage'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&h=600&q=80"
            alt="Bangladesh Destinations"
            width={1920} height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Destinations</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover the most breathtaking locations across Bangladesh, from pristine beaches to lush forests.
          </p>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            subtitle="Explore Bangladesh"
            title="Discover Our Featured Destinations"
          />

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-forest hover:bg-forest-light" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
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
        </div>
      </section>

      {/* Featured Destination (Bangladesh Highlight) */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&h=600&q=80"
                width={800} height={600}
                alt="Cox's Bazar Beach"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <SectionTitle
                subtitle="Featured Destination"
                title="Cox's Bazar - The Longest Sea Beach"
              />
              <p className="text-gray-700 mb-4">
                Cox&apos;s Bazar boasts the world&apos;s longest natural sandy beach, stretching an impressive 120 kilometers along the Bay of Bengal. This breathtaking destination offers visitors stunning sunrises and sunsets, fresh seafood, and a variety of water activities.
              </p>
              <p className="text-gray-700 mb-6">
                Beyond the beach, explore nearby attractions including Himchari National Park, Inani Beach, and the Buddhist temples at Ramu. With its perfect blend of natural beauty and cultural experiences, Cox&apos;s Bazar represents the ultimate Bangladesh coastal experience.
              </p>
              <Button className="bg-forest hover:bg-forest-light">
                Explore Cox&apos;s Bazar Packages
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Can&apos;t Decide Where to Go?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let our travel experts help you craft the perfect Bangladesh itinerary based on your interests.
          </p>
          <Button size="lg" className="bg-white text-forest hover:bg-gray-100">
            Get a Custom Travel Plan
          </Button>
        </div>
      </section>
    </>
  );
};

export default DestinationsPage;