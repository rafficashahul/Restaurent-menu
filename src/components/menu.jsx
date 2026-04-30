import Dish from "./dish.jsx";
import styles from "./menu.module.css";
function Menu({ items }) {
  return (
    <div className={styles.container}>
      {items.map((dish) => (
        <Dish key={dish.id} dishes={dish} />
      ))}
    </div>
  );
}
export default Menu;
