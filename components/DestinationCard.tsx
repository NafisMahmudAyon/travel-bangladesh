'use client'
import React from 'react';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface DestinationCardProps {
  image: string;
  name: string;
  location: string;
  attractions: number;
  slug: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  image,
  name,
  location,
  attractions,
  slug,
}) => {
  return (
    <Link href={`/destinations/${slug}`} className="group block overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={350} height={260}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-full p-4 text-white">
          <h3 className="text-xl font-bold">{name}</h3>
          <div className="mt-2 flex items-center text-sm">
            <MapPin className="mr-1 h-4 w-4" />
            <span>{location}</span>
            <span className="ml-auto rounded-full bg-white/20 px-2 py-0.5">
              {attractions} Attractions
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
