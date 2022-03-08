import React from "react";
import style from './table.module.css';

const Table = ({title, standings}) => {
    return (
        <div className={style.panel}>
            <h1>{title}</h1>
            <table className={style.table}>
                <tr>
                    <th></th>
                    <th>TEAM</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>GF</th>
                    <th>GA</th>
                    <th>GD</th>
                    <th>PTS</th>
                </tr>
                {standings.map(standing => (
                    <tr>
                        <td>{standing.position}</td>
                        <td className={style.team}>{standing.team.name}</td>
                        <td>{standing.won}</td>
                        <td>{standing.draw}</td>
                        <td>{standing.lost}</td>
                        <td>{standing.goalsFor}</td>
                        <td>{standing.goalsAgainst}</td>
                        <td>{standing.goalDifference}</td>
                        <td>{standing.points}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default Table;