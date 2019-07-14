import React from 'react'

const Rainbow = (WrappedComponent) => {
    const colours = ['red','pink','orange','blue','green','yellow'];
    const className=colours[Math.floor(Math.random()*6)]+'-text';

    return (props) => {
	return (
		<div className={className}>
		<WrappedComponent {...props} />
		</div>
	)
    }
}

export default Rainbow
