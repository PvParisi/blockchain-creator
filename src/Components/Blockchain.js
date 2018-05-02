import React from 'react';
import BlockComponent from './Block';

const BlockchainComponent = ({ blocks }) => {
	return(
		<div>
			{
                blocks.map((block, i) => {
                    return (
                        <BlockComponent
                            index = {blocks[i].index}
                            previousHash = {blocks[i].previousHash}
                            timestamp = {blocks[i].timestamp}
                            data = {blocks[i].data}
                            hash = {blocks[i].hash}
                            nonce = {blocks[i].nonce}
                        />
                    );
                })
            }
		</div>
	);
}

export default BlockchainComponent;