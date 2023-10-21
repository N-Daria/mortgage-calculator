import "./Button.css";

export default function Button({ textButton, isDisabled }) {
  return (
    <button
      type="submit"
      disabled={isDisabled}
      className="button block w-full bg-yellow text-textDark rounded-lg mt-6 py-[17px] tablet:mx-0 tablet:max-w-[249px] tablet:rounded-lg tablet:ml-auto tablet:mt-8"
    >
      {textButton}
    </button>
  );
}
