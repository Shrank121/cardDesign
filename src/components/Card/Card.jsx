import cardImg from "../../assets/illustration-article.svg"
import Badge from "../Badge/Badge";
import authorImg from "../../assets/image-avatar.webp"
import styles from "./Card.module.css"

const Card = () => {
  return <div className={styles.Card}>
    <img className={styles.CardImg} src={cardImg} alt="" />
    <div>
    <Badge>Learning</Badge>
    </div>
    <p>Published 21 Dec 2023</p>
    <h2>HTML & CSS Foundations</h2>
    <p className={styles.Description}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quasi est nam amet, deserunt placeat pariatur veniam minus illo voluptas accusamus totam. Itaque consequuntur fugit assumenda, nulla animi hic necessitatibus.
    </p>
<div className={styles.Author}>
    <img src={authorImg} alt="Greg Hopper" width="30" height="30" />
    <p>Greg Hopper</p>
</div>

  </div>;
};
export default Card;