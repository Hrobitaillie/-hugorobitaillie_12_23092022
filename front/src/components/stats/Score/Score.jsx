import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

export default function Score({ id, score }) {
  let scoreValue = 0;
  scoreValue = Math.ceil(score[0].value)

  return (
    <section
      id="Score"
      className="w-[calc((100%-4rem)/3)] aspect-square bg-light"
    >
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart 
                data={score} 
                innerRadius="70%"
                outerRadius="70%"
                barSize={10}
                startAngle={90}
                endAngle={450}
                isAnimationActive={true}
            >   
            <text x={30} y={40}>
                Score
            </text>
                <svg viewBox="0 0 100 100" fill="white">
                    <circle cx="50" cy="50" r="calc(35% - 2.5px)"/>
                </svg>
                <RadialBar 
                    label={false}
                    dataKey="value"
                    cornerRadius={5}
                    isAnimationActive={true}
                />
                <PolarAngleAxis
                    type="number"
                    domain={[0, 100]}
                    tick={false}
                    isAnimationActive={true}
                />
                <text textAnchor="middle">
                    <tspan x="50%" y="50%" textAnchor="middle" opacity="1" fontSize={25} fontWeight={700}>
                        {scoreValue} %
                    </tspan>
                    <tspan x="50%" y="58%" textAnchor="middle" opacity="0.5">
                            de votre
                    </tspan>
                    <tspan x="50%" y="64%" textAnchor="middle" opacity="0.5">
                            objectif
                    </tspan>
                </text>
            </RadialBarChart>
        </ResponsiveContainer>
    </section>
  );
}
