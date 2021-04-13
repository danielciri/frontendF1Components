import { Component, h } from '@stencil/core'

@Component({
  tag: 'small-driver-card',
  styleUrl: 'small-driver-card.css'

})
export class SmallDriverCard {
  render() {
    return (



        <div class="card card-driver" >
          <div class="header header-driver" > Driver Card</div>
          <img src="http://placehold.it/64x64" class="card-img-top" alt="..." />
          <div class="card-body driver-body">
          <h7 class="card-title"><small>Name</small></h7>
            <br></br>
            <br></br>
            <br></br>
            <h7 class="card-title"><small>Age</small></h7>
      
            <br></br>
            <br></br>
            <br></br>
            <h7 class="card-title"><small>Team</small></h7>
            <br></br>
            <br></br>
            <br></br>
            <h7 class="card-title"><small>Ranking Global</small></h7>
       
          
          </div>
      </div>
    );

  }
}
