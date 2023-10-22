import "./MessageInfo.css";

export default function MessageInfo({ messageText }) {
  console.log(messageText);
  return (
    <div className="relative bg-secondaryColor rounded mt-4">
      <div className="message-info py-[6px] pr-[21px] pl-[32px] m-0">
        {messageText}
      </div>
    </div>
  );
}
