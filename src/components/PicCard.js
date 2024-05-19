const PicCard = (props) => {
  const { picCard } = props;
  return (
    <div className="pic-card">
      <img className="img-container" src={picCard.url}></img>
      <h3>{picCard.title}</h3>
      <h4>{picCard.id}</h4>
      <h4>4.5 stars</h4>
      <h4>38 mins</h4>
    </div>
  );
};

export default PicCard;
