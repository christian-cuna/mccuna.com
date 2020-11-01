import React, { FunctionComponent } from 'react';
import {} from './index.styles';
import { render } from 'react-dom';

export type Props = {
  code: string;
};

const Code: FunctionComponent = props => {
  return render(
    <Highlight
      {...defaultProps}
      theme={theme}
      /*code={code}*/ code={props.children as string}
      language='tsx'
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            // eslint-disable-next-line react/jsx-key
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                // eslint-disable-next-line react/jsx-key
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
