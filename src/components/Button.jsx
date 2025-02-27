export default function Button({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-900 p-5 rounded-sm w-40
    hover:bg-blue-950"
    >
      {title}
    </button>
  );
}
