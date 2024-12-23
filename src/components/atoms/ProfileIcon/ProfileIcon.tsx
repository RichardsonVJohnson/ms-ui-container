/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
interface IProfileIcon {
  src?: string;
  className?: string;
}
export const ProfileIcon: React.FC<IProfileIcon> = ({ src, className }) => {
  return (
    <img
      src={src}
      className={`rounded-full bg-gray-300 w-10 h-10 flex-shrink-0 ${className}`}
    />
  );
};
