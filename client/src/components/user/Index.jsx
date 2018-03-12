import React, { Component } from "react";

import featuredCenterImg from '../../images/party-room.jpg';

export class Index extends Component {
  render() {
    return (
      <div className="container container-medium card">
                    <div className="row center">
<div className="col s12 m12 l12">
  <h4>BOOKED EVENTS</h4></div>

<div className="col s12 m12 l12">
	<div className="row">
		<div class="col s12 m4 l4">
                            <div class="card-panel event-card-user">
                                <h4 class="white-text truncate">Graduation Party</h4> 
                                <p class="white-text">Lagos</p>
                                <p class="white-text">12th December 2017 | 12:00 PM</p>
																<h5 className="truncate white-text">Haven Gate Garden Center</h5>
																
                            </div>
                        </div>
	<div class="col s12 m4 l4">
                            <div class="card-panel event-card-user">
                                <h4 class="white-text truncate">Graduation Party</h4> 
                                <p class="white-text">Lagos</p>
                                <p class="white-text">12th December 2017 | 12:00 PM</p>
																<h5 className="truncate white-text">Haven Gate Garden Center</h5>
                            </div>
                        </div>

	<div class="col s12 m4 l4">
                            <div class="card-panel event-card-user">
                                <h4 class="white-text truncate">Graduation Party</h4> 
                                <p class="white-text">Lagos</p>
                                <p class="white-text">12th December 2017 | 12:00 PM</p>
	<h5 className="truncate white-text">Haven Gate Garden Center</h5>
                            </div>
                        </div>
	
	</div>

	<div className="row">
		<div class="col s12 m4 l4">
                            <div class="card-panel event-card-user">
                                <h4 class="white-text truncate">Graduation Party</h4> 
                                <p class="white-text">Lagos</p>
                                <p class="white-text">12th December 2017 | 12:00 PM</p>
	<h5 className="truncate white-text">Haven Gate Garden Center</h5>
                            </div>
                        </div>
	
	</div>
</div>
 </div>
                    <hr />
                    <h5 class="center">AVAILABLE CENTERS</h5>
                    <hr />
                    <div class="row center event_center">
											<div className="col s12 m12 l12">
												<div className="row">
													<div className="col s12 m4 l4 card">
              <div className="event-center">
                <img src={featuredCenterImg} alt="Event Center" />
                <div className="over-img">
                  <h4>Royal Court</h4>
                  <p>Amuwo Odofin | Lagos</p>
									<h4>N70,000</h4>
                  
                </div>
              </div>
													</div>

													<div className="col s12 m4 l4 card">
              <div className="event-center">
                <img src={featuredCenterImg} alt="Event Center" />
                <div className="over-img">
                  <h4>Royal Court</h4>
                  <p>Ikeja | Lagos</p>
									<h4>N300,000</h4>
                  
                </div>
              </div>
													</div>

													<div className="col s12 m4 l4 card">
              <div className="event-center">
                <img src={featuredCenterImg} alt="Event Center" />
                <div className="over-img">
                  <h4>Royal Court</h4>
                  <p>Lagos</p>
                  
                </div>
              </div>
            </div>
		
												</div>
<div className="row">
													<div className="col s12 m4 l4 card">
              <div className="event-center">
                <img src={featuredCenterImg} alt="Event Center" />
                <div className="over-img">
                  <h4>Royal Court</h4>
                  <p>Lagos</p>
                  
                </div>
              </div>
													</div>

													<div className="col s12 m4 l4 card">
              <div className="event-center">
                <img src={featuredCenterImg} alt="Event Center" />
                <div className="over-img">
                  <h4>Royal Court</h4>
                  <p>Lagos</p>
                  
                </div>
              </div>
            </div>
		
												</div>
												</div>
                       

                        <div class="col s12 m12 l12">
                            <ul class="pagination"> 
                                <li class="disabled">
                                    <a href="#!"><i class="mdi-navigation-chevron-left"></i></a>
                                </li>                                 
                                <li class="active">
                                    <a href="#!">1</a>
                                </li>                                 
                                <li class="waves-effect">
                                    <a href="#!">2</a>
                                </li>                                 
                                <li class="waves-effect">
                                    <a href="#!">3</a>
                                </li>                                 
                                <li class="waves-effect">
                                    <a href="#!">4</a>
                                </li>                                 
                                <li class="waves-effect">
                                    <a href="#!">5</a>
                                </li>                                 
                                <li class="waves-effect">
                                    <a href="#!"><i class="mdi-navigation-chevron-right"></i></a>
                                </li>                                 
                            </ul>                             
                        </div>
      </div></div>
    );
  }
}