import React from 'react';
import ImageItem from './ImageItem.jsx';

function convertToURL(name) {
	return `/assets/${name}`;
}

class Content extends React.Component {

	items = [
	{
		url: convertToURL('dog_muzzle_butterfly_tongue_sticking_out_spring_summer_93617_300x168.jpeg'),
		resolution: '300x168',
		tags: ['dog', 'muzzle', 'butterfly'],
	},
	{
		url: convertToURL('dog_cat_kitten_puppy_grass_65389_300x168.jpeg'),
		resolution: '300x168',
		tags: ['dog', 'cat', 'kitten'],
	},
	{
		url: convertToURL('dog_shepherd_sits_118661_300x168.jpeg'),
		resolution: '300x168',
		tags: ['dog', 'shepherd', 'stis'],
	},
	];

	render() {
		return <div style={{display:'inline-block'}}>
			{
				this.items.map((item, index) => {
					return <ImageItem
						key={index}
						item={item}
					/>
				})
			}
		</div>
	}

}

export default Content;
