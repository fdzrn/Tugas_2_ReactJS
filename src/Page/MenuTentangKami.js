import React, {Component} from 'react';

class MenuTentangKami extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tentang: "Warung Nusantara Adalah Restoran yang Bernuansa Nusantara,Kami ada untuk Membuat Anda Menikmati Makanan Khas dari Nusantara"
		}
	}
	render() {
		return (
			<div>
				<center>
					<p>Tentang Kami</p> {this.state.tentang}
				</center>
			</div>
		);
	}
}

export default MenuTentangKami;