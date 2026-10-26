// Run with: node --experimental-strip-types scripts/games-check.mjs
import assert from 'node:assert/strict'
import { randomInt } from '../src/features/games/logic.ts'

for (const max of [2, 6, 10, 12]) {
	for (let i = 0; i < 100; i++) {
		const value = randomInt(max)
		assert.ok(value >= 0 && value < max)
	}
}
for (let i = 0; i < 100; i++) {
	const value = randomInt(6) + 1
	assert.ok(value >= 1 && value <= 6)
}
console.log('Games logic checks passed')
