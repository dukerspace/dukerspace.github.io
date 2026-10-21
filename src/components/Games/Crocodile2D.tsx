import React, { useRef, useState } from 'react'

interface Props {
	toothLabel: (index: number) => string
	readyLabel: string
	safeLabel: string
	bittenLabel: string
	restartLabel: string
}

const COUNT = 12

export default function Crocodile2D({
	toothLabel,
	readyLabel,
	safeLabel,
	bittenLabel,
	restartLabel,
}: Props) {
	const danger = useRef<number | null>(null)
	const [pressed, setPressed] = useState<number[]>([])
	const [bitten, setBitten] = useState(false)

	function pressTooth(index: number) {
		if (bitten || pressed.includes(index)) return
		const dangerousTooth = danger.current ?? Math.floor(Math.random() * COUNT)
		danger.current = dangerousTooth
		setPressed((current) => [...current, index])
		if (index === dangerousTooth) setBitten(true)
	}

	function restart() {
		danger.current = null
		setPressed([])
		setBitten(false)
	}

	return (
		<div className="croc-2d">
			<div className={'croc-head' + (bitten ? ' is-bitten' : '')}>
				<div className="croc-eyes" aria-hidden="true">
					<span />
					<span />
				</div>
				<div className="croc-snout" aria-hidden="true">
					<span />
					<span />
				</div>
				<div className="croc-mouth">
					<div className="croc-teeth-row" aria-label={readyLabel}>
						{Array.from({ length: COUNT / 2 }, (_, index) => (
							<button
								key={index}
								type="button"
								className={
									'croc-tooth top' +
									(pressed.includes(index) ? ' is-pressed' : '')
								}
								aria-label={toothLabel(index + 1)}
								disabled={bitten || pressed.includes(index)}
								onClick={() => pressTooth(index)}
							>
								<span>{index + 1}</span>
							</button>
						))}
					</div>
					<div className="croc-throat" aria-hidden="true">
						<svg viewBox="0 0 160 92" role="presentation">
							<path d="M10 18c25 12 43 12 70 0 27 12 45 12 70 0v48c-22 12-48 12-70 0-22 12-48 12-70 0z" />
							<path d="M46 48c10-7 21-7 34 0 13-7 24-7 34 0-10 11-21 15-34 7-13 8-24 4-34-7z" />
						</svg>
					</div>
					<div className="croc-teeth-row">
						{Array.from({ length: COUNT / 2 }, (_, index) => {
							const toothIndex = index + COUNT / 2
							return (
								<button
									key={toothIndex}
									type="button"
									className={
										'croc-tooth bottom' +
										(pressed.includes(toothIndex) ? ' is-pressed' : '')
									}
									aria-label={toothLabel(toothIndex + 1)}
									disabled={bitten || pressed.includes(toothIndex)}
									onClick={() => pressTooth(toothIndex)}
								>
									<span>{toothIndex + 1}</span>
								</button>
							)
						})}
					</div>
				</div>
			</div>
			<p className="game-result" role="status" aria-live="polite">
				{bitten ? bittenLabel : pressed.length ? safeLabel : readyLabel}
			</p>
			<button className="game-action" type="button" onClick={restart}>
				{restartLabel}
			</button>
		</div>
	)
}
