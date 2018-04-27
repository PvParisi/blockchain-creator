import crypto from 'crypto';

import Block from './Block';

class Blockchain {
	constructor() {
		this.blockchain = [Block.genesis()];
		this.difficulty = 3;
	}

	get() {
		return this.blockchain;
	}

	get lastBlock() {
		return this.blockchain[this.blockchain.length - 1];
	}

	mine(data) {
		const newBlock = this.generateNextBlock(data);

		try {
			this.addBlock(newBlock);
		} catch (err) {
			throw err;
		}
	}

	generateNextBlock(data) {
		let nonce = 0;
		let timestamp = new Date().getTime(); // or Date.now()

		let nextHash = this.computeHash(
			this.lastBlock.index + 1,
			this.lastBlock.hash,
			timestamp,
			data,
			nonce
		)

		while(!this.isValidHash(nextHash)) {
			nonce++;

			nextHash = this.computeHash(
				this.lastBlock.index - 1,
				this.lastBlock.hash,
				timestamp,
				data,
				nonce
			)
		}

		return new Block(
			this.lastBlock.index + 1,
			this.lastBlock.hash,
			timestamp,
			data,
			nextHash,
			nonce
		)
	}

	addBlock(block) {
		if (this.isValidNextBlock(block, this.lastBlock)) {
			this.blockchain.push(block);
		} else {
			throw new Error("ERROR: invalid block");
		}
	}

	isValidNextBlock(nextBlock, currentBlock) {
		const nextBlockHash = this.computeHashForBlock(nextBlock);

		if (currentBlock.index + 1 !== nextBlock.index) {
			console.log("ERROR: invalid index");
			return false;
		}

		if (currentBlock.hash !== nextBlock.previousHash){
			console.log("ERROR: invalid previous hash");
			return false;
		}

		if (nextBlockHash !== nextBlock.hash) {
			console.log("ERROR: invalid hash");
			return false;
		}

		if (!this.isValidHash(nextBlockHash)) {
			console.log("ERROR: invalid hash (difficulty not compliant)");
			return false;
		}

		return true;
	}

	computeHash(index, previousHash, timestamp, data, nonce) {
		return crypto
			.createHash("sha256") // SHA256 Hash Function
			.update(index + previousHash + timestamp + data + nonce)
			.digest("hex");
	}

	computeHashForBlock(block) {
		const { index, previousHash, timestamp, data, nonce } = block;

		return this.computeHash(index, previousHash, timestamp, data, nonce);
	}

	isValidHash(hash) {
		for (var i = 0; i < hash.length; i++) {
			if (hash[i] !== '0') {
				break;
			}
		}

		return i >= this.difficulty;
	}
}

export default Blockchain;