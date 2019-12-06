import React from "react";

interface PlayerProps {
    /** x position in pixels */
    x: number;
    /** y position in pixels */
    y: number;
}
// export class Player extends React.Component<PlayerProps> {
//     render() {
//         return (
//             <div
//                 style={{
//                     top: this.props.y,
//                     left: this.props.x,
//                     position: "absolute",
//                     backgroundColor: "red"
//                 }}
//             >
//                 PLAYER
//             </div>
//         );
//     }
// }

export function Player(props: PlayerProps) {
    return (
        <div
            style={{
                top: props.y + "vh",
                left: props.x + "vw",
                position: "absolute",
                backgroundColor: "red"
            }}
        >
            P
        </div>
    );
}
