import React from 'react';
import Styles from './index.module.css';

class ImageItem extends React.Component {

	render() {
		const {
			item,
		} = this.props;
		return <div className={Styles.item_wrapper}>
			<img
				src={item.thumbnail}
			/>
			<div className={Styles.item_info}>
				<div className={Styles.item_info_rating}>
					{item.rating}
				</div>
				{item.resolution}
				<div className={Styles.item_info_downloads}>
					{item.downloads}
				</div>
			</div>
			<div className={Styles.item_info}>
				<div className={Styles.item_info_tags}>
					{item.tags.join(', ')}
				</div>
			</div>
		</div>
	}

}

export default ImageItem;
