import React from "react";

export default function Cart(props) {

    return (

        <table border="1" cellPadding="5">

            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>

            <tbody>

                {props.item.map((item) => (

                    <tr key={item.itemname}>
                        <td>{item.itemname}</td>
                        <td>{item.price}</td>
                    </tr>

                ))}

            </tbody>

        </table>

    );

}