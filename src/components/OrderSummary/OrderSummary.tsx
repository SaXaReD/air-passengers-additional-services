import type { Service } from '../../types'
import style from './OrderSummary.module.css'

interface Props {
    selectedItems: Service[]
    total: number
}

export const OrderSummary = ({ selectedItems, total }: Props) => {
    if (selectedItems.length === 0) return null;

    return (
        <aside className={style.summaryBlock}>
            <h2>Итого</h2>
            <ul className="selected-list">
                {selectedItems.map((item, index) => (
                    <li key={index}>
                        {item.name} — {item.price} ₽
                    </li>
                ))}
            </ul>
            <hr />
            <div className="total-amount">
                <strong>К оплате: {total} ₽</strong>
            </div>
            <button className={style.orderButton} onClick={() => alert('Заказ оформлен!')}>
                Оформить заказ
            </button>
        </aside>
    );
};