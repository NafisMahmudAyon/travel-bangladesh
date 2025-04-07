'use client'
import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';

interface TestimonialCardProps {
  image: string;
  name: string;
  role: string;
  rating: number;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  name,
  role,
  rating,
  text,
}) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-4 flex items-center space-x-4">
        <Image
          src={image}
          alt={name}
          width={100} height={100}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
          <div className="mt-1 flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
};

export default TestimonialCard;
