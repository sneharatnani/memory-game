export default function Card(props) {
  const { url, handleClick, id } = props;
  return (
    <div onClick={handleClick.bind(null, id)}>
      {/* <img src={url} alt="a cute cat" /> */}
      <button className="text-6xl bg-violet-100 border-2 border-violet-500 h-28 w-28 rounded-full">
        {url}
      </button>
    </div>
  );
}
