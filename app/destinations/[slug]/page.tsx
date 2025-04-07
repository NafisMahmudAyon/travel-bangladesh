import Gallery from "@/components/Gallery";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Star, Users } from 'lucide-react';
import { Metadata } from "next";
import Image from "next/image";

const destinations = [
  {
    id: '1',
    name: "Cox's Bazar",
    slug: 'coxs-bazar',
    location: 'Chittagong Division',
    description: "Cox's Bazar is renowned for having the world's longest natural sea beach, stretching an impressive 120 kilometers along the Bay of Bengal. This breathtaking destination is a paradise for beach lovers and offers stunning sunrises and sunsets. The sandy beaches are perfect for relaxing, swimming, and various water activities. Beyond the beach, visitors can explore nearby attractions including Himchari National Park, Inani Beach, and the Buddhist temples at Ramu.",
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&h=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1520520731457-9283dd14aa66?auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=1200&h=800&q=80'
    ],
    attractions: 12,
    category: 'Beaches',
    rating: 4.9,
    reviews: 650,
    bestTimeToVisit: 'November to March',
    thingsToDo: [
      'Relax on the world\'s longest natural sea beach',
      'Visit Himchari National Park for stunning waterfalls',
      'Explore the marine life at Inani Beach',
      'Visit the Ramu Buddhist temples',
      'Shop for local handicrafts',
      'Try fresh seafood at local restaurants'
    ],
    nearbyDestinations: [
      { name: 'Saint Martin Island', slug: 'saint-martin-island' },
      { name: 'Teknaf', slug: 'teknaf' },
      { name: 'Maheshkhali', slug: 'maheshkhali' }
    ]
  },
  {
    id: '2',
    name: 'Sundarbans',
    slug: 'sundarbans',
    location: 'Khulna Division',
    description: 'The Sundarbans is the largest mangrove forest in the world and a UNESCO World Heritage Site. It is home to the Bengal tiger and numerous species of birds, reptiles, and other wildlife. The forest is crisscrossed by a network of rivers and creeks, creating a unique ecosystem. Boat safaris are the primary way to explore this magnificent forest, offering visitors a chance to witness its rich biodiversity and stunning natural beauty.',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1200&h=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1552083375-1447ce886485?auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1584551882459-38261cebc521?auto=format&fit=crop&w=1200&h=800&q=80'
    ],
    attractions: 15,
    category: 'Nature',
    rating: 4.8,
    reviews: 480,
    bestTimeToVisit: 'December to February',
    thingsToDo: [
      'Take a boat safari through the mangrove forests',
      'Visit the Karamjal Wildlife Center',
      'Try to spot the Royal Bengal Tiger',
      'Observe diverse bird species and wildlife',
      'Visit Kotka Beach',
      'Experience local village life'
    ],
    nearbyDestinations: [
      { name: 'Khulna', slug: 'khulna' },
      { name: 'Mongla', slug: 'mongla' },
      { name: 'Bagerhat', slug: 'bagerhat' }
    ]
  },
  {
    id: '3',
    name: 'Sylhet Tea Gardens',
    slug: 'sylhet-tea-gardens',
    location: 'Sylhet Division',
    description: 'Sylhet is known for its picturesque tea gardens that stretch across rolling hills as far as the eye can see. The lush green landscapes offer a serene and relaxing environment for visitors. Beyond the tea gardens, Sylhet is home to beautiful waterfalls, natural pools, and ancient forests. The region is also known for its rich cultural heritage and delicious local cuisine.',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&h=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1602601995210-33b129f45822?auto=format&fit=crop&w=1200&h=800&q=80'
    ],
    attractions: 8,
    category: 'Nature',
    rating: 4.7,
    reviews: 320,
    bestTimeToVisit: 'Year-round, best in April to October',
    thingsToDo: [
      'Visit Lawachara National Park',
      'Explore the tea gardens and factories',
      'Hike to Ratargul Swamp Forest',
      'Visit Jaflong and see the stone collections',
      'Experience the serene beauty of Lalakhal',
      'Visit the Shrine of Hazrat Shah Jalal'
    ],
    nearbyDestinations: [
      { name: 'Jaflong', slug: 'jaflong' },
      { name: 'Ratargul', slug: 'ratargul' },
      { name: 'Srimangal', slug: 'srimangal' }
    ]
  },
  {
    id: '4',
    name: 'Sajek Valley',
    slug: 'sajek-valley',
    location: 'Rangamati',
    description: 'Sajek Valley is a remote mountainous area located in the Chittagong Hill Tracts. Known as the "Roof of Rangamati," it offers breathtaking views of rolling hills, dense forests, and tribal villages. The valley is famous for its stunning sunrises and sunsets, where clouds often float below the mountain peaks, creating a surreal experience. Visitors can experience the unique culture of indigenous tribal communities and enjoy the pristine natural beauty.',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&h=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&w=1200&h=800&q=80'
    ],
    attractions: 10,
    category: 'Adventure',
    rating: 4.8,
    reviews: 280,
    bestTimeToVisit: 'October to March',
    thingsToDo: [
      'Witness the stunning sunrise and sunset views',
      'Experience the cloud sea phenomenon',
      'Visit local tribal villages',
      'Try traditional tribal cuisine',
      'Hike through mountain trails',
      'Stay in traditional cottages'
    ],
    nearbyDestinations: [
      { name: 'Rangamati', slug: 'rangamati' },
      { name: 'Khagrachari', slug: 'khagrachari' },
      { name: 'Bandarban', slug: 'bandarban' }
    ]
  }
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {

  const { slug } = await params
  const packageData = destinations.find(dst => dst.slug === slug);

  if (!packageData) {
    return {
      title: 'Package Not Found',
      description: 'The requested tour package could not be found'
    };
  }

  return {
    title: packageData.name,
    description: packageData.description
  };
}

