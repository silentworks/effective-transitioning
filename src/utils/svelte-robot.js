import { writable } from 'svelte/store'
import { interpret } from 'robot3'

export function useMachine(machine, event) {
	const { subscribe, set } = writable(machine.current)
	
	const service = interpret(machine, service => {
		set(service.machine.current, event)
	})
	
	return [{ subscribe }, service.send, service]
}