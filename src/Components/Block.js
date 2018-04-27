import React from 'react';

const Block = ({ index, previousHash, timestamp, data, hash, nonce }) => {
	const cardDivStyle = {width: '20rem'};

	return(
		<div className='card' style={cardDivStyle}>
			<div className='card-body'>
				<h4 className='card-title'>Block</h4>
			</div>
		</div>
	);
}

export default Block;