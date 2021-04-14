/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DriverCardAllRaces {
        "position": number;
        "race": string;
        "time": string;
    }
    interface DriverCardRankingRaces {
        "name": string;
        "rank": number;
        "team": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface SmallDriverCard {
        "age": number;
        "name": string;
        "rank": number;
        "team": string;
    }
}
declare global {
    interface HTMLDriverCardAllRacesElement extends Components.DriverCardAllRaces, HTMLStencilElement {
    }
    var HTMLDriverCardAllRacesElement: {
        prototype: HTMLDriverCardAllRacesElement;
        new (): HTMLDriverCardAllRacesElement;
    };
    interface HTMLDriverCardRankingRacesElement extends Components.DriverCardRankingRaces, HTMLStencilElement {
    }
    var HTMLDriverCardRankingRacesElement: {
        prototype: HTMLDriverCardRankingRacesElement;
        new (): HTMLDriverCardRankingRacesElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSmallDriverCardElement extends Components.SmallDriverCard, HTMLStencilElement {
    }
    var HTMLSmallDriverCardElement: {
        prototype: HTMLSmallDriverCardElement;
        new (): HTMLSmallDriverCardElement;
    };
    interface HTMLElementTagNameMap {
        "driver-card-all-races": HTMLDriverCardAllRacesElement;
        "driver-card-ranking-races": HTMLDriverCardRankingRacesElement;
        "my-component": HTMLMyComponentElement;
        "small-driver-card": HTMLSmallDriverCardElement;
    }
}
declare namespace LocalJSX {
    interface DriverCardAllRaces {
        "position"?: number;
        "race"?: string;
        "time"?: string;
    }
    interface DriverCardRankingRaces {
        "name"?: string;
        "rank"?: number;
        "team"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface SmallDriverCard {
        "age"?: number;
        "name"?: string;
        "rank"?: number;
        "team"?: string;
    }
    interface IntrinsicElements {
        "driver-card-all-races": DriverCardAllRaces;
        "driver-card-ranking-races": DriverCardRankingRaces;
        "my-component": MyComponent;
        "small-driver-card": SmallDriverCard;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "driver-card-all-races": LocalJSX.DriverCardAllRaces & JSXBase.HTMLAttributes<HTMLDriverCardAllRacesElement>;
            "driver-card-ranking-races": LocalJSX.DriverCardRankingRaces & JSXBase.HTMLAttributes<HTMLDriverCardRankingRacesElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "small-driver-card": LocalJSX.SmallDriverCard & JSXBase.HTMLAttributes<HTMLSmallDriverCardElement>;
        }
    }
}