export async function generateStaticParams() {
  return destinations.map(dst => ({
    slug: dst.slug
  }));
}

export default async function DestinationDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug
  const destination = destinations.find(dest => dest.slug === slug);

  if (!destination) {
    return (
      <>
        <div className="container-custom py-20">
          <h1 className="text-2xl font-bold">Destination not found</h1>
          <p className="mt-4">The destination you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Button className="mt-6" onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </>
    );
  }


  return (
    <>
      {/* Hero Section */}
      <section className="relative py-28 md:py-40">
        <div className="absolute inset-0">
          <Image
            src={destination.image}
            alt={destination.name}
            width={1920}
            height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{destination.name}</h1>
          <div className="flex items-center text-white mb-6">
            <MapPin className="h-5 w-5 mr-2" />
            <span className="text-lg">{destination.location}</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm text-white">
              <Star className="h-4 w-4 mr-1 text-yellow-400" />
              {destination.rating} ({destination.reviews} reviews)
            </span>
            <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm text-white">
              {destination.category}
            </span>
            <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm text-white">
              <Calendar className="h-4 w-4 mr-1" />
              Best time: {destination.bestTimeToVisit}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Destination Details */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="mb-10">
                <SectionTitle
                  subtitle="About The Destination"
                  title="Destination Overview"
                />
                <p className="text-lg text-gray-700 leading-relaxed">
                  {destination.description}
                </p>
              </div>

              {/* Gallery */}
              <div className="mb-10">
                <SectionTitle
                  subtitle="Visual Tour"
                  title="Destination Gallery"
                />
                <Gallery gallery={destination.gallery} title="{selectedPackage.title}" />

              </div>

              {/* Things to Do */}
              <div className="mb-10">
                <SectionTitle
                  subtitle="Activities & Experiences"
                  title="Things to Do"
                />
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destination.thingsToDo.map((activity, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-1 text-forest">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div>
              {/* Quick Facts Card */}
              <Card className="mb-6 shadow-md">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Destination Quick Facts</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-700">
                      <MapPin className="h-5 w-5 mr-3 text-forest" />
                      <span><strong>Location:</strong> {destination.location}</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Star className="h-5 w-5 mr-3 text-forest" />
                      <span><strong>Rating:</strong> {destination.rating} ({destination.reviews} reviews)</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Clock className="h-5 w-5 mr-3 text-forest" />
                      <span><strong>Best Time to Visit:</strong> {destination.bestTimeToVisit}</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <Users className="h-5 w-5 mr-3 text-forest shrink-0 mt-1" />
                      <span><strong>Attractions:</strong> {destination.attractions} major attractions</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="h-5 w-5 mr-3 text-forest flex items-center justify-center">
                        <span className="text-sm font-bold">C</span>
                      </div>
                      <span><strong>Category:</strong> {destination.category}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="mb-6 bg-forest text-white">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Explore {destination.name}</h3>
                  <p className="mb-4">Ready to experience the beauty of {destination.name}? Check out our curated tour packages!</p>
                  <Button className="w-full bg-white text-forest hover:bg-gray-100">
                    View Tour Packages
                  </Button>
                </CardContent>
              </Card>

              {/* Nearby Destinations */}
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Nearby Destinations</h3>
                  <ul className="space-y-3">
                    {destination.nearbyDestinations.map((nearby, index) => (
                      <li key={index}>
                        <a
                          href={`/destinations/${nearby.slug}`}
                          className="flex items-center text-gray-700 hover:text-forest transition-colors"
                        >
                          <div className="mr-3 text-forest">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                          {nearby.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Packages Section */}
      {/* <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            subtitle="Explore More"
            title={`Top Packages for ${destination.name}`}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            // This would typically be a map over related packages
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={destination.gallery[0]}
                  alt="Tour Package"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{destination.name} Explorer</h3>
                <p className="text-gray-700 mb-4">Experience the best of {destination.name} with our most popular package.</p>
                <div className="flex justify-between items-center">
                  <span className="text-forest font-bold">From $199</span>
                  <Button variant="outline" className="border-forest text-forest hover:bg-forest hover:text-white">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={destination.gallery[1]}
                  alt="Tour Package"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{destination.name} Adventure</h3>
                <p className="text-gray-700 mb-4">For thrill-seekers looking to experience the adventurous side of {destination.name}.</p>
                <div className="flex justify-between items-center">
                  <span className="text-forest font-bold">From $249</span>
                  <Button variant="outline" className="border-forest text-forest hover:bg-forest hover:text-white">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={destination.gallery[2]}
                  alt="Tour Package"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Luxury {destination.name} Retreat</h3>
                <p className="text-gray-700 mb-4">Indulge in our premium package with luxury accommodations and exclusive experiences.</p>
                <div className="flex justify-between items-center">
                  <span className="text-forest font-bold">From $349</span>
                  <Button variant="outline" className="border-forest text-forest hover:bg-forest hover:text-white">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore {destination.name}?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let us help you plan the perfect trip to experience everything this incredible destination has to offer.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-forest hover:bg-forest-light">
              Contact Our Travel Experts
            </Button>
            <Button variant="outline" className="border-forest text-forest hover:bg-forest/10">
              View All {destination.name} Packages
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

