import React from 'react';

const Block = ({ index, previousHash, timestamp, data, hash, nonce }) => {
	return(
		<div className='card' style={{width: '30rem'}}>
			<div className='card-body'>
				<h4 className='card-title'>Block #{index}</h4>
				<form>
					<div class="form-group">
						<label for="inputData">Data</label>
						<input type="text" class="form-control" id="inputData" placeholder="insert data here"></input>
					</div>
					<div class="form-group">
						<label for="inputPreviousHash">Previous Hash</label>
						<input type="text" class="form-control" id="inputPreviousHash" placeholder="PreviousHash" disabled></input>
					</div>
					<div class="form-group">
						<label for="inputHash">Hash</label>
						<input type="text" class="form-control" id="inputHash" placeholder="Hash" disabled></input>
					</div>
					<div class="form-row">
					    <div class="form-group col-md-7">
							<label for="inputTimestamp">Created on</label>
							<input type="text" class="form-control" id="inputTimestamp" placeholder="Timestamp"></input>
						</div>
						<div class="form-group col-md-3">
							<label for="inputNonce">Nonce</label>
							<input type="text" class="form-control" id="inputNonce" placeholder="Nonce"></input>
						</div>
						<div class="form-group col-md-2">
							<button class="btn btn-primary btn-fab btn-fab-mini btn-round" disabled>
								<i class="material-icons">autorenew</i>
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Block;