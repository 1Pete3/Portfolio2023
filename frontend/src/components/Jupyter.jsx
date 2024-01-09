import { CodeBlock, atomOneDark, dracula } from 'react-code-blocks';
import MedicalInsurance from '../code/MedicalInsuranceProject';
const Jupyter = () => {

  return (
    <div
    style={{
      fontFamily: 'Fira Code',
    }}
  >
    <CodeBlock
     
      customStyle={{
        height: '500px',
        overflow: 'scroll',
        width: '50%',
      }}
      
      showLineNumbers={true}
      theme={dracula}
      text={MedicalInsurance}
      
      overflowX={false}
    />
  </div>
  );
};

export default Jupyter;
