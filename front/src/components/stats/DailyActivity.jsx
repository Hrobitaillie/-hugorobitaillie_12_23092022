import * as d3 from 'd3'
import { useEffect, useRef } from 'react'

const data = [
    {
        day: 1,
        kCal: 356,
        kg: 69.5
    },
    {
        day: 2,
        kCal: 786,
        kg: 69.3
    },
    {
        day: 3,
        kCal: 557,
        kg: 69.8
    },
]

export default function DailyActivity(){


    const d3Chart = useRef()

    useEffect(() => {
        const margin = {top : 50, right:30, bottom: 30, left:60}

        const chartWidth = parseInt(d3.select('#dailyActivity').style('width')) - margin.left - margin.right
        const chartHeight = parseInt(d3.select('#dailyActivity').style('height')) - margin.top - margin.bottom

        const svg = d3.select(d3Chart.current)
            .attr('width', chartWidth + margin.left + margin.right)
            .attr('height', chartHeight + margin.top + margin.bottom)
        const x = d3.scaleBand()
            .domain(d3.range(data.length))
            .range([margin.left, chartWidth - margin.right ])
            .paddingOuter(0.2)
            .paddingInner(0.95)
            
        svg.append('g')
            .attr('transform','translate(0,' + chartHeight +')')
            .call(d3.axisBottom(x).tickFormat(i=>data[i].day).tickSizeOuter(0))

        const max = d3.max(data, function(d){ return (Math.round(d.kg))})
        const min = d3.min(data, function(d){ return (Math.floor(d.kg))})


        const y = d3.scaleLinear()
            .domain([0, max])
            .range([chartHeight, margin.top])
            
        const yAxis = d3.scaleLinear()
            .domain([min, max])
            .range([chartHeight, margin.top])

            
        console.log(x(1))

        svg.append('g')
            .attr('transform','translate(' + (chartWidth - margin.right) +')')
            .call(d3.axisLeft(yAxis))

        svg.append('g')
            .attr('fill','#282D30')
            .selectAll('rect')
            .data(data)
            .join('rect')
                .attr('x', (d,i) => x(i))
                .attr('y', d => yAxis(d.kg))
                .attr('height', d=>y(0)-yAxis(d.kg))
                .attr('width', x.bandwidth())
    })

    return(
        <section id='dailyActivity' className="w-full aspect-[167/64]">
            <svg ref={d3Chart}></svg>
        </section>        
    )
}