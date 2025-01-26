import { useState } from "react";
import { Modal } from "./Modal";
import ComboBox from "./ComboBox";

export const ComboBoxInModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button
        className="bg-blue-500 rounded-md text-white px-3 py-2 text-lg font-bold"
        onClick={handleOpen}
      >
        Open Modal
      </button>
      <Modal
        header={<h1 className="p-4">Combo Box In Modal</h1>}
        isOpen={isOpen}
        onClose={handleClose}
        footer={
          <div className="flex justify-end gap-x-2 p-4">
            <button onClick={handleClose}>Cancel</button>
          </div>
        }
      >
        <div className="p-4 h-52">
          <ComboBox />
        </div>
      </Modal>
    </>
  );
};
