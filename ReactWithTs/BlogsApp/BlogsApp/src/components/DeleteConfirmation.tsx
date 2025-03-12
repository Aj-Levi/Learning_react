const DeleteConfirmation = ({ remove }: { remove: () => void }) => {
  return (
    <div>
      <dialog id="DeleteModal" className="modal">
        <div className="modal-box">
          <p className="py-4">Are you sure you want to delete this blog</p>
          <button
            onClick={remove}
            className="btn btn-primary text-lg w-full mt-4"
          >
            Confirm
          </button>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DeleteConfirmation;
