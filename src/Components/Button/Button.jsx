import "./Button.css";

export default function Button({ textButton }) {
  return (
    <button
      type="submit"
      className="button block w-full bg-yellow text-textDark rounded-[17px] mt-6 tablet:mx-0 py-[17px]  tablet:max-w-[249px] tablet:rounded-lg tablet:ml-auto tablet:mt-8"
    >
      {textButton}
    </button>
  );
}
