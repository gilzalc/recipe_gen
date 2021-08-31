import React from 'react'

export default function Collapsible({children, title, isInitiallyOpen = false}) {
    const [open, setOpen] = React.useState(isInitiallyOpen)
    const contentRef = React.useRef()
    // const [maxHeight, setmaxHeight] = React.useState(isInitiallyOpen ? (contentRef.current?.scrollHeight ?? 0) + 'px' : '0')

    const onClick = () => {
        setOpen(open => !open)
    }

    const maxHeight = open ? (contentRef.current?.scrollHeight ?? 0) + 'px' : '0'
    const className = `collapsible ${open ? 'active' : ''} collapsible-${title}`

    if (isInitiallyOpen && open) {
        const mH = (contentRef.current?.scrollHeight ?? 0) + 'px';
        return (
            <>
                <button className={className} onClick={onClick}> {title} </button>
                <div className="collapsedcontent" ref={contentRef} style={{mH}}>
                    {children}
                </div>
            </>
        )
    }
    return (
        <>
            <button className={className} onClick={onClick}> {title} </button>
            <div className="collapsedcontent" ref={contentRef} style={{maxHeight}}>
                {children}
            </div>
        </>
    )
}