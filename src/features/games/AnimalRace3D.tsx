import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface Props {
	count: number
	running: boolean
	winner: number | null
	finishOrder: number[]
	labels: string[]
	labelsTitle: string
	rankingTitle: string
}

const RACE_MS = 5000

export default function AnimalRace3D({
	count,
	running,
	winner,
	finishOrder,
	labels,
	labelsTitle,
	rankingTitle,
}: Props) {
	const mount = useRef<HTMLDivElement>(null)
	const state = useRef({ running, winner, finishOrder })
	state.current = { running, winner, finishOrder }

	useEffect(() => {
		const host = mount.current
		if (!host) return
		let renderer: THREE.WebGLRenderer
		try {
			renderer = new THREE.WebGLRenderer({
				antialias: true,
				powerPreference: 'low-power',
			})
		} catch {
			host.classList.add('no-webgl')
			return
		}

		const scene = new THREE.Scene()
		scene.background = new THREE.Color('#101b2d')
		const modelHeight = Math.max(3.6, count * 0.84 + 2.4)
		const camera = new THREE.OrthographicCamera(
			-4,
			4,
			modelHeight / 2,
			-modelHeight / 2,
			0.1,
			60,
		)
		camera.position.set(0, 0, 16)
		camera.lookAt(0, 0, 0)
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
		renderer.outputColorSpace = THREE.SRGBColorSpace
		renderer.setClearColor('#101b2d', 1)
		renderer.shadowMap.enabled = true
		renderer.shadowMap.type = THREE.PCFSoftShadowMap
		renderer.domElement.setAttribute('aria-hidden', 'true')
		host.prepend(renderer.domElement)

		scene.add(new THREE.HemisphereLight(0xeaf3ff, 0x34354a, 2.2))
		const keyLight = new THREE.DirectionalLight(0xfff1db, 2.5)
		keyLight.position.set(-3, 6, 8)
		keyLight.castShadow = true
		keyLight.shadow.mapSize.set(512, 512)
		scene.add(keyLight)
		const rim = new THREE.DirectionalLight(0xffffff, 1.1)
		rim.position.set(4, 1, -4)
		scene.add(rim)

		const materials = new Map<string, THREE.MeshStandardMaterial>()
		const getMaterial = (color: string) => {
			let mat = materials.get(color)
			if (!mat) {
				mat = new THREE.MeshStandardMaterial({
					color,
					roughness: 0.78,
					flatShading: true,
				})
				materials.set(color, mat)
			}
			return mat
		}
		const geometries = {
			ball: new THREE.SphereGeometry(1, 9, 6),
			cone: new THREE.ConeGeometry(1, 1, 5),
			cylinder: new THREE.CylinderGeometry(0.5, 0.5, 1, 6),
			box: new THREE.BoxGeometry(1, 1, 1),
		}
		const runners: {
			root: THREE.Group
			legs: THREE.Group[]
			bob: THREE.Group
		}[] = []
		const add = (
			parent: THREE.Object3D,
			shape: keyof typeof geometries,
			color: string,
			position: [number, number, number],
			scale: [number, number, number],
			rotation: [number, number, number] = [0, 0, 0],
		) => {
			const mesh = new THREE.Mesh(geometries[shape], getMaterial(color))
			mesh.position.set(...position)
			mesh.scale.set(...scale)
			mesh.rotation.set(...rotation)
			mesh.castShadow = true
			mesh.receiveShadow = true
			parent.add(mesh)
			return mesh
		}

		const runnerColors = [
			['#b88454', '#75462e', '#f1d9bf'],
			['#d19b58', '#7a5137', '#f2dfc5'],
			['#e6d9c9', '#b59b82', '#ef93aa'],
			['#3d916a', '#256447', '#87ba77'],
			['#e89aab', '#c66b80', '#f8d7d9'],
			['#d77b38', '#a4472e', '#f3e6d2'],
			['#8d684f', '#5a4135', '#d7b89a'],
			['#eee8dd', '#282d37', '#f7f1e7'],
			['#db8b42', '#332b2a', '#fff0d9'],
			['#817f7a', '#55565a', '#d9d6d0'],
		]

		for (let i = 0; i < count; i++) {
			const [coat, dark, light] = runnerColors[i]
			const root = new THREE.Group()
			const bob = new THREE.Group()
			root.add(bob)
			scene.add(root)
			add(bob, 'ball', coat, [0, 0.36, 0], [0.46, 0.27, 0.25])
			add(bob, 'ball', coat, [0.35, 0.53, 0.01], [0.25, 0.25, 0.23])
			add(bob, 'ball', light, [0.48, 0.43, 0.2], [0.105, 0.075, 0.055])
			add(bob, 'ball', '#17233a', [0.39, 0.59, 0.2], [0.035, 0.045, 0.025])

			// Character details make each runner recognizable from the side.
			if (i === 0) {
				// cat
				add(
					bob,
					'cone',
					dark,
					[0.22, 0.73, 0],
					[0.13, 0.29, 0.11],
					[0, 0, -0.15],
				)
				add(
					bob,
					'cone',
					dark,
					[0.47, 0.73, 0.02],
					[0.13, 0.29, 0.11],
					[0, 0, 0.15],
				)
				add(
					bob,
					'cone',
					dark,
					[-0.48, 0.47, 0],
					[0.12, 0.72, 0.12],
					[0, 0, -0.85],
				)
			} else if (i === 1) {
				// dog
				add(
					bob,
					'ball',
					dark,
					[0.28, 0.46, 0.13],
					[0.11, 0.22, 0.09],
					[0, 0, -0.3],
				)
				add(
					bob,
					'ball',
					dark,
					[0.43, 0.47, -0.12],
					[0.11, 0.22, 0.09],
					[0, 0, -0.3],
				)
				add(bob, 'ball', light, [0.54, 0.4, 0.02], [0.18, 0.11, 0.16])
			} else if (i === 2) {
				// rabbit
				add(bob, 'ball', light, [-0.49, 0.36, 0.13], [0.11, 0.11, 0.11])
				add(
					bob,
					'cone',
					coat,
					[0.23, 0.83, 0],
					[0.09, 0.48, 0.07],
					[0, 0, -0.12],
				)
				add(
					bob,
					'cone',
					coat,
					[0.43, 0.82, 0.04],
					[0.09, 0.48, 0.07],
					[0, 0, 0.1],
				)
			} else if (i === 3) {
				// turtle
				add(bob, 'ball', dark, [-0.02, 0.53, -0.03], [0.38, 0.27, 0.29])
				add(bob, 'ball', coat, [0.39, 0.47, 0], [0.16, 0.15, 0.15])
			} else if (i === 4) {
				// pig
				add(bob, 'cone', coat, [0.24, 0.75, 0], [0.1, 0.19, 0.09], [0, 0, -0.5])
				add(bob, 'cone', coat, [0.47, 0.75, 0], [0.1, 0.19, 0.09], [0, 0, 0.5])
				add(bob, 'ball', '#df7790', [0.55, 0.42, 0.2], [0.13, 0.1, 0.06])
			} else if (i === 5) {
				// fox
				add(
					bob,
					'cone',
					dark,
					[0.61, 0.43, 0],
					[0.13, 0.16, 0.12],
					[0, 0, -Math.PI / 2],
				)
				add(
					bob,
					'cone',
					coat,
					[-0.48, 0.51, 0],
					[0.14, 0.62, 0.13],
					[0, 0, -0.9],
				)
				add(bob, 'ball', light, [-0.64, 0.29, 0], [0.1, 0.12, 0.11])
			} else if (i === 6) {
				// bear
				add(bob, 'ball', dark, [0.22, 0.73, 0], [0.12, 0.13, 0.12])
				add(bob, 'ball', dark, [0.48, 0.73, 0], [0.12, 0.13, 0.12])
				add(bob, 'ball', light, [0.48, 0.41, 0.19], [0.15, 0.11, 0.07])
			} else if (i === 7) {
				// panda
				add(bob, 'ball', dark, [0.21, 0.72, 0], [0.13, 0.14, 0.13])
				add(bob, 'ball', dark, [0.49, 0.72, 0], [0.13, 0.14, 0.13])
				add(
					bob,
					'ball',
					dark,
					[0.41, 0.58, 0.18],
					[0.075, 0.1, 0.06],
					[0, 0, -0.25],
				)
			} else if (i === 8) {
				// tiger
				for (const x of [-0.23, 0, 0.22])
					add(
						bob,
						'box',
						dark,
						[x, 0.37, 0.23],
						[0.065, 0.35, 0.035],
						[0, 0, x],
					)
				add(
					bob,
					'cone',
					dark,
					[0.28, 0.73, 0],
					[0.12, 0.25, 0.1],
					[0, 0, -0.18],
				)
				add(bob, 'cone', dark, [0.49, 0.73, 0], [0.12, 0.25, 0.1], [0, 0, 0.18])
			} else {
				// elephant
				add(bob, 'ball', light, [0.24, 0.51, 0.18], [0.23, 0.27, 0.08])
				add(
					bob,
					'cylinder',
					coat,
					[0.55, 0.22, 0.04],
					[0.095, 0.29, 0.095],
					[0, 0, -0.15],
				)
				add(
					bob,
					'cone',
					'#f5eddb',
					[0.56, 0.37, 0.17],
					[0.045, 0.14, 0.045],
					[0, 0, -Math.PI / 2],
				)
			}

			const legs: THREE.Group[] = []
			for (const x of [-0.27, 0.29]) {
				for (const z of [-0.13, 0.13]) {
					const leg = new THREE.Group()
					leg.position.set(x, 0.28, z)
					bob.add(leg)
					add(
						leg,
						'cylinder',
						i === 7 && x < 0 ? dark : coat,
						[0, -0.13, 0],
						[0.09, 0.31, 0.09],
					)
					legs.push(leg)
				}
			}
			runners.push({ root, legs, bob })
		}
		const winnerRingGeometry = new THREE.RingGeometry(0.48, 0.62, 12)
		const winnerRingMaterial = new THREE.MeshBasicMaterial({
			color: 0xec5990,
			transparent: true,
			opacity: 0.72,
			side: THREE.DoubleSide,
		})
		const winnerRing = new THREE.Mesh(winnerRingGeometry, winnerRingMaterial)
		winnerRing.position.z = -0.08
		winnerRing.visible = false
		scene.add(winnerRing)

		const laneMat = new THREE.MeshBasicMaterial({
			color: 0x738096,
			transparent: true,
			opacity: 0.24,
		})
		const laneGeometry = new THREE.PlaneGeometry(1, 0.012)
		for (let i = 0; i < count; i++) {
			const lane = new THREE.Mesh(laneGeometry, laneMat)
			lane.scale.x = 20
			lane.position.set(0, (count - 1) * 0.42 - i * 0.84, -0.12)
			scene.add(lane)
		}
		const finish = new THREE.Group()
		const finishMaterial = new THREE.MeshBasicMaterial({ color: 0xec5990 })
		for (let i = 0; i < count; i++) {
			const square = new THREE.Mesh(
				new THREE.PlaneGeometry(0.11, 0.11),
				finishMaterial,
			)
			square.position.set(0, (count - 1) * 0.42 - i * 0.84, 0.02)
			finish.add(square)
		}
		scene.add(finish)
		const shadowMaterial = new THREE.MeshBasicMaterial({
			color: 0x081229,
			transparent: true,
			opacity: 0.28,
		})
		const shadowPlane = new THREE.Mesh(
			new THREE.PlaneGeometry(20, modelHeight + 1),
			shadowMaterial,
		)
		shadowPlane.position.z = -0.25
		scene.add(shadowPlane)
		const runway = () => {
			const width = camera.right - camera.left
			const finishMargin = Math.min(4.25, width * 0.26)
			return {
				startX: camera.left + Math.min(1.85, width * 0.2),
				finishX: camera.right - finishMargin,
				rankGap: Math.min(0.28, (finishMargin - 0.85) / Math.max(1, count - 1)),
			}
		}

		const resize = () => {
			const { width, height } = host.getBoundingClientRect()
			if (!width || !height) return
			const aspect = width / height
			const viewHeight = Math.max(modelHeight, 6 / Math.max(aspect, 0.4))
			camera.left = (-viewHeight * aspect) / 2
			camera.right = (viewHeight * aspect) / 2
			camera.top = viewHeight / 2
			camera.bottom = -viewHeight / 2
			camera.updateProjectionMatrix()
			renderer.setSize(width, height, false)
			const { startX, finishX, rankGap } = runway()
			const labels = host.querySelector<HTMLOListElement>('.animal-race-labels')
			const laneSpan = ((count - 1) * 0.84 * height) / viewHeight
			if (labels) {
				labels.style.top = `${height / 2 - laneSpan / 2 - 8 - (0.36 * height) / viewHeight}px`
				labels.style.bottom = 'auto'
				labels.style.height = `${laneSpan + 16}px`
			}
			const done =
				!state.current.running &&
				state.current.winner !== null &&
				state.current.finishOrder.length === count
			runners.forEach((runner, index) => {
				const laneY = (count - 1) * 0.42 - index * 0.84
				const won = done && index === state.current.winner
				const rank = state.current.finishOrder.indexOf(index)
				const finishOffset = 0.25 + (count - 1 - Math.max(0, rank)) * rankGap
				runner.root.position.set(
					done ? finishX + finishOffset : startX,
					laneY,
					0,
				)
				runner.root.scale.setScalar(won ? 1.35 : 1)
			})
			winnerRing.visible = done
			if (done && state.current.winner !== null) {
				winnerRing.position.set(
					runners[state.current.winner].root.position.x,
					runners[state.current.winner].root.position.y + 0.36,
					-0.08,
				)
			}
			finish.position.x = finishX
			renderer.render(scene, camera)
		}
		const observer = new ResizeObserver(resize)
		observer.observe(host)
		resize()

		let frame = 0
		let started = 0
		const animate = (now: number) => {
			if (!state.current.running) return
			if (!started) started = now
			const elapsed = Math.min(1, (now - started) / RACE_MS)
			const { startX, finishX, rankGap } = runway()
			const rankByAnimal = new Map(
				finishOrder.map((animal, rank) => [animal, rank]),
			)
			runners.forEach((runner, index) => {
				const rank = rankByAnimal.get(index) ?? index
				const finishAt = 0.78 + (rank / Math.max(1, count - 1)) * 0.2
				const localProgress = THREE.MathUtils.clamp(elapsed / finishAt, 0, 1)
				const finished = localProgress >= 1
				const backingAndSurge =
					Math.sin(elapsed * Math.PI * 6 + index * 2.35) *
					0.2 *
					Math.sin(Math.PI * localProgress)
				const raceProgress = THREE.MathUtils.clamp(
					localProgress * 0.96 + backingAndSurge,
					0,
					0.98,
				)
				const finishOffset = 0.25 + (count - 1 - rank) * rankGap
				if (finished) {
					const runout = THREE.MathUtils.clamp(
						(elapsed - finishAt) / (1 - finishAt),
						0,
						1,
					)
					runner.root.position.x =
						finishX + finishOffset * (runout * runout * (3 - 2 * runout))
				} else {
					runner.root.position.x = startX + (finishX - startX) * raceProgress
				}
				runner.bob.position.y =
					Math.sin(now * 0.018 + index) * 0.04 * (finished ? 0 : 1)
				runner.legs.forEach((leg, legIndex) => {
					leg.rotation.z = !finished
						? Math.sin(now * 0.026 + index + legIndex * Math.PI) * 0.65
						: 0
				})
			})
			renderer.render(scene, camera)
			if (elapsed < 1 && state.current.running)
				frame = requestAnimationFrame(animate)
		}
		if (running) frame = requestAnimationFrame(animate)
		else if (winner !== null && finishOrder.length === count) {
			const { finishX, rankGap } = runway()
			runners.forEach((runner, index) => {
				const won = index === winner
				const rank = finishOrder.indexOf(index)
				runner.root.position.x = finishX + 0.25 + (count - 1 - rank) * rankGap
				runner.root.scale.setScalar(won ? 1.35 : 1)
			})
			winnerRing.visible = true
			winnerRing.position.set(
				runners[winner].root.position.x,
				runners[winner].root.position.y + 0.36,
				-0.08,
			)
			renderer.render(scene, camera)
		}

		return () => {
			cancelAnimationFrame(frame)
			observer.disconnect()
			renderer.dispose()
			Object.values(geometries).forEach((geometry) => geometry.dispose())
			laneGeometry.dispose()
			scene.traverse((object) => {
				if (
					object instanceof THREE.Mesh &&
					!Object.values(geometries).includes(object.geometry)
				)
					object.geometry.dispose()
			})
			materials.forEach((mat) => mat.dispose())
			laneMat.dispose()
			finishMaterial.dispose()
			winnerRingGeometry.dispose()
			winnerRingMaterial.dispose()
			shadowMaterial.dispose()
			renderer.domElement.remove()
		}
	}, [count, finishOrder, running, winner])

	return (
		<div className="animal-race">
			<div
				className="animal-race-stage"
				ref={mount}
				style={{ height: `${Math.min(560, Math.max(250, count * 56 + 20))}px` }}
			>
				<ol className="animal-race-labels" aria-label={labelsTitle}>
					{labels.map((label) => (
						<li key={label}>{label}</li>
					))}
				</ol>
			</div>
			{!running && finishOrder.length === count && (
				<ol className="race-results" aria-label={rankingTitle}>
					{finishOrder.map((animal, rank) => (
						<li key={animal}>
							<span className="race-results-rank">{rank + 1}</span>
							<span>{labels[animal]}</span>
						</li>
					))}
				</ol>
			)}
		</div>
	)
}
