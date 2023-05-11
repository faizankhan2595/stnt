import ChartWidget from "components/shared-components/ChartWidget";
import StatisticWidget from "components/shared-components/StatisticWidget";
import React from "react";
import "./Dashboard.css";
import {
  DashboardBlue,
  DashboardGreen,
  DashboardPink,
  DashboardPurple,
} from "assets/svg/icon";
import { Button } from "antd";
const Dashboard = () => {
	const uniqueVisitorsData = {
		series: [
			{
				name: "<30",
				data: [45, 52, 38, 24, 33, ]
			},
			{
				name: "31-60",
				data: [35, 41, 62, 42, 13, ]
			},
			{
				name: ">60",
				data: [41, 62, 35, 13, 35, ]
			}
		],
		categories:[
			'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',

		]
	}

  const claimsByCountry = {
		series: [
			{
				name: "Singapore",
				data: [45, 52, 38, 24, 33, ]
			},
			{
				name: "Brunei",
				data: [35, 41, 62, 42, 13, ]
			},
			{
				name: "Malaysia",
				data: [41, 62, 35, 13, 35, ]
			}
		],
		categories:[
			'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',

		]
	}
  
  const visitorChartData = {
    series: [
    //   {
    //     name: "New Membership ",
    //     data: [45, 52, 38, 24, 33, 26, 21],
    //   },
      {
        name: "Singapore",
        data: [35, 41, 62, 42, 13, 18, 29],
      },
      {
        name: "Brunei",
        data: [ 41, 35, 62, 20, 45, 22, 56],
      },
      {
        name: "Malaysia",
        data: [30, 80, 90, 42, 45, 8, 89],
      },
    ],
    categories: [
      "JAN 22",
      "FEB 22",
      "MAR 22",
      "APR 22",
      "MAY 22",
      "JUN 22",
      "JUL 22",
    ],
  };

  return (
    <>
      <div className="w-100 d-flex justify-content-between">
        <div className="w-25 d-flex justify-content-center align-items-center position-relative DashboardColorBoxes ml-0">
          <DashboardPink />
          <div className="position-absolute d-flex align-items-center justify-content-center flex-column DashboardBoxText">
            <div>22</div>
            <h5>Total Travelers</h5>
          </div>
        </div>
        <div className="w-25 d-flex justify-content-center align-items-center position-relative DashboardColorBoxes">
          <DashboardPurple />
          <div className="position-absolute d-flex align-items-center justify-content-center flex-column DashboardBoxText">
            <div>22</div>
            <h5>Total Agency</h5>
          </div>
        </div>
        <div className="w-25 d-flex justify-content-center align-items-center position-relative DashboardColorBoxes">
          <DashboardBlue />
          <div className="position-absolute d-flex align-items-center justify-content-center flex-column DashboardBoxText">
            <div>22</div>
            <h5>Claim Requests</h5>
          </div>
        </div>
        <div className="w-25 d-flex justify-content-center align-items-center position-relative DashboardColorBoxes mr-0">
          <DashboardGreen />
          <div className="position-absolute d-flex align-items-center justify-content-center flex-column DashboardBoxText">
            <div>22</div>
            <h5>Approved Claims</h5>
          </div>
        </div>
      </div>

      <div className="d-flex mt-3">
        <div className="w-50">
          <div className="mr-2">
            <ChartWidget
              title="Travelers"
              series={visitorChartData.series}
              xAxis={visitorChartData.categories}
              height={400}
            />
          </div>
        </div>
        <div className="w-50">
          <div className="ml-2">
            <ChartWidget
              title="Policy Packages"
              series={visitorChartData.series}
              xAxis={visitorChartData.categories}
              height={400}
            />
          </div>
        </div>
      </div>
      <div className="d-flex mt-3">
        <div className="w-50">
          <div className="mr-2">
		  <ChartWidget 
			series={uniqueVisitorsData.series} 
			xAxis={uniqueVisitorsData.categories} 
			title="Traveler by Age Group"
			height={410}
			type="bar"
			customOptions={
				{
					colors: ['#5A6ACF', '#FF928E', '#41C1B2']
				}
			}
			// extra={
			// 	<Button type="default" size="small">Extra Content</Button>
			// }
		/>
          </div>
        </div>
        <div className="w-50">
          <div className="ml-2">
		  <ChartWidget 
			series={claimsByCountry.series} 
			xAxis={claimsByCountry.categories} 
			title="Unique Visitors"
			height={410}
			type="bar"
			customOptions={
				{
					colors: ['#E8414E', '#FCB323', '#41C1B2']
				}
			}
			// extra={
			// 	<Button type="default" size="small">Extra Content</Button>
			// }
		/>
          </div>
        </div>
      </div>

      {/* <div className="dashboard_container">
        <StatisticWidget
          title="Total Revenue"
          value="$1000"
          status={-10}
          subtitle="Compare to last year (2021)"
        />
        <StatisticWidget
          title="Total Members"
          value="1000"
          status={10}
          subtitle="Compare to last year (2021)"
        />
        <StatisticWidget
          title="Visitors"
          value="10k"
          status={10}
          subtitle="Compare to last year (2021)"
        />
        <div className="chartBar">
          <ChartWidget
            title="Unique Visitors"
            series={visitorChartData.series}
            xAxis={visitorChartData.categories}
            // extra={<Select defaultValue="This Month" style={{width : 120,}} onChange={handleChange} options={[{value :'jan',label:'JAN'},{value :'feb',label:'FEB'},{value :'mar',label:'MAR'},{value :'apr',label:'APR'},]} ></Select>}
          />
        </div>
      </div> */}
    </>
  );
};

export default Dashboard;
