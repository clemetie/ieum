import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "20대", value: 15 },
  { name: "30대", value: 19 },
  { name: "40대", value: 17 },
  { name: "50대", value: 18.6 },
  { name: "60대", value: 11 },
];

const AgeBarChart = () => {
  const barColors = ["#9e9e9e", "#fc6713", "#9e9e9e", "#fc6713", "#9e9e9e"];

  return (
    <div
      style={{
        width: 550,
        height: 350,
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: 30,
        padding: 10,
      }}
    >
      <p
        style={{
          padding: "3px 15px 0 0",
          color: "#9e9e9e",
          textAlign: "right",
        }}
      >
        출처 : 한국기업평판연구소
      </p>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 10, bottom: 20 }}
          barCategoryGap={30} // ✅ 막대 간 간격 조절
          barSize={40} // ✅ 막대 너비 조절 (얇게!)
        >
          <XAxis dataKey="name" />
          <YAxis domain={[0, 25]} tickFormatter={(v) => `${v}%`} />
          <Tooltip formatter={(v) => `${v}%`} />
          <Bar dataKey="value">
            {data.map((_, index) => (
              <Cell key={index} fill={barColors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <p
        className="description"
        style={{ textAlign: "left", paddingLeft: 10, paddingTop: 20 }}
      >
        정보 탐색과 자녀 동반 활동에 익숙한 30~50대 중심 <br /> → 직관전 UI와
        체험 중심 UX 필요 전력 포인트로 부상
      </p>
    </div>
  );
};

export default AgeBarChart;
