import React from 'react';
import './index.scss';

const Tag = ({ className, active, text, ...props }) => <div className={`${className} tag-container ${active ? 'tag-active' : ''}`} {...props} />

export default Tag