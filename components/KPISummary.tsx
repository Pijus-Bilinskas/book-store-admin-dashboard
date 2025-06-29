
interface KPI {
    label: string;
    value: string | number;
}


const KPISummary = ({kpis}: {kpis: KPI[]}) => {
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {kpis.map((kpi) => (
        <div
          key={kpi.label}
          className="bg-gray-100 shadow rounded-xl p-6 flex items-center justify-between"
        >
          <div>
            <p className="text-gray-600 text-sm">{kpi.label}</p>
            <p className="text-2xl font-bold">{kpi.value}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}
;
export default KPISummary;