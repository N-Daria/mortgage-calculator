import "./Clue.css";

export default function Clue({ text, isError }) {
  return (
    <div className={`${isError ? "" : "hidden"} bg-red w-full rounded-md mt-3`}>
      <p className="clue__text py-[6px] pr-[21px] pl-[32px] relative m-0">
        {text}
      </p>
    </div>
  );
}
