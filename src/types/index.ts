export interface Service {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'food' | 'comfort' | 'luggage';
}
