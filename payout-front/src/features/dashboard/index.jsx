import DashboardStats from "./components/DashboardStats";
import AmountStats from "./components/AmountStats";
import PageStats from "./components/PageStats";

import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon";
import CreditCardIcon from "@heroicons/react/24/outline/CreditCardIcon";
import UserChannels from "./components/UserChannels";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import DashboardTopBar from "./components/DashboardTopBar";
import { useDispatch } from "react-redux";
// import {showNotification} from ''
import DoughnutChart from "./components/DoughnutChart";
import { useState } from "react";
import { showNotification } from "../../redux/slice/headerSlice";
import MerchantCodeSelectBox from "./components/MerchantCodeSelectBox";

const statsData = [
  {
    title: "New Users",
    value: "34.7k",
    icon: <UserGroupIcon className="w-8 h-8" />,
    description: "↗︎ 2300 (22%)",
  },
  // {
  //   title: "Total Sales",
  //   value: "$34,545",
  //   icon: <CreditCardIcon className="w-8 h-8" />,
  //   description: "Current month",
  // },
];

function Dashboard() {
  const dispatch = useDispatch();

  const updateDashboardPeriod = (newRange) => {
    // Dashboard range changed, write code to refresh your values
    dispatch(
      showNotification({
        message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`,
        status: 1,
      })
    );
  };

  return (
    <>
      {/*------------------------ Merchant Code --------------------------------- */}
      <MerchantCodeSelectBox />

      {/** ---------------------- Different stats content 1 ------------------------- */}
      <div className="grid lg:grid-cols-2 mt-4 md:grid-cols-1 grid-cols-1 gap-6">
        <div>
          {statsData.map((d, k) => {
            return <DashboardStats key={k} {...d} colorIndex={k} />;
          })}
        </div>
        {/** ---------------------- Select Period Content ------------------------- */}
        <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod} />
        <div></div>
      </div>

      {/** ---------------------- Different charts ------------------------- */}
      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        {/* <LineChart /> */}
        <BarChart title={`Today's Deposit`} />
        <BarChart title={`Duration's Deposit`} />
      </div>

      {/** ---------------------- Different stats content 2 ------------------------- */}

      {/* <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
        <AmountStats />
        <PageStats />
      </div> */}

      {/** ---------------------- User source channels table  ------------------------- */}

      {/* <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <UserChannels />
        <DoughnutChart />
      </div> */}
    </>
  );
}

export default Dashboard;
