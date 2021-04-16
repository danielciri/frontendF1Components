/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BtnRacesComponent {
    }
    interface DriverCardAllRaces {
        "age": number;
        "name": string;
        "position": number;
        "race": string;
        "rank": number;
        "team": string;
        "time": string;
    }
    interface DriverCardRankingRaces {
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
}
declare global {
    interface HTMLBtnRacesComponentElement extends Components.BtnRacesComponent, HTMLStencilElement {
    }
    var HTMLBtnRacesComponentElement: {
        prototype: HTMLBtnRacesComponentElement;
        new (): HTMLBtnRacesComponentElement;
    };
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
    interface HTMLElementTagNameMap {
        "btn-races-component": HTMLBtnRacesComponentElement;
        "driver-card-all-races": HTMLDriverCardAllRacesElement;
        "driver-card-ranking-races": HTMLDriverCardRankingRacesElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface BtnRacesComponent {
    }
    interface DriverCardAllRaces {
        "age"?: number;
        "name"?: string;
        "position"?: number;
        "race"?: string;
        "rank"?: number;
        "team"?: string;
        "time"?: string;
    }
    interface DriverCardRankingRaces {
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
    interface IntrinsicElements {
        "btn-races-component": BtnRacesComponent;
        "driver-card-all-races": DriverCardAllRaces;
        "driver-card-ranking-races": DriverCardRankingRaces;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "btn-races-component": LocalJSX.BtnRacesComponent & JSXBase.HTMLAttributes<HTMLBtnRacesComponentElement>;
            "driver-card-all-races": LocalJSX.DriverCardAllRaces & JSXBase.HTMLAttributes<HTMLDriverCardAllRacesElement>;
            "driver-card-ranking-races": LocalJSX.DriverCardRankingRaces & JSXBase.HTMLAttributes<HTMLDriverCardRankingRacesElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
