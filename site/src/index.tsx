import React from 'react';
import ReactDom from 'react-dom';

const App = (): React.ReactElement => <div>Hello World</div>;

ReactDom.render(<App />, document.getElementById('root'));
