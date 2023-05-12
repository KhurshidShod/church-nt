let emojis = [
    '😐',
    '🙂',
    '😆',
    '😁',
    '🙃',
    '🥰',
    '😡',
    '😎'
]
let urlAnimate = () => {
    window.location.hash = `-${emojis[Math.floor((Date.now() / 100) % emojis.length)]}`;
    setTimeout(urlAnimate, 500)
};
urlAnimate()