interface IconProps {
  src: string;
  alt: string;
}

export default function Icon(props: IconProps) {
  return <img {...props} width={40} height={40} />;
}
