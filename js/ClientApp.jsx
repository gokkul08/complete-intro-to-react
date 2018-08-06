import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const MyTitle = function(props) {
  return (
    <div>
      <h1 style={{color: props.color}}>{props.title}</h1>
    </div>
  );
};

const MyFirstComponent = function() {
  return ce(
    <div id="my-first-component">
      <MyTitle title="Game of Thrones" color="YellowGreen" />
      <MyTitle title="Stranger Things" color="GreenYellow" />
      <MyTitle title="House of Cards" color="Peru" />
      <MyTitle title="Daredevil" color="burlywood" />
    </div>
  );
};

render(ce(MyFirstComponent), document.getElementById('app'));
