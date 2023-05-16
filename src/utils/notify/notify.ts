import { toast } from "react-toastify";

export function notifyUtils(status: number, message: string) {
  let notify;
  switch (status) {
    case 400:
      notify = () => toast.warning(message);
      break;
    case 500:
      notify = () => toast.error(message);
      break;
    default:
      notify = () => toast.success(message);
      break;
  }
  notify();
}
