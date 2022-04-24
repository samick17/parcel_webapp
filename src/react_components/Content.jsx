import React from 'react';
import ImageItem from './ImageItem.jsx';

const imgs = [
'dog_muzzle_butterfly_tongue_sticking_out_spring_summer_93617_300x168.jpeg',
'dog_cat_kitten_puppy_grass_65389_300x168.jpeg',
'dog_shepherd_sits_118661_300x168.jpeg',
];

class Content extends React.Component {

	items = [
	{
		url: new URL(
		  `../assets/dog_muzzle_butterfly_tongue_sticking_out_spring_summer_93617_300x168.jpeg`,
		  import.meta.url
		),
		resolution: '300x168',
		tags: ['dog', 'muzzle', 'butterfly'],
	},
	{
		url: new URL(
		  `../assets/dog_cat_kitten_puppy_grass_65389_300x168.jpeg`,
		  import.meta.url
		),
		resolution: '300x168',
		tags: ['dog', 'cat', 'kitten'],
	},
	{
		url: new URL(
		  `../assets/dog_shepherd_sits_118661_300x168.jpeg`,
		  import.meta.url
		),
		resolution: '300x168',
		tags: ['dog', 'shepherd', 'stis'],
	},
	];

	// convertToURL() {
	// 	const imageUrl = new URL(
	// 	  `../assets/dog_shepherd_sits_118661_300x168.jpeg`,
	// 	  import.meta.url
	// 	);
	// 	return imageUrl;
	// }

	// constructor(props) {
	// 	super(props);
	// 	this.imageUrl = this.convertToURL();
	// 	console.log(this.images);
	// }

	render() {
		return <div style={{display:'inline-block'}}>
			{/*<img src={this.imageUrl.href}/>*/}
			{/* Render By Element (Before) */}
			{
				// this.items.map((item, index) => {
				// 	return <div style={{float:'left',padding:'2'}}>
				// 		<img
				// 			key={index}
				// 			src={item.url}
				// 		/>
				// 		<div style={{backgroundColor:'rgba(0, 0, 0, .25)'}}>
				// 			<div>{item.resolution}</div>
				// 			<div>{item.tags.join(', ')}</div>
				// 		</div>
				// 	</div>
				// })
			}
			{/* Render By ImageItem (After) */}
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
