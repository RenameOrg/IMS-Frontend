import React from 'react'

const Row = (props) => {
    return (
        (<tr className="templateRow">
            <td className="photo">
                {/* <img src={src} alt={props.EmployeeID} /> */}
            </td>
            <td className="details">
                <table className="CardTable" cellPadding={3} cellSpacing={2}>
                    <colgroup>
                        <col style={{ width: "50%" }} />
                        <col style={{ width: "50%" }} />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td className="CardHeader">First Name </td>
                            <td>{props.FirstName} </td>
                        </tr>
                        <tr>
                            <td className="CardHeader">Last Name</td>
                            <td>{props.LastName} </td>
                        </tr>
                        <tr>
                            <td className="CardHeader">Title</td>
                            <td>{props.Title}</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>)
    )
}

export default Row