import { CodeBlock, atomOneDark } from 'react-code-blocks';
import JupyterCode from '../code/Jupyter.txt'
const Jupyter = () => {
  
  return (
    <div
      style={{
        fontFamily: 'Fira Code',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        overflowX: 'auto',
      }}
    >
      <div
        style={{
          width: '100%',
          flex: 1,
          background: atomOneDark.builtInColor,
          paddingBottom: '1em',
        }}
      >
        <h5 style={{ textAlign: 'center' }}>Query</h5>
        <CodeBlock text={JupyterCode}
          theme={atomOneDark}
          customStyle={{
            height: '250px',
            overflowY: 'scroll',
            margin: '0px 0.75rem',
            borderRadius: '5px',
            boxShadow: '1px 2px 3px rgba(0,0,0,0.35)',
            fontSize: '0.75rem',
          }}
        />
      </div>
      
     
    </div>
  );
};

export default Jupyter;
