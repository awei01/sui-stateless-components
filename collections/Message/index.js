import React, { PropTypes } from 'react';
import classnames from 'classnames';

import 'semantic-ui-css/components/message.css';

export const makeMessageClasses = (classes) => {
	return classnames('ui', classes, 'message');
}
export const Message = ({ size, type, state,
						children }) => {
	const classes = makeMessageClasses({ [size]: true, [type]: true, [state]: true });
	return (
		<div className={ classes }>
			{ children }
		</div>
	);
}
