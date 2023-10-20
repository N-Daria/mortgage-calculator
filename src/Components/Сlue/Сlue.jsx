import "./Clue.css";

export default function Clue({ text }) {
  return (
    <div className="hidden bg-red w-full rounded-md mt-3">
      <p className="clue__text py-[6px] pr-[21px] pl-[32px] relative">{text}</p>
    </div>
  );
}
