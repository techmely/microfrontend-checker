type Props = {
  id?: string;
  onClick?: () => void;
}

export default function CustomButton(props: Props) {
  return <button data-testid="custom-button" {...props} />;
}
