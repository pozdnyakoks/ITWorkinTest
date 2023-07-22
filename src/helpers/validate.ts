import { emailReg } from "./variables";

export default function validate(ev: React.FocusEvent<HTMLInputElement>) {
  const { type, value }: { type: string, value: string } = ev.target;
  if (type === 'text') {
    if (value === '') {
      ev.target.classList.add('error');
    } else {
      ev.target.classList.remove('error');
    }
  }

  if (type === 'email') {
    if (emailReg.test(value)) {
      ev.target.classList.remove('error');
    } else {
      ev.target.classList.add('error');
    }
  }
}