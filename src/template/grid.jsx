import React, { Component } from 'react'

export default class Grid extends Component {
    toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : []

        const gridSize = ['xs', 'sm', 'md', 'lg']
        let classes = ''

        for(let i = 0; i < 4; i++) {
            if(cols[i]) {
                classes += `col-${gridSize[i]}-${cols[i]} `
            }
        }
        return classes
    }

    render() {
        const gridClasses = this.toCssClasses(this.props.cols || 12)

        return (
            <div className={ gridClasses }>
                { this.props.children }
            </div>
        )
    }
}
