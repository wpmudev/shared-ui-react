import React, { useState, useCallback } from 'react';

export const testPassFunction = ( initialValue = false ) => {
	const [ value, setValue ] = useState( initialValue );

	const toggle = useCallback( () => {
		setValue( v => !v );
	}, []);

	return [ value, toggle ];
};

export const testNumberFunction = ( initialValue = 0 ) => {
	const [ count, setCount ] = useState( initialValue );

	const increase = useCallback( () => {
		setCount( count + 1 );
	}, []);

	return [ count, increase ];
}