import "./MessageInfo.css";

export default function MessageInfo({ tooltipText }) {
  return (
    <div className="relative bg-secondaryColor rounded mt-3">
      <div className="message-info py-[6] pr-[21px] pl-[32px] m-0 ">
        {tooltipText}
      </div>
    </div>
  );
}
