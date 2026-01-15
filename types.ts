
export enum PetType {
  DOG = 'DOG',
  CAT = 'CAT',
  BIRD = 'BIRD',
  RABBIT = 'RABBIT',
  REPTILE = 'REPTILE'
}

export interface Pet {
  id: string;
  name: string;
  type: PetType;
  breed: string;
  age: string;
  gender: 'male' | 'female';
  weight: string;
  distance: string;
  fee: number;
  tags: string[];
  description: string;
  images: string[];
  shelter: {
    name: string;
    avatar: string;
    verified: boolean;
    lastActive: string;
  };
  healthStatus: {
    vaccinated: boolean;
    neutered: boolean;
    chipped: boolean;
  };
}

export interface Message {
  id: string;
  sender: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
}
