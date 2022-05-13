export default function Card(props) {
  const { url, handleClick, id } = props;
  return (
    <div onClick={handleClick.bind(null, id)}>
      <button className="text-6xl bg-violet-100 border border-violet-300 h-28 w-28 rounded-full hover:shadow-2xl shadow-violet-300">
        {url}
      </button>
    </div>
  );
}
