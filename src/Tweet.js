import React from 'react';

const Tweet = (props) => {
  const { text } = props
  return (
    <div>
    	<p>{ text }</p>
  	</div>
  );
}

export default Tweet;
