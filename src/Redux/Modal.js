import { useDispatch, useSelector } from "react-redux";
import modals from "./modals";
import { closeModal } from "./stores/modal";
function Modal(/* {name,data,setModal} */) {
  const dispatch = useDispatch();
  const { name, data } = useSelector((state) => state.modal);
  const modal = modals.find((m) => m.name === name);

  const close = () => {
    dispatch(closeModal());
  };
  return (
    <div className="modal">
      <div className="modal-inner">
        <modal.element close={close} data={data} />
      </div>
    </div>
  );
}

export default Modal;
