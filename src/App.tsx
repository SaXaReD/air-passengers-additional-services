import React from 'react'
import { SERVICES_MOCK } from '@mock/services'
import { useCart } from '@hooks/useCart'
import { ServiceList } from '@components/ServiceList/ServiceList'
import { OrderSummary } from '@components/OrderSummary/OrderSummary'

const App: React.FC = () => {
    const { selectedServices, addService, totalPrice } = useCart();

    return (
        <div className="app-container">
            <header>
                <h1>SkyService MVP</h1>
            </header>

            <div className="main-layout">
                <ServiceList services={SERVICES_MOCK} onAddService={addService} />
                <OrderSummary selectedItems={selectedServices} total={totalPrice} />
            </div>
        </div>
    );
}

export default App
