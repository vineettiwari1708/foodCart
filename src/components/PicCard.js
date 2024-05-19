const PicCard = (props) => {
  const { picCard } = props;
  return (
    <div className="pic-card">
      <img className="img-container" src={picCard.url}></img>
      <h3>{picCard.title}</h3>
      <h4>{picCard.id}</h4>
      <h4>{picCard.rating}</h4>
      <h4>{picCard.timming}</h4>
    </div>
  );
};

export default PicCard;
