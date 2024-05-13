// It's better to pass [width] & [height] as parameters,
// but the back-end (RAWG API) supports cropping with this dimension only.
const getCroppedImageUrl = (url: string) => {
  if (!url) return ""; // If url is [null] (a game doesn't have an image).

  const target = "media/";
  const index = url.indexOf(target) + target.length;

  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
