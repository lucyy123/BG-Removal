
type Props = {
  t1: string;
  t2: string;
  myMarginTop?:string;
};
const Heading = ({ t1, t2,myMarginTop='5rem' }: Props) => {
  return (
    <p className="bgStepsText" style={{marginTop:myMarginTop}}>
      {t1} <br /> {t2}
    </p>
  );
};

export default Heading;
