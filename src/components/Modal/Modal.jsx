import Modal from "react-modal";
import { Button } from "../ui/button";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const TallyModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Tally Form"
      className={
        "absolute left-1/2 top-1/2 z-50 flex h-[500px] w-[80vw] -translate-x-1/2 -translate-y-1/2 flex-col items-end self-center rounded-xl bg-stone-100 bg-[url('/noise.png')] p-2 shadow-lg outline-none lg:h-fit lg:w-1/2 lg:p-10"
      }
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="self-right text-2xl font-bold text-white"
        aria-label="Close Modal"
      >
        <RxCross2 /> {/* Close icon */}
      </button>

      {/* Embedded Tally Form */}
      <iframe
        src="https://tally.so/r/3X1QyL" // URL of the Tally form
        width="100%"
        height="650px"
        style={{ zIndex: 50 }}
        frameBorder="0"
        title="Tally Form"
      ></iframe>

      {/* Schedule Call Section */}

      <div className="mt-5 flex w-full flex-col items-center">
        {/* Placeholder for dynamic src tag */}
        <Link href={""} passHref>
          {" "}
          {/* Dynamic href for the schedule call link */}
          <Button className="w-[200px] rounded-xl border-2 bg-white text-xl hover:border-white hover:bg-black hover:text-white">
            Schedule call
          </Button>
        </Link>
      </div>
    </Modal>
  );
};

export default TallyModal;
