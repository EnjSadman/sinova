import { ApiResponse } from "@/app/utils/types/types";
import AnimalCard from "../molecules/AnimalCard";
import { AnimalType } from "@/app/utils/enums/enums";

function AnimalList({animalArray, type} : {animalArray  : ApiResponse[], type: AnimalType}) {
  return (
    <div className="container flex justify-between mx-auto gap-4">
      {
        animalArray.map((animal, index) => <AnimalCard type={type} animal={animal} key={index}/>)
      }
    </div>
  )
}

export default AnimalList