"use client"

import Image from "next/image";
import { ApiResponse } from "@/app/utils/types/types";
import Link from "next/link";
import { AnimalType } from "@/app/utils/enums/enums";

function AnimalCard({animal, type} : {animal : ApiResponse, type: AnimalType}) {
  return (
    <Link href={`/animals/${type}/${animal.breeds[0].id}`}>
      <div className="cursor-pointer min-h-56 min-w-56 border-2 border-black text-center transition-all hover:shadow-lg">
        <div className="relative min-h-48">
          <Image src={animal.url} alt={animal.breeds[0].name} fill={true}/>
        </div>
        {animal.breeds[0].name}
      </div>
    </Link>
  )
}

export default AnimalCard;