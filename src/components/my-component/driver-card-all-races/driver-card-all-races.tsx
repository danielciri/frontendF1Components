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
            </div>

    );
  }
}
