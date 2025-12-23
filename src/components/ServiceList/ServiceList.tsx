import type { Service } from '@/types'
import { ServiceCard } from '@components/ServiceCard/ServiceCard'
import styles from './ServiceList.module.css'

interface Props {
    services: Service[]
    onAddService: (s: Service) => void
}

export const ServiceList: React.FC<Props> = ({ services, onAddService }) => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Доступные услуги</h2>
            <div className={styles.grid}>
                {services.map((service) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        onAdd={() => onAddService(service)}
                    />
                ))}
            </div>
        </section>
    )
}