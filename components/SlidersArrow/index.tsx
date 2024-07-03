import ArrowRightIcon from '../../public/img/arrow-right-solid.svg'
import ArrowLeftIcon from '../../public/img/arrow-left-solid.svg'

export const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    ><ArrowRightIcon /></div>
  );
}

export const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    ><ArrowLeftIcon /></div>
  );
}