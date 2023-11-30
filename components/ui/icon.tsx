import Image from 'next/image';

export default function Icon({ name, size }: { name: string; size: number }) {
  return (
    <Image
      src={`/icons/${name}.svg`}
      className="rounded-md"
      width={size}
      height={size}
      alt={name}
    />
  );
}

