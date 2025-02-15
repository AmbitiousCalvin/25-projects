import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.scss";

export function ImageSlider({ url, limit, page }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const fetchImages = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let ignore = false;
    if (url !== "" && !ignore) fetchImages(url);

    return () => {
      ignore = true;
    };
  }, [url]);

  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Error: {String(error)}</div>;

  function Slide(value) {
    setCurrentSlide((prev) => {
      if (prev + value > images.length - 1) return 0;
      if (prev + value < 0) return images.length - 1;
      return prev + value;
    });
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={() => Slide(-1)}
        className="arrow arrow-left"
      />
      {images?.length !== 0 &&
        images.map((item, index) => {
          return (
            <img
              key={item.id}
              src={item.download_url}
              alt={item.download_url}
              className={
                currentSlide !== index ? "hide-current-image" : "current-image"
              }
            />
          );
        })}
      <BsArrowRightCircleFill
        onClick={() => Slide(1)}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images?.length !== 0 &&
          images.map((_, index) => {
            return (
              <button
                onClick={() => setCurrentSlide(index)}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
              ></button>
            );
          })}
      </span>
    </div>
  );
}
