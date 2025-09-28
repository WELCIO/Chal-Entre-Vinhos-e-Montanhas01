
import { LucideProps } from 'lucide-react';
import React from 'react';

export type Page = 'home' | 'booking' | 'guide' | 'services' | 'music' | 'admin';

export interface Notification {
  name: string;
  time: string;
  action: string;
}

export interface Attraction {
  name: string;
  image: string;
  type: string;
  description: string;
}

export interface BookingData {
  checkin: string;
  checkout: string;
  guests: number;
  dates: number;
}

export interface Weather {
  temp: number;
  condition: string;
  humidity: number;
  wind: number;
}

export interface AdminCredentials {
  email: string;
  password: string;
}

export interface NavItem {
  id: Page;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  label: string;
}

export interface Service {
    name: string;
    price: string;
    icon: string;
}

export interface Playlist {
    name: string;
    genre: string;
    color: string;
    link: string;
}
