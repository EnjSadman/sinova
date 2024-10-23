import AnimalList from "./components/organisms/AnimalList";
import { AnimalType } from "./utils/enums/enums";
import fetchAnimal from "./utils/functions/fetch";

const DOG_COUNT = 3;
const DOG_BREEDS = 1;
const CAT_COUNT = 3;
const CAT_BREEDS = 1;

export default async function Home() {
  const cats = await fetchAnimal(AnimalType.cat, CAT_COUNT, CAT_BREEDS);
  const dogs = await fetchAnimal(AnimalType.dog, DOG_COUNT, DOG_BREEDS);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <AnimalList type={AnimalType.cat} animalArray={cats} />
        <AnimalList type={AnimalType.dog}animalArray={dogs} />
      </main>
    </div>
  );
}
