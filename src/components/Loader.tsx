import { Spinner } from "flowbite-react";

export function Loader({ size }: any) {
  return <Spinner aria-label="Loading spinner" size={size} />;
}
