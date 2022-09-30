import Card from "../card/card.component";
import "./card-list.styles.css";

// ___Cach viet 1___
const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

export default CardList;

// ____Cach viet 2___
// const CardList = (props) => {
//   const { monsters } = props;

//   return (
//     <div className="card-list">
//       {monsters.map((monster) => {
//         return <Card monster={monster} key={monster.id} />;
//       })}
//     </div>
//   );
// };
// export default CardList;
