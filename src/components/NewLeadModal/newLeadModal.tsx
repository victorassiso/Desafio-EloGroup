import Modal from 'react-modal';

interface NewLeadModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewLeadModal({isOpen, onRequestClose}: NewLeadModalProps){

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="NewTransactionModalOverlay"
      className="NewTransactionModalContent"
    >
      <h1>New Lead Modal</h1>
    </Modal>
  );
}