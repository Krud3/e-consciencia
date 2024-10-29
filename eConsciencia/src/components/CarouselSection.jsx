// src/components/CarouselSection.jsx
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

import Acidification from '@/pages/Acidification/Acidification';
import CarouselBlock from '@/pages/contamination/CarouselBlock';
import CarouselAcidification from '@/pages/Acidification/CarouselAcidification';
// Importa otros componentes Canvas si los tienes

const CarouselSection = () => {
  return (
    <section className="carousel-section relative mt-8">
      <Carousel className="overflow-hidden">
        <CarouselContent className="flex">
          <CarouselItem className="flex-[0_0_100%]">
            <div className="h-[500px]">
              <CarouselBlock />
            </div>
          </CarouselItem>
          <CarouselItem className="flex-[0_0_100%]">
            <div className="h-[500px]">
              <CarouselAcidification />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default CarouselSection;
