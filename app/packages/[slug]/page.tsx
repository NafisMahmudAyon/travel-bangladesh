import Gallery from '@/components/Gallery';
import SectionTitle from '@/components/SectionTitle';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bed, Calendar, ChevronRight, MapPin, Star, Users } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

// Define types
type Itinerary = {
  day: number;
  title: string;
  description: string;
  activities: string[];
};

type TourPackage = {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  gallery: string[];
  days: number;
  nights: number;
  price: number;
  category: string;
  rating: number;
  reviews: number;
  itinerary: Itinerary[];
  inclusions: string[];
  exclusions: string[];
  featured: boolean;
};

// Mock data - In a real app, this would be fetched from an API or database
const packages: TourPackage[] = [
  {
    id: '1',
    title: 'Sundarbans Explorer',
    slug: 'sundarbans-explorer',
    description: 'Embark on an unforgettable journey through the world\'s largest mangrove forest and UNESCO World Heritage site. This package offers an immersive experience into the unique ecosystem of the Sundarbans.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&h=500&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551615577-1c7e180a77ac?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1607441078533-77ba814b1e5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1706459671568-9809c9d13430?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    days: 3,
    nights: 2,
    price: 249,
    category: 'Adventure',
    rating: 4.8,
    reviews: 124,
    itinerary: [
      {
        day: 1,
        title: 'Arrival and Boat Safari',
        description: 'Arrive at Mongla port and board our comfortable houseboat. After lunch, enjoy an afternoon boat safari through narrow creeks, spotting wildlife like spotted deer and crocodiles.',
        activities: ['Transfer to houseboat', 'Lunch on board', 'Afternoon boat safari', 'Sunset viewing', 'Dinner and overnight stay on houseboat']
      },
      {
        day: 2,
        title: 'Wildlife Exploration',
        description: 'Full day devoted to exploring the Sundarbans. Take morning and afternoon boat safaris, visit a forest watch tower, and explore walking trails with experienced guides.',
        activities: ['Early morning boat safari', 'Visit to forest tower', 'Guided nature walk', 'Wildlife spotting', 'Evening cultural program']
      },
      {
        day: 3,
        title: 'Village Visit and Departure',
        description: 'Visit a local village to learn about life on the edge of the mangrove forest. After lunch, begin return journey to Mongla port.',
        activities: ['Morning boat ride', 'Visit to local village', 'Traditional lunch', 'Return to Mongla port', 'Departure']
      }
    ],
    inclusions: [
      'All transportation including pickup and drop',
      'Accommodation on houseboat (2 nights)',
      'All meals as per itinerary',
      'Experienced naturalist guide',
      'All forest permits and entry fees',
      'Boat safaris and activities as mentioned',
      'Bottled water and refreshments'
    ],
    exclusions: [
      'Personal expenses',
      'Travel insurance',
      'Camera fees',
      'Alcoholic beverages',
      'Tips and gratuities',
      'Anything not mentioned in inclusions'
    ],
    featured: true
  },
  {
    id: '2',
    title: "Cox's Bazar Beach Getaway",
    slug: 'coxs-bazar-beach-getaway',
    description: 'Enjoy a relaxing vacation at the world\'s longest natural sea beach. This package includes comfortable beachfront accommodation, water activities, and visits to nearby attractions.',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&h=500&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1687340148555-e060afb6aee1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1619177383949-f03975e50b19?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1587222318667-31212ce2828d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    days: 4,
    nights: 3,
    price: 299,
    category: 'Beach',
    rating: 4.9,
    reviews: 218,
    itinerary: [
      {
        day: 1,
        title: 'Arrival at Cox\'s Bazar',
        description: 'Arrive at Cox\'s Bazar and transfer to your beachfront hotel. Afternoon free to relax on the beach.',
        activities: ['Airport/bus station pickup', 'Hotel check-in', 'Beach relaxation', 'Welcome dinner']
      },
      {
        day: 2,
        title: 'Beach Day & Sunset Point',
        description: 'Full day to enjoy the beach. Optional water activities available. Evening visit to Laboni Point to watch the sunset.',
        activities: ['Breakfast at hotel', 'Beach activities', 'Optional jet skiing/parasailing', 'Sunset at Laboni Point', 'Seafood dinner']
      },
      {
        day: 3,
        title: 'Inani Beach & Marine Drive',
        description: 'Day trip to Inani Beach with its unique coral rocks. Drive along the scenic Marine Drive.',
        activities: ['Breakfast at hotel', 'Drive to Inani Beach', 'Picnic lunch', 'Marine Drive tour', 'Return to hotel']
      },
      {
        day: 4,
        title: 'Himchari National Park & Departure',
        description: 'Morning visit to Himchari National Park to see the waterfall. Afternoon departure from Cox\'s Bazar.',
        activities: ['Breakfast at hotel', 'Himchari National Park visit', 'Hotel checkout', 'Transfer to airport/bus station']
      }
    ],
    inclusions: [
      'Accommodation in beachfront hotel (3 nights)',
      'Daily breakfast and dinner',
      'All transfers in private AC vehicle',
      'Sightseeing as per itinerary',
      'English speaking guide',
      'All applicable taxes'
    ],
    exclusions: [
      'Flights or bus tickets to/from Cox\'s Bazar',
      'Lunch',
      'Water sports activities',
      'Personal expenses',
      'Tips and gratuities',
      'Travel insurance'
    ],
    featured: false
  },
  {
    id: '3',
    title: 'Sylhet Tea Garden Tour',
    slug: 'sylhet-tea-garden-tour',
    description: 'Immerse yourself in the lush green landscapes of Bangladesh\'s famous tea gardens. This refreshing getaway offers stunning views, serene walks through tea plantations, and visits to magnificent waterfalls.',
    image: 'https://images.unsplash.com/photo-1666180765528-b0090962ba37?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gallery: [
      'https://images.unsplash.com/photo-1627893528424-792f89b0f2d5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1667120205301-a2a3a886886e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1643001607577-0a0332e79aab?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    days: 2,
    nights: 1,
    price: 149,
    category: 'Nature',
    rating: 4.7,
    reviews: 86,
    itinerary: [
      {
        day: 1,
        title: 'Tea Estate Exploration',
        description: 'Arrive in Sylhet and check into your resort. After lunch, explore the scenic tea gardens and learn about tea processing at a local factory. Enjoy the sunset over the rolling hills of tea plantations.',
        activities: ['Hotel check-in', 'Lunch at local restaurant', 'Tea garden walking tour', 'Tea factory visit', 'Sunset viewing', 'Dinner at resort']
      },
      {
        day: 2,
        title: 'Waterfalls and Departure',
        description: 'After breakfast, visit the magnificent Madhabkunda waterfall. Enjoy a refreshing morning amidst natural beauty before heading back to Sylhet for departure.',
        activities: ['Breakfast at resort', 'Visit to Madhabkunda waterfall', 'Nature walk', 'Lunch', 'Return to Sylhet', 'Departure']
      }
    ],
    inclusions: [
      'Accommodation in a comfortable resort (1 night)',
      'All meals as per itinerary',
      'Transportation in air-conditioned vehicle',
      'English-speaking guide',
      'Entry fees to tea factory',
      'Welcome drink on arrival',
      'Bottled water during excursions'
    ],
    exclusions: [
      'Personal expenses',
      'Camera fees',
      'Tips and gratuities',
      'Travel insurance',
      'Any activities not mentioned in itinerary'
    ],
    featured: true
  },
  {
    id: '4',
    title: 'Cultural Heritage of Bangladesh',
    slug: 'cultural-heritage-bangladesh',
    description: 'Discover the rich cultural tapestry of Bangladesh through this comprehensive heritage tour. Visit historical monuments, experience traditional arts and crafts, and savor authentic local cuisine across multiple regions.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&h=500&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503780960844-c1cccf4e84b1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1608835291093-394b0c943a75?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1617259922632-ec3b2f474725?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    days: 5,
    nights: 4,
    price: 399,
    category: 'Cultural',
    rating: 4.6,
    reviews: 92,
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Dhaka',
        description: 'Arrive in Dhaka and check into your hotel. Visit Lalbagh Fort and the National Museum to begin your cultural exploration of Bangladesh.',
        activities: ['Airport pickup', 'Hotel check-in', 'Visit to Lalbagh Fort', 'National Museum tour', 'Welcome dinner with cultural performance']
      },
      {
        day: 2,
        title: 'Old Dhaka Exploration',
        description: 'Full day exploring the historical sites of Old Dhaka, including Ahsan Manzil, Star Mosque, and Armenian Church. Experience rickshaw ride through the narrow streets.',
        activities: ['Breakfast at hotel', 'Visit to Ahsan Manzil (Pink Palace)', 'Star Mosque tour', 'Traditional lunch at local restaurant', 'Armenian Church visit', 'Rickshaw ride', 'Dinner']
      },
      {
        day: 3,
        title: 'Sonargaon Ancient Capital',
        description: 'Day trip to Sonargaon, the ancient capital of Bengal. Explore Folk Art Museum and Panam City, a ghost town with colonial architecture.',
        activities: ['Breakfast at hotel', 'Drive to Sonargaon', 'Folk Art Museum tour', 'Lunch', 'Panam City exploration', 'Return to Dhaka', 'Dinner']
      },
      {
        day: 4,
        title: 'Mainamati Buddhist Ruins',
        description: 'Travel to Comilla to visit the ancient Buddhist ruins at Mainamati. Explore Shalban Vihara and the archaeological museum.',
        activities: ['Breakfast at hotel', 'Drive to Comilla', 'Visit to Mainamati ruins', 'Archaeological museum tour', 'Lunch with local family', 'Return journey', 'Farewell dinner']
      },
      {
        day: 5,
        title: 'Crafts Village and Departure',
        description: 'Visit a traditional crafts village to see artisans working on pottery, weaving, and handicrafts. Shopping opportunity before departure.',
        activities: ['Breakfast at hotel', 'Crafts village tour', 'Handicraft demonstrations', 'Shopping for souvenirs', 'Lunch', 'Airport transfer', 'Departure']
      }
    ],
    inclusions: [
      'All accommodations (4 nights in quality hotels)',
      'Daily breakfast, lunch and dinner',
      'Air-conditioned transportation throughout the tour',
      'Professional English-speaking cultural guide',
      'All entrance fees to monuments and museums',
      'Cultural performance on first night',
      'Bottled water daily',
      'All taxes and service charges'
    ],
    exclusions: [
      'International airfare',
      'Visa fees',
      'Personal expenses',
      'Camera fees at some sites',
      'Alcoholic beverages',
      'Tips for guides and drivers',
      'Travel insurance'
    ],
    featured: false
  },
  {
    id: '5',
    title: 'Sajek Valley Adventure',
    slug: 'sajek-valley-adventure',
    description: 'Experience the breathtaking beauty of Sajek Valley, often called the "Roof of Bangladesh." This adventure takes you through misty mountains, indigenous tribal villages, and offers spectacular sunrise and sunset views.',
    image: 'https://images.unsplash.com/photo-1643996729194-682a79f4feff?q=80&w=2157&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gallery: [
      'https://images.unsplash.com/photo-1658383895221-173f07c6a9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1658383898607-6b92e8196e33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1629739868151-d29aab8b4dd1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    days: 3,
    nights: 2,
    price: 279,
    category: 'Adventure',
    rating: 4.8,
    reviews: 104,
    itinerary: [
      {
        day: 1,
        title: 'Journey to the Mountains',
        description: 'Early morning departure for Sajek Valley. The journey includes passing through tribal regions and climbing to higher elevations. Arrive by late afternoon for a spectacular sunset view.',
        activities: ['Early morning departure', 'Scenic drive through hills', 'Lunch at local stop', 'Arrival at Sajek', 'Sunset viewing', 'Dinner at resort']
      },
      {
        day: 2,
        title: 'Tribal Village Exploration',
        description: 'Early rise for sunrise views. After breakfast, hike to nearby tribal villages to learn about the culture and lifestyle of the Lushai and Tripura communities. Evening bonfire with local music.',
        activities: ['Sunrise viewing', 'Breakfast at resort', 'Guided hiking tour', 'Visit to tribal villages', 'Traditional lunch', 'Free time for photography', 'Evening bonfire with cultural program', 'Dinner']
      },
      {
        day: 3,
        title: 'Mountain Views and Return',
        description: 'Another chance to enjoy the sunrise. After breakfast, visit the Sajek Valley viewpoint for panoramic views of the surrounding mountains before beginning the return journey.',
        activities: ['Sunrise viewing', 'Breakfast at resort', 'Visit to panoramic viewpoint', 'Departure from Sajek', 'Lunch en route', 'Return journey', 'Evening arrival at destination']
      }
    ],
    inclusions: [
      'Transportation in 4WD vehicle',
      'Accommodation in mountain resort (2 nights)',
      'All meals as per itinerary',
      'Local guide for hiking and village visits',
      'Special permits for restricted areas',
      'Evening cultural program',
      'Bonfire arrangement',
      'Water and snacks during journey'
    ],
    exclusions: [
      'Personal expenses',
      'Additional snacks and beverages',
      'Optional activities not mentioned',
      'Tips for guides and drivers',
      'Travel insurance',
      'Photography fees in tribal villages'
    ],
    featured: true
  },
  {
    id: '6',
    title: 'Saint Martin Island Escape',
    slug: 'saint-martin-island-escape',
    description: 'Relax on Bangladesh\'s only coral island with crystal clear waters, pristine beaches, and spectacular marine life. This island paradise offers the perfect combination of relaxation and adventure.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&h=500&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    days: 3,
    nights: 2,
    price: 329,
    category: 'Beach',
    rating: 4.9,
    reviews: 156,
    itinerary: [
      {
        day: 1,
        title: 'Journey to the Island',
        description: 'Morning departure from Cox\'s Bazar to Saint Martin Island by boat. Check into your beachfront accommodation and enjoy free time on the beach with optional sunset cruise.',
        activities: ['Transfer to jetty', 'Speed boat journey to island (2 hours)', 'Resort check-in', 'Welcome lunch', 'Beach relaxation', 'Optional sunset cruise', 'Seafood dinner on beach']
      },
      {
        day: 2,
        title: 'Island Exploration',
        description: 'Full day to explore the island. Morning snorkeling tour to coral reefs, followed by a walking tour around the island. Evening beach bonfire with BBQ dinner.',
        activities: ['Breakfast at resort', 'Guided snorkeling tour', 'Coral reef exploration', 'Lunch at local restaurant', 'Island walking tour', 'Visit to Chhera Dwip during low tide', 'Beach bonfire', 'BBQ dinner']
      },
      {
        day: 3,
        title: 'Final Beach Day and Return',
        description: 'Morning free for last-minute beach activities or relaxation. After lunch, return journey to mainland by boat.',
        activities: ['Breakfast at resort', 'Free time for swimming or sunbathing', 'Shopping for coral crafts', 'Lunch', 'Boat journey back to Cox\'s Bazar', 'Transfer to next destination']
      }
    ],
    inclusions: [
      'Round-trip boat transfers',
      'Beachfront accommodation (2 nights)',
      'All meals as per itinerary',
      'Snorkeling equipment and guide',
      'Island walking tour',
      'Beach bonfire arrangement',
      'BBQ dinner on day 2',
      'All applicable taxes'
    ],
    exclusions: [
      'Transfer to/from Cox\'s Bazar',
      'Optional sunset cruise',
      'Personal expenses',
      'Underwater camera rental',
      'Alcoholic beverages',
      'Additional water activities',
      'Tips for guides and hotel staff'
    ],
    featured: true
  }
];

