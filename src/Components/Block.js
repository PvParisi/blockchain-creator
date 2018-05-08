import React from 'react';

const BlockComponent = ({ index, previousHash, timestamp, data, hash, nonce }) => {
	return(
		<div className='card mx-auto block-width'>
			<div className='card-body'>
				<h4 className='card-title'>Block #{index}</h4>
				<form>
					<div className="form-group">
						<label htmlFor="inputData">Data</label>
						<input type="text" className="form-control" id="inputData" value={data} placeholder={data}></input>
					</div>
					<div className="form-group">
						<label htmlFor="inputPreviousHash">Previous Hash</label>
						<input type="text" className="form-control" id="previousHash" placeholder={previousHash} disabled></input>
					</div>
					<div className="form-group">
						<label htmlFor="inputHash">Hash</label>
						<input type="text" className="form-control" id="inputHash" placeholder={hash} disabled></input>
					</div>
					<div className="form-row">
					    <div className="form-group col-md-7">
							<label htmlFor="inputTimestamp">Created on</label>
							<input type="text" className="form-control" id="inputTimestamp" placeholder={timestamp} disabled></input>
						</div>
						<div className="form-group col-md-3">
							<label htmlFor="inputNonce">Nonce</label>
							<input type="text" className="form-control" id="inputNonce" placeholder={nonce} disabled></input>
						</div>
						<div className="form-group col-md-2">
							<button className="btn btn-primary btn-fab btn-fab-mini btn-round" disabled>
								<i className="material-icons">autorenew</i>
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default BlockComponent;