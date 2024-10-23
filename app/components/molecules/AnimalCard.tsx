"use client"
import Image from "next/image";
import { ApiResponse } from "@/app/utils/types/types";
import Link from "next/link";
import { AnimalType } from "@/app/utils/enums/enums";

function AnimalCard({animal, type} : {animal : ApiResponse, type: AnimalType}) {
  return (
    <Link href={`/animals/${type}/${animal.breeds[0].id}`}>
      <div className="cursor-pointer">
        <Image src={animal.url} alt={animal.breeds[0].name} width={400} height={400}/>
        {animal.breeds[0].name}
      </div>
    </Link>
  )
}

export default AnimalCard;