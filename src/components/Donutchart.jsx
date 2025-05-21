import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "구미 시민", value: 89200, label: "구미 시민 52%\n8만 8,920명" },
  { name: "외지인", value: 82080, label: "외지인 48%\n8만 2,080명" },
];

const COLORS = ["#5b8a2e", "#fc6713"];

const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, index }) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 20; // 라벨 원 밖 위치
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const lines = data[index].label.split("\n");

  return (
    <text
      x={x}
      y={y}
      fill="#000"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="middle"
    >
      {lines.map((line, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : 16}>
          {line}
        </tspan>
      ))}
    </text>
  );
};

const DonutChart = () => {
  return (
    <div
      style={{
        width: 550,
        height: 350,
        position: "relative",
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: 30,
      }}
    >
      <p
        style={{
          padding: "10px 15px 0 0",
          color: "#9e9e9e",
          textAlign: "right",
        }}
      >
        출처 : 한국기업평판연구소
      </p>
      <PieChart width={500} height={350}>
        <Pie
          data={data}
          dataKey="value"
          cx="55%"
          cy="42%"
          innerRadius={65}
          outerRadius={100}
          label={renderCustomizedLabel}
          isAnimationActive={false}
          startAngle={90} // ✅ 90도부터 시작
          endAngle={-360}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      {/* 중앙 텍스트 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        방문객
        <br />
        17만 1000명
      </div>

      <p className="description" style={{ textAlign: "left", paddingLeft: 10 }}>
        외지인 비율 48% <br /> → 방문 동선 설계와 지역 콘텐츠 연결이 UX의 핵심
        전력 포인트로 부상
      </p>
    </div>
  );
};

export default DonutChart;
