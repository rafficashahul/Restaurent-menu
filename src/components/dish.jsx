import styles from "./dish.module.css";
function Dish({ dishes }) {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{dishes.tittel}</p>
      <p className={styles.price}>{dishes.pris}</p>
      <p className={styles.ingredients}>{dishes.ingredienser}</p>
      <p className={styles.category}>{dishes.kategori}</p>
    </div>
  );
}
export default Dish;
