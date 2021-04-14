import { Component, h, Prop } from "@stencil/core"

@Component({
    tag: 'driver-card-ranking-races',
    styleUrl: 'driver-card-ranking-races.css',
 
})
export class DriverCardRankingRaces {
    @Prop() rank: number;
    @Prop() name:string;
    @Prop() team: string;
    render() {
        return (
            <div class="contentTable">
                <table class="">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Team</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-active">
                            <td> <img src="http://placehold.it/64x64" class="card-img-top" alt="..." /></td>
                            <td>{this.rank}</td>
                            <td>{this.name}</td>
                            <td>{this.team}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}