// import noImage from "../assets/No-Image-Placeholder-1.svg";
import noImage from "../assets/No-Image-Placeholder-1-Gray_BG (600x400).png";

// Retrieves the passed image cropped to 600x400 from the RAWG API.
// If url is [null] (a game doesn't have an image), a [noImage placeholder] image will be returned instead.
// It's better to pass [width] & [height] as parameters,
// but the back-end (RAWG API) supports cropping with this dimension only.
const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;

  const target = "media/";
  const index = url.indexOf(target) + target.length;

  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
