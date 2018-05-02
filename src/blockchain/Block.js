class Block {
	constructor(index, previousHash, timestamp, data, hash, nonce) {
		this.index = index;
		this.previousHash = previousHash;
		this.timestamp = timestamp;
		this.data = data;
		this.hash = hash;
		this.nonce = nonce;
	}

	static get genesis() {
		return new Block(
			0,
			'0',
			Date.now(),
			"This is the genesis block",
			'0000000000000000000000000000000000000000000000000000000000000000',
			0
		);
	}
}

export default Block;