import { BasketItems } from "./BasketItems";
import { useContext } from "react";
import { ShopContext } from "../context";

const BasketList = () => {
  const { order = [], handleBasketShow = Function.prototype } =
    useContext(ShopContext);
  
  const totalPrice = order.reduce((sum, elem) => {
    return sum + elem.price * elem.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">
        Корзина
        <span
          className="secondary-content basket-close"
          onClick={handleBasketShow}
        >
          <i className="material-icons">close</i>
        </span>
      </li>
      {order.length ? (
        order.map((orderItem) => (
          <BasketItems key={orderItem.id} {...orderItem} />
        ))
      ) : (
        <li className="collection-item ">Корзина пуста.</li>
      )}
      <li className="collection-item active">
        Общая стоимость: {totalPrice} руб.
      </li>
    </ul>
  );
};

export { BasketList };
