import React, { useEffect, useRef, useState } from 'react'
import DefaultLayout from '../components/Layout/DefaultLayout'
import Crocodile2D from '../components/Games/Crocodile2D'
import AnimalRace3D from '../components/Games/AnimalRace3D'
import { randomInt } from '../components/Games/logic'
import { useT } from '../i18n/LocaleContext'
import type { MessageKey } from '../i18n/messages/en'
import './games.css'

const gameIds = ['crocodile', 'race', 'dice'] as const
type Game = (typeof gameIds)[number]
const animals = [
	'cat',
	'dog',
	'rabbit',
	'turtle',
	'pig',
	'fox',
	'bear',
	'panda',
	'tiger',
	'elephant',
] as const
const key = (value: string) => `games.${value}` as MessageKey

function useRound() {
	const [busy, setBusy] = useState(false)
	const locked = useRef(false)
	const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
	useEffect(
		() => () => {
			if (timer.current) clearTimeout(timer.current)
		},
		[],
	)
	function run(duration: number, prepare: () => void, finish: () => void) {
		if (locked.current) return
		locked.current = true
		setBusy(true)
		prepare()
		const reduced = window.matchMedia(
			'(prefers-reduced-motion: reduce)',
		).matches
		timer.current = setTimeout(
			() => {
				finish()
				locked.current = false
				setBusy(false)
			},
			reduced ? 100 : duration,
		)
	}
	return { busy, run }
}

function Crocodile() {
	const t = useT()
	return (
		<Crocodile2D
			toothLabel={(index) => t(key('tooth')) + ' ' + index}
			readyLabel={t(key('pickTooth'))}
			safeLabel={t(key('safe'))}
			bittenLabel={t(key('bitten'))}
			restartLabel={t(key('restart'))}
		/>
	)
}

function Race() {
	const t = useT()
	const [count, setCount] = useState(6)
	const [winner, setWinner] = useState<number | null>(null)
	const [finishOrder, setFinishOrder] = useState<number[]>([])
	const [running, setRunning] = useState(false)
	const { busy, run } = useRound()
	const labels = animals.slice(0, count).map((name) => t(key(`animal.${name}`)))
	function start() {
		const order = Array.from({ length: count }, (_, index) => index)
		for (let index = order.length - 1; index > 0; index--) {
			const swap = randomInt(index + 1)
			;[order[index], order[swap]] = [order[swap], order[index]]
		}
		run(
			5000,
			() => {
				setFinishOrder(order)
				setWinner(order[0])
				setRunning(true)
			},
			() => {
				setRunning(false)
			},
		)
	}
	return (
		<>
			<div className="game-controls">
				<label>
					{t(key('racers'))}
					<select
						value={count}
						disabled={busy}
						onChange={(e) => {
							setCount(Number(e.target.value))
							setWinner(null)
							setFinishOrder([])
						}}
					>
						{Array.from({ length: 9 }, (_, i) => (
							<option key={i} value={i + 2}>
								{i + 2}
							</option>
						))}
					</select>
				</label>
			</div>
			<AnimalRace3D
				count={count}
				running={running}
				winner={winner}
				finishOrder={finishOrder}
				labels={labels}
				labelsTitle={t(key('racerList'))}
				rankingTitle={t(key('raceRankingTitle'))}
			/>
			<p className="game-result" role="status">
				{busy
					? t(key('racing'))
					: winner !== null
						? `${t(key('winner'))}: ${t(key(`animal.${animals[winner]}`))}`
						: t(key('raceReady'))}
			</p>
			<button className="game-action" disabled={busy} onClick={start}>
				{t(key(winner === null ? 'startRace' : 'raceAgain'))}
			</button>
		</>
	)
}

function Die({ value }: { value: number }) {
	const faces = [
		{ name: 'front', value: 1 },
		{ name: 'back', value: 6 },
		{ name: 'right', value: 3 },
		{ name: 'left', value: 4 },
		{ name: 'top', value: 2 },
		{ name: 'bottom', value: 5 },
	]
	const orientation: Record<number, string> = {
		1: 'rotateX(0deg) rotateY(0deg)',
		2: 'rotateX(-90deg) rotateY(0deg)',
		3: 'rotateX(0deg) rotateY(-90deg)',
		4: 'rotateX(0deg) rotateY(90deg)',
		5: 'rotateX(90deg) rotateY(0deg)',
		6: 'rotateX(0deg) rotateY(180deg)',
	}
	return (
		<div className="die-scene" aria-hidden="true">
			<div className="die-cube" style={{ transform: orientation[value] }}>
				{faces.map(({ name, value: faceValue }) => (
					<div key={name} className={`die-face face-${name}`}>
						<div className={`die-pips pips-${faceValue}`}>
							{Array.from({ length: faceValue }, (_, i) => (
								<i key={i} />
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

function Dice() {
	const t = useT()
	const [count, setCount] = useState(1)
	const [values, setValues] = useState<number[]>([])
	const { busy, run } = useRound()
	function roll() {
		const result = Array.from({ length: count }, () => randomInt(6) + 1)
		run(
			700,
			() => setValues([]),
			() => setValues(result),
		)
	}
	return (
		<>
			<div className="game-controls">
				<label>
					{t(key('diceCount'))}
					<select
						value={count}
						disabled={busy}
						onChange={(e) => {
							setCount(Number(e.target.value))
							setValues([])
						}}
					>
						{[1, 2, 3].map((n) => (
							<option key={n}>{n}</option>
						))}
					</select>
				</label>
			</div>
			<div className={`dice-tray ${busy ? 'rolling' : ''}`}>
				{Array.from({ length: count }, (_, i) => (
					<div className="die" key={i}>
						<Die value={values[i] ?? 1} />
					</div>
				))}
			</div>
			<p className="game-result" role="status">
				{busy
					? t(key('rolling'))
					: values.length
						? `${values.join(' + ')} = ${values.reduce((a, b) => a + b, 0)}`
						: t(key('diceReady'))}
			</p>
			<button className="game-action" disabled={busy} onClick={roll}>
				{t(key('roll'))}
			</button>
		</>
	)
}

export default function GamesPage() {
	const t = useT()
	const [game, setGame] = useState<Game>('crocodile')
	return (
		<DefaultLayout>
			<div className="games-page">
				<div className="games-intro">
					<h1>{t(key('title'))}</h1>
					<p>{t(key('intro'))}</p>
				</div>
				<nav className="game-picker" aria-label={t(key('chooseGame'))}>
					{gameIds.map((id, i) => (
						<button
							key={id}
							aria-pressed={game === id}
							onClick={() => setGame(id)}
						>
							<span aria-hidden="true" className="game-symbol">
								{['⌁', '⚑', '⚄'][i]}
							</span>
							{t(key(`${id}.title`))}
						</button>
					))}
				</nav>
				<section className="game-stage" aria-labelledby="game-heading">
					<h2 id="game-heading">{t(key(`${game}.title`))}</h2>
					<p className="game-rules">{t(key(`${game}.rules`))}</p>
					<div className="game-play" key={game}>
						{game === 'crocodile' ? (
							<Crocodile />
						) : game === 'race' ? (
							<Race />
						) : (
							<Dice />
						)}
					</div>
				</section>
			</div>
		</DefaultLayout>
	)
}
