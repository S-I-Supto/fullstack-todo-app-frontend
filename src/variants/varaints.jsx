export let todoListAnimation = {
    hidden: {
        x: '-100%',
        opacity: 0
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.75,
        },
    },
    exit: {
        opacity: 0
    },
}