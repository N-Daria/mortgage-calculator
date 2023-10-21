import "./Search.css";

export default function Search({ id, setSearchWord }) {
  function handleChange(event) {
    setSearchWord(event.target.value);
  }

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
        className="search__input w-full bg-baseColor rounded-[5px] border-borderColor py-[6px] pr-4 pl-[42px] border"
        onInput={handleChange}
      />
    </div>
  );
}
