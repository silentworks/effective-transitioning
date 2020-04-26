import { writable } from 'svelte/store'
import { interpret } from 'robot3'

export function useMachine(machine) {
	const { subscribe, set } = writable(machine.current)
	
	const service = interpret(machine, service => {
		set(service.machine.current)
	})
	
	return [{ subscribe }, service.send, service]
}