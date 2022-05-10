export default function Card(props) {
  const { url } = props;
  return (
    <div>
      <img src={url} alt="a cute cat" />
    </div>
  );
}
