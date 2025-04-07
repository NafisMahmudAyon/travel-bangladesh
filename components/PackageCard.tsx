'use client'
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Clock, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface PackageCardProps {
  image: string;
  title: string;
  days: number;
  nights: number;
  price: number;
  rating: number;
  reviews: number;
  features: string[];
  category: string;
  slug: string;
}

const PackageCard: React.FC<PackageCardProps> = ({
  image,
  title,
  days,
  nights,
  price,
  rating,
  features,
  category,
  slug,
}) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={480} height={200}
          className="h-full w-full object-cover"
        />
        <Badge className="absolute left-3 top-3 bg-accent text-accent-foreground">
          {category}
        </Badge>
        <Badge className="absolute right-3 top-3 bg-forest text-primary-foreground inline-flex items-center gap-1">
          {rating} <Star
            className={`h-4 w-4 fill-yellow-400 text-yellow-400`}
          />
        </Badge>
      </div>

      <div className="p-4">
        <h3 className="mb-2 text-lg font-bold">{title}</h3>

        <div className='flex w-full justify-between'>
          <div className="mb-3 flex items-center text-sm text-gray-600">
            <Clock className="mr-1 h-4 w-4" />
            <span>{days} Days {nights} Nights</span>
          </div>
          <div className='inline-flex items-center gap-1.5'>
            <span className="text-sm text-gray-500">From</span>
            <p className="text-lg font-bold text-forest">
              ৳{price} <span className="text-sm font-normal">/ person</span>
            </p>
          </div>
        </div>

        {/* <div className="mb-4 flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                }`}
            />
          ))}
          <span className="ml-1 text-xs text-gray-600">({reviews})</span>
        </div> */}

        <div className="space-y-2 mb-4 border-t border-gray-100 pt-3">
          {features?.map((feature, index) => (
            <div key={index} className="flex items-center">
              <Check className="h-4 w-4 mr-2 text-forest" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        {/* <div className="flex items-center justify-between border-t border-gray-100 pt-3">
          <div>
            <span className="text-sm text-gray-500">From</span>
            <p className="text-lg font-bold text-forest">
              ৳{price} <span className="text-sm font-normal">/ person</span>
            </p>
          </div>
          <Link href={`/packages/${slug}`}>
            <Button size="sm">View Details</Button>
          </Link>
        </div> */}
        <Link href={`/packages/${slug}`} className="block">
          <Button className="w-full bg-forest hover:bg-forest-light">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
