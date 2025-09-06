export interface OperationModalProps {
  isShowModal: boolean;
  onSetShowModal: (value: boolean) => void;
  content: string;
  confirmeHandler: () => void;
  isLoading?: boolean;
}
