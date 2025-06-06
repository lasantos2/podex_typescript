export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2"
    constructor(){}

    async fetchLocations(pageURL?: string): Promise<ShallowLocations>{
        // implement
        let fullURL = PokeAPI.baseURL + "/location-area"

        //let shallowLocas: ShallowLocations;
        if (pageURL !== undefined){
            fullURL = fullURL = PokeAPI.baseURL +"/" + pageURL;

        } 

        let response = await fetch(fullURL);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const dataRs:ShallowLocations = await response.json();
        return dataRs;
    }

    async fetchLocation(locationName: string): Promise<Location> {

        return {} as Location;
    }
}

export interface ShallowLocations {
  count: number
  next: string
  previous: any
  results: Location[]
};

export interface Location {
  name: string
  url: string
};
