import React, { useState, useRef } from 'react'

const Tabs = ({
    tabs = '',
    radio = false,
    type = ''
}) => {
    const [activeTab, setActiveTab] = useState(0);

    const tabRefs = useRef([]);

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

    let classes = 'sui-tabs';
    
    type === 'flushed' && (classes += ' sui-tabs-flushed');

    type === 'overflow' && (classes += ' sui-tabs-overflow');

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

    return (
        <div className={classes}>
            {type === 'overflow' && (
                <div tabIndex={-1} className="sui-tabs-navigation" aria-hidden="true">
                    <button type="button" className="sui-button-icon sui-tabs-navigation--left" onClick={() => scrollPosition('left',25,100,10)}>
                        <span className="sui-icon-chevron-left"></span>
                    </button>
                    <button type="button" className="sui-button-icon sui-tabs-navigation--right" onClick={() => scrollPosition('right',25,100,10)}>
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