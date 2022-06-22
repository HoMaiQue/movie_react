import React from 'react'
// helpers
import { calcTime, convertMoney } from '../../helpers'
// style
import { Wrapper, Content } from './MovieInfoBar.style'
export default function MovieInfoBar({ time, budget, revenue }) {
    return (
        <Wrapper>
            <Content>
                <div className="column">
                    <p>Running time: {calcTime(time)}</p>
                </div>
                <div className="column">
                    <p>Budget: {convertMoney(budget)}</p>
                </div>
                <div className="column">
                    <p>Revenue: {convertMoney(revenue)}</p>
                </div>
            </Content>
        </Wrapper>
    )
}
