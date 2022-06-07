import React, { useState, useRef, useEffect } from 'react'

const Tabs = ({
    tabs = '',
    radio = false,
    type = '',
    orientation = 'vertical',
}) => {
    const [activeTab, setActiveTab] = useState(0);

    const [leftButton, setLeftButton] = useState(false);
    const [rightButton, setRightButton] = useState(false);

    const tabRefs = useRef([]);
    const tabButtonRefs = useRef([]);

    // For easy reference.
    const keys = {
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        delete: 46,
        enter: 13,
        space: 32
    };

    // Add or substract depending on key pressed.
    const direction = {
        37: -1,
        38: -1,
        39: 1,
        40: 1
    };

    const overflowing = () => {
        const tabs = tabRefs.current;
        if ( tabs.scrollWidth > tabs.clientWidth ) {
            if ( 0 === tabs.scrollLeft ) {
                setLeftButton(true);
            } else {
                setLeftButton(false);
            }
            reachedEnd( 0 );
            return true;
        } else {
            setLeftButton(true);
            setRightButton(true);
            return false;
        }
    };

    useEffect(() => {
        const tabs = tabRefs.current;
        tabs.addEventListener('scroll', overflowing);
        window.addEventListener('resize', overflowing);
        overflowing();
        return () => {
            tabs.removeEventListener('scroll', overflowing);
            window.removeEventListener('resize', overflowing);
        }
    }, [tabs]);

    const reachedEnd = ( offset ) => {
        const tabs = tabRefs.current;
        var newScrollLeft,
            width,
            scrollWidth;
        newScrollLeft = tabs.scrollLeft + offset;
        width = tabs.clientWidth;
        scrollWidth = tabs.scrollWidth;

        if ( scrollWidth - newScrollLeft <= width ) {
            setRightButton(true);
        } else {
            setRightButton(false);
        }
    }

    const scrollPosition = (direction, speed, distance, step) => {
        const tabs = tabRefs.current;
        let scrollAmount = 0;
        var slideTimer = setInterval(function(){
            direction === 'left' ?
                tabs.scrollLeft -= step :
                tabs.scrollLeft += step;
            scrollAmount += step;
            if(scrollAmount >= distance) {
                clearTimeout(slideTimer);
            }
        }, speed);
    }

    const leftClick = () => {
        const tabs = tabRefs.current;
        setRightButton(false);
        if ( 0 >= tabs.scrollLeft - 150 ) {
            setLeftButton(true);
        }
        scrollPosition('left', 25, 150, 20)
        return false;
    };

    const rightClick = () => {
        setLeftButton(false);
        reachedEnd( 150 );
        scrollPosition('right', 25, 150, 20)
        return false;
    };

    const keydownEventListener = ( event, index, tablist ) => {

        var key = event.keyCode || event.which;

        switch ( key ) {

            case keys.end:
            case keys.home:
                event.preventDefault();
                break;

            // Up and down are in keydown
            // because we need to prevent page scroll.
            case keys.up:
            case keys.down:
                determineOrientation( event, index, tablist );
                break;
        }
    }

    const keyupEventListener = ( event, index ) => {
        const tablist = tabRefs.current;
        var key = event.keyCode || event.which;
        switch ( key ) {
            case keys.left :
            case keys.right :
                determineOrientation( event, index, tablist );
                break;
        }
    }

    // Either focus the next, previous, first, or last tab
    // depending on key pressed.
    const switchTabOnArrowPress = ( event, index ) => {

        var pressed, target, tabs;

        pressed = event.keyCode || event.which;

        if ( direction[pressed]) {
            target = event.target;
            tabs   = tabButtonRefs.current
            
            if ( undefined !== index ) {
                if ( tabs[index + direction[pressed] ]) {
                    tabs[index + direction[pressed] ].focus();
                } else if ( keys.left === pressed || keys.up === pressed ) {
                    tabs[tabs.length - 1].focus();
                } else if ( keys.right === pressed || keys.down === pressed ) {
                    tabs[0].focus();
                }
            }
        }
    }

    const determineOrientation = ( event, index ) => {

        var key      = event.keyCode || event.which,
            proceed  = false
            ;

        // Check if aria orientation is set to vertical.
        if ( orientation === 'vertical' ) {

            if ( keys.up === key || keys.down === key ) {
                event.preventDefault();
                proceed = true;
            }
        } else {

            if ( keys.left === key || keys.right === key ) {
                proceed = true;
            }
        }

        if ( true === proceed ) {
            switchTabOnArrowPress( event, index );
        }
    }

    let classes = 'sui-tabs';
    
    type === 'flushed' && (classes += ' sui-tabs-flushed');

    type === 'overflow' && (classes += ' sui-tabs-overflow');

    return (
        <div className={classes}>
            {type === 'overflow' && (
                <div tabIndex={-1} className="sui-tabs-navigation" aria-hidden="true">
                    <button type="button" className={`sui-button-icon sui-tabs-navigation--left ${leftButton && ('sui-tabs-navigation--hidden')}`} onClick={leftClick}>
                        <span className="sui-icon-chevron-left"></span>
                    </button>
                    <button type="button" className={`sui-button-icon sui-tabs-navigation--right ${rightButton && ('sui-tabs-navigation--hidden')}`} onClick={rightClick}>
                        <span className="sui-icon-chevron-right"></span>
                    </button>
                </div>
            )}

            <div role="tablist" className="sui-tabs-menu" ref={tabRefs}>
                {
                    tabs.map((tab, index) => (
                        <>
                            <button
                                key={tab.id}
                                id={tab.id}
                                className={activeTab === index ? "sui-tab-item active" : "sui-tab-item"}
                                role="tab"
                                aria-selected={activeTab === index ? "true" : "false"}
                                aria-controls={tab.content_id}
                                tabIndex={activeTab === index ? 0 : -1}
                                onClick={() => setActiveTab(index)}
                                onKeyUp={(event) => keyupEventListener(event, index)}
                                onKeyDown={(event) => keydownEventListener(event, index)}
                                ref={(element) => {tabButtonRefs.current[index] = element}}
                            >
                                {tab.title}
                            </button>
                            {radio && (
                                    <input 
                                        type="radio"
                                        name="sample-tabs"
                                        value={tab.title}
                                        className="sui-screen-reader-text"
                                        aria-label={tab.title}
                                        aria-hidden="true"
                                        defaultChecked={activeTab === index ? true : false}
                                    />
                            )}
                        </>
                    ))
                }
                
            </div>

            <div className="sui-tabs-content">
                {
                    tabs.map((tab, index) => (
                        <div
                            role="tabpanel"
                            key={tab.content_id}
                            id={tab.content_id}
                            aria-labelledby={tab.id}
                            className={activeTab === index ? "sui-tab-content active" : "sui-tab-content"}
                        >
                            {tab.content}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { Tabs }