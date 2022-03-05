import Mobile from "./Mobile";
import Web from "./Web";
import withScreenSizes from "../Hoc/withScreenSizes";

const Demo = ({width, height}) => {
    // console.log('props', props)
    // const width=1200;
  return (
    <div>
      <h1>Demo</h1>
      {/* <Mobile />
      <Web /> */}

      {
          width>=1200? <Web />:<Mobile />
      }
    </div>
  );
};

export default withScreenSizes(Demo);
