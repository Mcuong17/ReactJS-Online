import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
import styles from "./Dashboard.module.scss";

const stats = [
  { id: 1, title: "Users", value: "12,430", delta: "+4.2%" },
  { id: 2, title: "Revenue", value: "$76,120", delta: "+9.8%" },
  { id: 3, title: "Orders", value: "1,210", delta: "-1.3%" },
  { id: 4, title: "Conversion", value: "3.8%", delta: "+0.4%" },
];

const chartData = [
  { name: "Mon", visitors: 400, sales: 240 },
  { name: "Tue", visitors: 300, sales: 139 },
  { name: "Wed", visitors: 200, sales: 980 },
  { name: "Thu", visitors: 278, sales: 390 },
  { name: "Fri", visitors: 189, sales: 480 },
  { name: "Sat", visitors: 239, sales: 380 },
  { name: "Sun", visitors: 349, sales: 430 },
];

const recent = [
  { id: "#2341", customer: "Nguyễn Văn A", amount: "$120.00", status: "Completed" },
  { id: "#2340", customer: "Trần Thị B", amount: "$45.00", status: "Pending" },
  { id: "#2339", customer: "Lê C", amount: "$330.00", status: "Completed" },
  { id: "#2338", customer: "Phạm D", amount: "$18.00", status: "Refunded" },
];




function StatCard({ title, value, delta }) {
  return (
    <div className={styles.statCard}>
      <div className={styles.statTitle}>{title}</div>
      <div className={styles.statValueRow}>
        <div className={styles.statValue}>{value}</div>
        <div className={styles.statDelta}>{delta}</div>
      </div>
    </div>
  );
}

function RevenueChart() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardTitle}>Weekly visitors</div>
        <div className={styles.cardSubtitle}>Last 7 days</div>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="visitors" stroke="#8884d8" strokeWidth={2} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function MiniStatsRow() {
  return (
    <div className={styles.statsRow}>
      {stats.map((s) => (
        <StatCard key={s.id} title={s.title} value={s.value} delta={s.delta} />
      ))}
    </div>
  );
}

function RecentOrders() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardTitle}>Recent orders</div>
        <a href="#" className={styles.link}>View all</a>
      </div>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Order</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recent.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.customer}</td>
                <td>{r.amount}</td>
                <td>{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

 function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.main}>

        <main className={styles.content}>
          <MiniStatsRow />
          <div className={styles.gridMain}>
            <div className={styles.gridLarge}><RevenueChart /></div>
            <div className={styles.gridSide}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardTitle}>Sales by channel</div>
                  <div className={styles.cardSubtitle}>This month</div>
                </div>
                <div className={styles.chartWrapper}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="sales" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <RecentOrders />
            </div>
          </div>
          <div className={styles.gridSecondary}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Activity</div>
              <div className={styles.cardSubtitle}>No activity to show — add some demo data or hook to an API.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Notifications</div>
              <ul className={styles.notifications}>
                <li>Server CPU usage at 72%.</li>
                <li>New user signup: Nguyễn Thị E</li>
                <li>Payment failed for order #2338</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard