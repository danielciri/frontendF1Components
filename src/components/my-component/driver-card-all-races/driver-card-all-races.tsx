import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'driver-card-all-races',
  styleUrl: 'driver-card-all-races.css',

})
export class DriverCardAllRaces {
  @Prop() race:string;
  @Prop() time:string;
  @Prop() position: number;
  render() {
    return (


      <div class="card race">
        <div class="header header-race" >
          <div class="container">
            <div class="row">
              <div class="col">
                <h6>Race</h6>
              </div>
              <div class="col">
                <h6>Position</h6>
              </div>
              <div class="col">
                <h6>Time</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body daniel">
          <table class="table table-bordered table-striped" >
            <tbody class="tbody races">
            <td>{this.race}</td>
            <td>{this.position}</td>
            <td>{this.time}</td>
            <br></br>
            <br></br>
            </tbody>
           
          </table>
        
        </div>
      </div>

    );
  }
}
