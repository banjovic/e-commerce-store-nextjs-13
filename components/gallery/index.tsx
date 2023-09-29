"use client";

import { Tab } from "@headlessui/react";

import { Image as ImageType } from "@/types";
import GalleryTab from "./gallery-tab";

interface Props {
  images: ImageType[];
}

const Gallery = ({ images }: Props) => {
  return (
    <Tab.Group as='div' className='flex flex-col-reverse'>
      <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
        <Tab.List className='grid grid-cols-4 gap-4'>
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className='aspect-square w-full'></Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
