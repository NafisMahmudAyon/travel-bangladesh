

import PackageCard from '@/components/PackageCard';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const PackagesPage = () => {
  // Package types
  const packageTypes = ['All Packages', 'Adventure', 'Beach', 'Cultural', 'Nature', 'Family', 'Luxury'];

  // Tour packages
  const packages = [
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
      image: 'https://images.unsplash.com/photo-1666180765528-b0090962ba37?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Sylhet Tea Garden Tour',
      days: 2,
      nights: 1,
      price: 149,
      rating: 4.7,
      reviews: 86,
      features: ['Tea Gardens', 'Waterfalls', 'Nature Walks'],
      category: 'Nature',
      slug: 'sylhet-tea-garden-tour'
    },
    {
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&h=500&q=80',
      title: 'Cultural Heritage of Bangladesh',
      days: 5,
      nights: 4,
      price: 399,
      rating: 4.6,
      reviews: 92,
      features: ['Historical Sites', 'Local Cuisine', 'Cultural Shows'],
      category: 'Cultural',
      slug: 'cultural-heritage-bangladesh'
    },
    {
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&h=500&q=80',
      title: 'Sajek Valley Adventure',
      days: 3,
      nights: 2,
      price: 279,
      rating: 4.8,
      reviews: 104,
      features: ['Mountain Views', 'Hiking Trails', 'Tribal Villages'],
      category: 'Adventure',
      slug: 'sajek-valley-adventure'
    },
    {
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&h=500&q=80',
      title: 'Saint Martin Island Escape',
      days: 3,
      nights: 2,
      price: 329,
      rating: 4.9,
      reviews: 156,
      features: ['Snorkeling', 'Beach Camping', 'Coral Reefs'],
      category: 'Beach',
      slug: 'saint-martin-island-escape'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&h=600&q=80"
            alt="Bangladesh Tours"
            width={1920} height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Tour Packages</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Expertly crafted travel experiences to help you discover the best of Bangladesh.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            subtitle="Explore Our Tours"
            title="Popular Tour Packages"
          />

          {/* Package Type Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {packageTypes.map((type, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-forest hover:bg-forest-light" : ""}
              >
                {type}
              </Button>
            ))}
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
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
        </div>
      </section>

      {/* Featured Package */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionTitle
                subtitle="Featured Package"
                title="Sundarbans Explorer - Ultimate Wildlife Adventure"
              />
              <div className="mb-6 flex items-center text-sm">
                <span className="bg-forest/10 text-forest px-3 py-1 rounded mr-3">Adventure</span>
                <span className="text-gray-500 mr-3">3 Days 2 Nights</span>
                <span className="flex items-center text-amber-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1">4.8 (124 reviews)</span>
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                Embark on an unforgettable journey through the world&apos;s largest mangrove forest and UNESCO World Heritage site. This package offers an immersive experience into the unique ecosystem of the Sundarbans.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Highlights:</strong>
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>Boat safari through narrow creeks and rivers</li>
                <li>Wildlife spotting including Bengal tigers, spotted deer, and crocodiles</li>
                <li>Bird watching with over 300 species</li>
                <li>Visit to local villages and forest communities</li>
                <li>Sunset views over the Bay of Bengal</li>
              </ul>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="text-2xl font-bold text-forest">$249</span>
                <span className="text-gray-500">per person</span>
              </div>
              <Button className="bg-forest hover:bg-forest-light">View Package Details</Button>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&h=600&q=80"
                width={800} height={600}
                alt="Sundarbans Explorer"
                className="rounded-lg shadow-lg"
              />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Looking for a Customized Package?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let us create a personalized tour package based on your preferences, budget, and schedule.
          </p>
          <Button size="lg" className="bg-white text-forest hover:bg-gray-100">
            Request a Custom Package
          </Button>
        </div>
      </section>
    </>
  );
};

export default PackagesPage;