import Card from "../components/dashboard/card/Card";
import Chart from "../components/dashboard/chart/Chart";
import RightBar from "../components/dashboard/rightbar/RightBar";
import Transactions from "../components/dashboard/transactions/Transactions";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
};
export default Dashboard;
