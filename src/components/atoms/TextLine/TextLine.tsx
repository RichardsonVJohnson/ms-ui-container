/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
interface ITextLine {
  text?: string;
  className?: string;
}
export const TextLine: React.FC<ITextLine> = ({ text, className }) => {
  return <p className={className}>{text}</p>;
};
