import React from 'react';
import Styles from './index.module.css';
import ImageItem from './ImageItem.jsx';
import WallpaperItems from '../dataset/wallpaperscraft.js';

function convertToURL(name) {
	return `/assets/${name}`;
}

class Content extends React.Component {

	render() {
		return <div className={Styles.wrapper}>
			<div className={Styles.container}>
				<div className={Styles.content}>
				{
					WallpaperItems.map((item, index) => {
						return <ImageItem
							key={index}
							item={item}
						/>
					})
				}
				</div>
			</div>
		</div>
	}

}

export default Content;
