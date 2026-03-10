class SmartEventListener {
    constructor() {
        this.listeners = [];
    }
    
    add(element, event, handler, options = {}) {
        const wrappedHandler = (e) => {
            handler(e);
        };
        
        element.addEventListener(event, wrappedHandler, options);
        
        this.listeners.push({
            element,
            event,
            handler: wrappedHandler,
            options
        });
        
        
        return () => this.remove(element, event, wrappedHandler);
    }
    
    remove(element, event, handler) {
        element.removeEventListener(event, handler);
        this.listeners = this.listeners.filter(l => 
            !(l.element === element && l.event === event && l.handler === handler)
        );
    }
    
    removeAll() {
        this.listeners.forEach(({ element, event, handler, options }) => {
            element.removeEventListener(event, handler, options);
        });
        this.listeners = [];
    }
}


const listener = new SmartEventListener();
const removeClick = listener.add(document, 'click', () => {
    console.log('Клик!');
});
