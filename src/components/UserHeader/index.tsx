import Image from "next/image";

interface IUserHeaderProps {
  user: any;
  cover: any;
  profilePic: any;
}

export const UserHeader = (props: IUserHeaderProps) => {
  const { user, cover, profilePic } = props;
  return (
    <div className="relative">
      <figure>
        <Image
          src={cover}
          height={750}
          alt={`Cover of ${user}`}
          objectFit="cover"
        />
      </figure>
      <div
        className="relative flex flex-col items-center justify-center"
        style={{ top: "-80px" }}
      >
        <figure
          className=" border-4 border-cardBackground rounded-full"
          style={{ width: 98, height: 98 }}
        >
          <Image
            className="rounded-full"
            width={98}
            height={98}
            objectFit="cover"
            layout="responsive"
            src={profilePic}
            alt={`Photo of ${user}`}
          />
        </figure>
        <h1 className="text-lightText text-2xl">{user}</h1>
      </div>
    </div>
  );
};
