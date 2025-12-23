import type { Service } from '@/types';

export const SERVICES_MOCK: Service[] = [
    {
        id: '1',
        name: 'Дополнительный багаж',
        description: 'Увеличение веса чемодана до 23 кг',
        price: 2500,
        category: 'luggage',
    },
    {
        id: '2',
        name: 'Место у окна',
        description: 'Выбор комфортного места в начале салона',
        price: 800,
        category: 'comfort',
    },
    {
        id: '3',
        name: 'Безлактозный обед',
        description: 'Специальное меню: курица с рисом и овощами (без ГМО и лактозы)',
        price: 1200,
        category: 'food',
    },
    {
        id: '4',
        name: 'Wi-Fi на борту',
        description: 'Безлимитный доступ в интернет в течение всего полета',
        price: 1500,
        category: 'comfort',
    },
    {
        id: '5',
        name: 'Приоритетная посадка',
        description: 'Проход в самолет без очереди через отдельный гейт',
        price: 600,
        category: 'comfort',
    }
];