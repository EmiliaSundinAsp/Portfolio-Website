import { useState } from "react";

function CoinFlip () {
	let [Coin, setCoin] = useState("");
	if (Coin === "Heads") {
		return (
			<div>
				<h2 className="message">You got heads!</h2>
				<button className="Btn" onClick={function() {
					setCoin("")
				}}>Try again</button>
			</div>
		)
	}
	if (Coin === "Tails") {
		return (
			<div>
				<h2 className="message">You got tails!</h2>
				<button className="Btn" onClick={function() {
					setCoin("")
				}}>Try again</button>
			</div>
		)
	}
	return (
		<button className="Btn" onClick={function() {
			if (Math.random() > 0.5) {
				setCoin("Heads")
			}
			else {
				setCoin("Tails")
			}
		}}>Flip the coin</button>
	)
}

export default CoinFlip;