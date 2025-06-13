import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private static readonly pokebaseUrl = "https://pokeapi.co/api/v2/pokemon/"
  #cacheLocations = new Cache(10000);
  #cacheLocation = new Cache(10000);
  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || `${PokeAPI.baseURL}/location-area`;
    let locations: any;


    locations = this.#cacheLocations.get<ShallowLocations>(url);

    if (locations !== undefined) {
      return locations
    }

    try {
      const resp = await fetch(url);

      if (!resp.ok) {
        throw new Error(`${resp.status} ${resp.statusText}`);
      }

      locations = await resp.json();
      this.#cacheLocations.add<ShallowLocations>(url, locations);
      return locations;
    } catch (e) {
      throw new Error(`Error fetching locations: ${(e as Error).message}`);
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {

    const url = `${PokeAPI.baseURL}/location-area/${locationName}`;

    let location: any;

    location = this.#cacheLocation.get<Location>(locationName);

    if (location !== undefined) return location;


    try {
      const resp = await fetch(url);

      if (!resp.ok) {
        throw new Error(`${resp.status} ${resp.statusText}`);
      }

      location = await resp.json();
      this.#cacheLocation.add<Location>(url,location);
      return location;
    } catch (e) {
      throw new Error(
        `Error fetching location '${locationName}': ${(e as Error).message}`,
      );
    }
  }

  async fetchPokemon(pokemonName: string): Promise<Pokemon> {
    let url = `${PokeAPI.pokebaseUrl}/${pokemonName}`;
    let pokemon: any;
    
    try {
      const resp = await fetch(url);

      if (!resp.ok) {
        throw new Error("Pokemon unable to fetch");
      }
      pokemon = await resp.json();
      return pokemon;
    } catch(e) {
      throw new Error("Unable to fetch url");
    }
  }
}

export type ShallowLocations = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
};

export type Location = {
  encounter_method_rates: {
    encounter_method: {
      name: string;
      url: string;
    };
    version_details: {
      rate: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
  game_index: number;
  id: number;
  location: {
    name: string;
    url: string;
  };
  name: string;
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
    version_details: {
      encounter_details: {
        chance: number;
        condition_values: any[];
        max_level: number;
        method: {
          name: string;
          url: string;
        };
        min_level: number;
      }[];
      max_chance: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
};


export type Pokemon = {
  base_experience: number
  height: number
  id: number
  is_default: boolean
  location_area_encounters: string
  name: string
  order: number
  past_types: any[]
  stats: Stat[]
  types: Type[]
  weight: number
}

export type Stat = {
  base_stat: number
  effort: number
  stat: Stat2
}

export type Stat2 = {
  name: string
  url: string
}

export type Type = {
  slot: number
  type: Type2
}

export type Type2 = {
  name: string
  url: string
}

