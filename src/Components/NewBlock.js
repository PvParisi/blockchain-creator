import React from 'react';

const NewBlock = ({addBtnClicked}) => {
	return(
		<div className='card mx-auto block-width'>
			<div className='card-body'>
				<h4 className='card-title'>Add New Block</h4>
				<form>
					<div className="form-group">
						<label htmlFor="inputData">Data</label>
						<input type="text" className="form-control" id="inputData" placeholder="insert data here"></input>
					</div>
					<button className="btn btn-primary btn-round" onClick={addBtnClicked}>
						Add new Block
					</button>
				</form>
			</div>
		</div>
	);
}

export default NewBlock;