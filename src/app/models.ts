export interface Game {
    background_image: string;
    name: string;
    id: string;
    released: string;
    metacritic_url: string;
    website: string;
    description: string;
    metacritic: number;
    genres: Array<Genre>;
    parent_platforms: Array<ParentPlatform>;
    publishers: Array<Publishers>;
    ratings: Array<Rating>;
    screenshots: Array<Screenshots>;
    trailers: Array<Trailer>;
    slug:string;
  }
  
  export interface APIResponse<T> {
      results: Array<T>;
  }
  
  interface Genre {
    name: string;
  }
  
  interface ParentPlatform {
    platform: {
      name: string;
      slug: any;
    };
  }
  
  interface Publishers {
    name: string;
  }
  
  interface Rating {
    id: number;
    count: number;
    title: string;
  }
  
  export interface Screenshots {
    image: string;
  }
  
  export interface Trailer {
    data: {
      max: string;
    };
  }

  export interface GameImages {
    count: number,
    next : number,
    previous : number,
    results : GameScreenshots[]
  }

   export interface GameScreenshots {
    id: number,
    image: string,
    width: number,
    height: number,
    is_deleted : boolean
  }
  