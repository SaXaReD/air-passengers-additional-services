import type { Service } from '../../types'
import style from './ServiceCard.module.css'

interface Props {
    service: Service
    onAdd: () => void
}

export const ServiceCard = ({ service, onAdd }: Props) => {
    return (
        <>
            <div className={style.card}>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <span className={style.price}>{service.price} ₽</span>
                <button onClick={onAdd} className={style.addButton}>Добавить</button>
            </div>
        </>
    )
}
