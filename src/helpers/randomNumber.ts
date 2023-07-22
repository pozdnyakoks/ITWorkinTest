import { maxNumber } from "./variables";

export default function randomNumber(): number {
  return Math.ceil(Math.random() * maxNumber);
}