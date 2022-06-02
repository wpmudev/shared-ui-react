import React, { useState } from 'react'

const Tabs = ({
    tabs = '',
    radio = false, 
}) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="sui-tabs">
            <div role="tablist" className="sui-tabs-menu">
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
                                        checked={activeTab === index ? true : false}
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