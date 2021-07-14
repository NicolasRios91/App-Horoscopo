const Card = ({ image, dinero }) => {
  return (
    <div>
      <a href="">
        <img src={image} alt="" />
      </a>
      <p>{dinero}</p>
    </div>
  );
};

export default Card;
