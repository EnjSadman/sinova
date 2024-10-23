import { GetServerSideProps } from 'next';
import fetchAnimal from '@/app/utils/functions/fetch';
import { AnimalType, Order } from '@/app/utils/enums/enums';
import { ApiResponse } from '@/app/utils/types/types';
import "../../../app/globals.css";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { breedId, type } = context.params;

  let animalType;
  if (type === 'cat') {
    animalType = AnimalType.cat;
  } else if (type === 'dog') {
    animalType = AnimalType.dog;
  } else {
    return { notFound: true };
  }

  const animals = await fetchAnimal(animalType, 10, 1, Order.asc, [breedId as string]);

  return {
    props: {
      animals,
      breedId,
    },
  };
};

export default function BreedPage({ animals, type }: { animals: ApiResponse[], breedId: string, type: string }) {
  const breedInfo = animals[0]?.breeds?.[0];

  return (
    <div className="min-h-screen p-8 sm:p-20">
      <h1 className="text-2xl font-bold">Breed: {breedInfo?.name}</h1>
      <p>{breedInfo?.description}</p>
      <h2 className="text-xl mt-4">Cats of this breed</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {animals.map((animal) => (
          <div key={animal.id} className="relative h-60 overflow-hidden">
            <img src={animal.url} alt={`${type}`} className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
