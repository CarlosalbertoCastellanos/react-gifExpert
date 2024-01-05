import { GifItem } from "./GifItem";
import { useFechGifs } from "../hooks/useFechGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFechGifs(category);

  return (
    <>
      {isLoading && <h2>Cargando...</h2>}
      <h3>{category}</h3>

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
