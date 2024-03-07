import Image from "next/image";

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        className="w-18 h-18 rounded-full mr-4"
        alt={name}
        width={64}
        height={64}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
