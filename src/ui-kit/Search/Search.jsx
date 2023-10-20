import "./Search.css";

export default function Search({ id }) {
  return (
    <div className="search my-2 mx-3 relative">
      <label htmlFor={id} className="absolute w-0 h-0 top-[-999px]">
        Текстовый поиск
      </label>
      <input
        type="text"
        name={id}
        id={id}
        placeholder="Поиск.."
        className="search__input w-full bg-baseColor rounded-[5px] border-borderColor py-2 pr-4 pl-11 border"
      />
    </div>
  );
}
