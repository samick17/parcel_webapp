import React from 'react';

class ImageItem extends React.Component {

	render() {
		const {
			item,
		} = this.props;
		return <div style={{float:'left',padding:'2'}}>
			<img
				src={item.url}
			/>
			<div style={{backgroundColor:'rgba(0, 0, 0, .25)'}}>
				<div>{item.resolution}</div>
				<div>{item.tags.join(', ')}</div>
			</div>
		</div>
	}

}

export default ImageItem;
