import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'driver-card-all-races',
  styleUrl: 'driver-card-all-races.css',

})
export class DriverCardAllRaces {
  @Prop() race: string;
  @Prop() time: string;
  @Prop() position: number;
  @Prop() name: string = " ";
  @Prop() age: number;
  @Prop() team: string = " "; F
  @Prop() rank: number = 2;
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-10 col-sm-5 col-md-4">
            <div class="card card-driver" >
              <div class="header header-driver" > Driver Card</div>
              <img src="http://placehold.it/64x64" class="card-img-top" alt="..." />
              <div class="card-body driver-body">
                <h7 class="card-title"><small>Name</small></h7>
                <p><small>{this.name}</small></p>

                <h7 class="card-title"><small>Age</small></h7>
                <p><small>{this.age}</small></p>

                <h7 class="card-title"><small>Team</small></h7>
                <p><small>{this.team}</small></p>

                <h7 class="card-title"><small>Ranking Global</small></h7>
                <p><small>{this.rank}</small></p>


              </div>
            </div>
          </div>
          <div class="col-10 col-sm-5 col-md-5">
            <div class="contentTable">
              
              <table class="">
                <thead>
                  <tr>

                    <th>Race</th>
                    <th>Rank</th>
                    <th>Time</th>

                  </tr>
                </thead>
                <tbody>
                  <tr class="table-active">
                    <td>{this.race}</td>
                    <td>{this.position}</td>
                    <td>{this.time}</td>
                  </tr>

                </tbody>
              </table>
            </div>        </div>
        </div>
      </div>




    );
  }
}