// Function to generate dynamic metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {

  const { slug } = await params
  const packageData = packages.find(pkg => pkg.slug === slug);

  if (!packageData) {
    return {
      title: 'Package Not Found',
      description: 'The requested tour package could not be found'
    };
  }

  return {
    title: packageData.title,
    description: packageData.description
  };
}

// Generate static paths for all packages
export async function generateStaticParams() {
  return packages.map(pkg => ({
    slug: pkg.slug
  }));
}

export default async function PackageDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const selectedPackage = packages.find(pkg => pkg.slug === slug);

  // If no matching package is found, show an error message
  if (!selectedPackage) {
    return (
      <>
        <div className="section-padding">
          <div className="container-custom text-center">
            <h1 className="text-3xl font-bold mb-4">Package Not Found</h1>
            <p className="mb-6">Sorry, the package you&apos;re looking for doesn&apos;t exist.</p>
            <Button className="bg-forest hover:bg-forest-light">
              Go Back
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-28 md:py-36">
        <div className="absolute inset-0">
          <Image
            src={selectedPackage.image}
            alt={selectedPackage.title}
            width={1920} height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col max-w-3xl">
            <Badge className="self-start mb-4 bg-forest text-white">{selectedPackage.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{selectedPackage.title}</h1>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center text-amber-400">
                <Star className="h-5 w-5 fill-current" />
                <span className="ml-1 text-white">{selectedPackage.rating}</span>
                <span className="ml-1 text-white/80">({selectedPackage.reviews} reviews)</span>
              </div>
              <div className="flex items-center text-white/90">
                <Calendar className="h-5 w-5 mr-1" />
                <span>{selectedPackage.days} Days</span>
              </div>
              <div className="flex items-center text-white/90">
                <Bed className="h-5 w-5 mr-1" />
                <span>{selectedPackage.nights} Nights</span>
              </div>
            </div>
            <div className="mt-2">
              <span className="text-3xl font-bold text-white">${selectedPackage.price}</span>
              <span className="text-white/90 ml-2">per person</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="mb-10">
                <SectionTitle title="Tour Overview" />
                <p className="text-gray-700">{selectedPackage.description}</p>
              </div>

              {/* Gallery */}
              <Gallery gallery={selectedPackage.gallery} title="{selectedPackage.title}" />
              {/* {selectedPackage.gallery && selectedPackage.gallery.length > 0 && (
                <div className="mb-10">
                  <SectionTitle title="Gallery" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedPackage.gallery.map((image, index) => (
                      <div key={index} className="rounded-lg overflow-hidden">
                        <img
                          src={image}
                          alt={`${selectedPackage.title} - Image ${index + 1}`}
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )} */}

              {/* Itinerary */}
              <div className="mb-10">
                <SectionTitle title="Tour Itinerary" />
                <div className="space-y-6">
                  {selectedPackage.itinerary.map((day) => (
                    <div key={day.day} className="border-l-2 border-forest pl-5 relative">
                      <div className="absolute -left-2.5 top-0 h-5 w-5 rounded-full bg-forest"></div>
                      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold mb-2">Day {day.day}: {day.title}</h3>
                        <p className="text-gray-700 mb-4">{day.description}</p>
                        {day.activities && day.activities.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-2 text-gray-800">Activities:</h4>
                            <ul className="list-disc pl-5 text-gray-700 space-y-1">
                              {day.activities.map((activity, idx) => (
                                <li key={idx}>{activity}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              {/* Booking Form */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Book This Tour</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-1 text-sm">Full Name</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1 text-sm">Email Address</label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent"
                      placeholder="Your email address"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1 text-sm">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1 text-sm">Travel Date</label>
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1 text-sm">Number of Travelers</label>
                    <input
                      type="number"
                      min="1"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent"
                      placeholder="Number of travelers"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1 text-sm">Special Requests (Optional)</label>
                    <textarea
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent"
                      rows={3}
                      placeholder="Any special requests or questions?"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-forest hover:bg-forest-light">
                    Book Now
                  </Button>
                </form>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">What&apos;s Included</h3>
                <ul className="space-y-2 mb-6">
                  {selectedPackage.inclusions.map((inclusion, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="h-4 w-4 mr-2 text-forest mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{inclusion}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold mb-4">What&apos;s Not Included</h3>
                <ul className="space-y-2">
                  {selectedPackage.exclusions.map((exclusion, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="h-4 w-4 mr-2 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{exclusion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50 relative">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1920&h=600&q=80"
            alt="Bangladesh Landscape"
            width={1920} height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-pattern"></div>
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <SectionTitle
            subtitle="Still have questions?"
            title="Need More Information?"
            centered={true}
            light={true}
          />
          <p className="max-w-2xl mx-auto mb-8">
            Our travel experts are ready to assist you with any questions you may have about this tour package.
            Feel free to reach out to us for personalized assistance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-forest hover:bg-forest-light">
              <Users className="mr-2" />
              Talk to an Expert
            </Button>
            <Button variant="outline" className="border-forest text-forest hover:bg-forest/10">
              <MapPin className="mr-2" />
              View on Map
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}