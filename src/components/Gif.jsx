
const Gif = (props) => {
  const { src, altText } = props;
  return  <img src={src} alt={altText}/>
}

export default Gif;