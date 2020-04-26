import { createMachine, state, transition, invoke, state as final } from 'robot3'
import { useMachine } from './svelte-robot.js'

const transitionTypes = createMachine({
    differentTransitions: state(
        transition('nextIn', 'fade'),
    ),
    fade: state(
        transition('nextIn', 'blur'),
        transition('previousIn', 'differentTransitions')
    ),
    blur: state(
        transition('nextIn', 'fly'),
        transition('previousIn', 'fade')
    ),
    fly: state(
        transition('nextIn', 'slide'),
        transition('previousIn', 'blur'),
    ),
    slide: state(
        transition('nextIn', 'scale'),
        transition('previousIn', 'fly')
    ),
    scale: state(
        transition('nextIn', 'end'),
        transition('previousIn', 'slide')
    ),
    end: final()
})

const maximiseExamples = createMachine({
    maximise: state(
        transition('nextIn', 'delay'),
    ),
    delay: state(
        transition('nextIn', 'shoppingBagSimple'),
        transition('previousIn', 'maximise')
    ),
    shoppingBagSimple: state(
        transition('nextIn', 'shoppingBag'),
        transition('previousIn', 'delay')
    ),
    shoppingBag: state(
        transition('nextIn', 'modalSimple'),
        transition('previousIn', 'shoppingBagSimple')
    ),
    modalSimple: state(
        transition('nextIn', 'modal'),
        transition('previousIn', 'shoppingBag')
    ),
    modal: state(
        transition('nextIn', 'modalCode'),
        transition('previousIn', 'modalSimple')
    ),
    modalCode: state(
        transition('nextIn', 'notification'),
        transition('previousIn', 'modal')
    ),
    notification: final()
})

const routingMachine = initial => createMachine(initial, {
    start: state(
        transition('next', 'what'),
    ),
    what: state(
        transition('previous', 'start'),
        transition('next', 'differentTransitions')
    ),
    differentTransitions: invoke(transitionTypes,
        transition('nextIn', 'fade'),
        transition('previous', 'what'),
        transition('next', 'maximise'),
    ),
    maximise: invoke(maximiseExamples,
        transition('previous', 'differentTransitions'),
        transition('next', 'noCss'),
    ),
    noCss: state(
        transition('previous', 'maximise'),
        transition('next', 'thankYou'),
    ),
    /* events: state(
        transition('previous', 'noCss'),
        transition('next', 'thankYou'),
    ), */
    thankYou: state(
        transition('previous', 'noCss'),
        transition('next', 'start'),
    ),
    finish: final()
})

const [current, send, service] = useMachine(routingMachine('start'))

export { current, send, service }