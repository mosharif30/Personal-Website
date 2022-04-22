import Button from "../Button/Button";
import "./portfolioItems.css";
const PortfolioItem = ({ picsrc, title, deployedLink }) => {
  return (
    <>
      <div class="col">
        <div class="card h-100">
          <img src={picsrc} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div class="card-footer">
            <Button linkForBtn={deployedLink}>
              Click to lunch the website
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioItem;
