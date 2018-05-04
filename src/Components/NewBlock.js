import React from 'react';

const NewBlock = ({addBtnClicked}) => {
	return(
		<div className='card mx-auto block-width'>
			<div className='card-body'>
				<h4 className='card-title'>Add New Block</h4>
				<form>
					<div class="form-group">
						<label for="inputData">Data</label>
						<input type="text" class="form-control" id="inputData" placeholder="insert data here"></input>
					</div>
					<button class="btn btn-primary btn-round" onClick={addBtnClicked}>
						Add new Block
					</button>
				</form>
			</div>
		</div>
	);
}

export default NewBlock;