import React, { Component } from 'react';
import Banner from '../Banner';
import BannerBottom from '../BannerBottom';
import OnePhone from './OnePhone';
import { NavLink } from 'react-router-dom';
import TeamFavorite from '../TeamFavorite';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
  }

	componentDidMount() {
		this.getPhone();
	}

	getPhone = () => {
		fetch(`https://nokia-hackathon.herokuapp.com/phones`)
			.then(response => response.json())
			.then(data => {
				this.setState({ data })
			})
	}


	render() {

		return (
      <div className="home">
        <Banner />
        <TeamFavorite />
        <BannerBottom />
        <div>
          <NavLink to='/SelectorTool' activeclassname='active' >link to selector tool !!!</NavLink>
        </div>

				<div className="phones">
					{this.state.data.map(phone =>
						<OnePhone
							picture={phone.pictures}
							name={phone.model}
							shortDescription={phone.battery}
						/>
					)}
				</div>

			</div>

		);
	}

}

export default Home;

