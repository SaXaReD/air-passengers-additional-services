import { useState } from 'react'
import type { Service } from '@/types'

export const useCart = () => {
    const [selectedServices, setSelectedServices] = useState<Service[]>([])

    const addService = (service: Service) => {
        setSelectedServices(prev => [...prev, service])
    };

    const totalPrice = selectedServices.reduce((sum, item) => sum + item.price, 0)

    return { selectedServices, addService, totalPrice }
}
