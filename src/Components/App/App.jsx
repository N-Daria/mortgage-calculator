import "./App.css";

export default function App() {
  return (
    <div className="desktop:mx-auto mx-auto pt-120 max-w-mainContentM tablet:max-w-full tablet:mx-60 desktop:max-w-mainContentD bg-themeColor ">
      <form className="text-white">
        <h1 className="form__header tablet:text-5xl">
          Рассчитайте ипотеку быстро и просто
        </h1>

        <label>
          Стоимость недвижимости
          <input type="number" />
        </label>

        <div className="before:block before:absolute before:w-full before:h-[1px] before:bg-borderColor before:left-0 absolute left-0 w-full px-5 pb-6 bg-secondaryColor tablet:px-0 tablet:py-8 tablet:bg-inherit tablet:static">
          <button
            type="submit"
            className="form__submit block w-full bg-yellow text-textDark rounded-[17px] mt-6 tablet:mx-0 py-[17px] tablet:bg-accent tablet:max-w-[249px] tablet:text-textColor tablet:rounded-lg tablet:ml-auto tablet:mt-8"
          >
            Продолжить
          </button>
        </div>
      </form>
    </div>
  );
}
