import { AnimalType, Order } from "../enums/enums";
import { ApiResponse } from "../types/types";

const LINK_CAT = "https://api.thecatapi.com/v1/images/search";
const LINK_DOG = "https://api.thedogapi.com/v1/images/search";

async function fetchAnimal(
  type: AnimalType,
  limit: number = 1,
  has_breeds: number = 1,
  order: Order = Order.asc,
  breedIds: string[] = [],
  categoryIds: string[] = [],
) : Promise<ApiResponse[]>
  {
    const params = {
      limit,
      order,
      has_breeds,
      breedIds: breedIds.join(),
      categoryIds: categoryIds.join(),
    }
    let url;

    if (type === AnimalType.cat && process.env.API_KEY_CAT) {
      url = new URL(LINK_CAT);
      url.searchParams.append("api_key", process.env.API_KEY_CAT)
    } else if (type === AnimalType.dog && process.env.API_KEY_DOG) {
      url = new URL(LINK_DOG);
      url.searchParams.append("api_key", process.env.API_KEY_DOG)
    } else {
      url = new URL("")
    }

    (Object.keys(params)as Array<keyof typeof params>).forEach(key => {
      if(params[key] && params[key] !== "") {
        url.searchParams.append(key, String(params[key]))
      }
    })

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error ${response.statusText}`)
    }

    return await response.json()
}

export default fetchAnimal;