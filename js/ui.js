export default {
    init() {
        const isTouchScreen = window.matchMedia('(pointer: coarse)').matches;
        const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');

        const disableAnimation = isTouchScreen || isFirefox;
        
        $(document).on('click', 'aside', e => {
            $(e.currentTarget).toggleClass('open');
        });        
    }
}
