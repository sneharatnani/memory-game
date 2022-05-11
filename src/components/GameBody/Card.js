export default function Card(props) {
  const { url, handleClick, id } = props;
  return (
    <div onClick={handleClick.bind(null, id)}>
      <img src={url} alt="a cute cat" />
    </div>
  );
}
