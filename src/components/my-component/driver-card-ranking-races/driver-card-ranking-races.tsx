import { Component, h} from "@stencil/core"

@Component({
    tag: 'driver-card-ranking-races',
    styleUrl: 'driver-card-ranking-races.css',

})
export class DriverCardRankingRaces {

    render() {
        return (
            <div class="contentTable">
                <table class="">
                    <thead class="thead">
                        <tr>
                            <th></th>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Team</th>

                        </tr>
                    </thead>

                </table>
            </div>
        )
    }
}
