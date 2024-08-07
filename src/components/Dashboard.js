import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Card, Table, Badge } from "react-bootstrap";
import { Chart, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Dashboard.css";
import "../styles/chart.css";

Chart.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const pieData = {
  labels: ['Completed'],
  datasets: [
    {
      data: [70, 30],
      backgroundColor: ['#6B73FF', '#2C2F33'],
      hoverBackgroundColor: ['#6B73FF', '#2C2F33'],
      borderWidth: 0,
      cutout: '80%',
    },
  ],
};

const centerTextPlugin = {
  id: 'centerText',
  afterDraw: (chart) => {
    const { ctx, width, height } = chart;
    ctx.restore();
    const fontSize = 15;
    ctx.font = `${fontSize}px sans-serif`;
    ctx.textBaseline = 'middle';

    const text = '70%';
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2 - 10;

    const subText = 'Goal';
    const subTextX = Math.round((width - ctx.measureText(subText).width) / 2);
    const subTextY = height / 2 + 10;

    const subTet = 'Completed';
    const subTetX = Math.round((width - ctx.measureText(subTet).width) / 2);
    const subTetY = height / 2 + 25;

    ctx.fillStyle = '#ffffff'; 
    ctx.fillText(text, textX, textY);
    ctx.fillText(subText, subTextX, subTextY);
    ctx.fillText(subTet, subTetX, subTetY);
    ctx.save();
  }
};

const pieOptions = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
    centerText: centerTextPlugin,
  },
  cutout: '80%',
  maintainAspectRatio: false,
  rotation: -90,
  circumference: 360,
  animation: {
    animateRotate: true,
    animateScale: true,
  },
};

const barData = {
  labels: ["5", "7", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27"],
  datasets: [
    {
      label: "Sales",
      backgroundColor: "#6B73FF",
      borderColor: "#6B73FF",
      borderWidth: 1,
      hoverBackgroundColor: "#6B73FF",
      hoverBorderColor: "#6B73FF",
      borderRadius: 5,
      data: [5000, 10000, 7500, 12000, 5000, 7500, 10000, 15000, 14000, 12500, 11000, 8000]
    },
  ]
};

const barOptions = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#ffffff',
      },
    },
    y: {
      grid: {
        borderDash: [3,3],
        color: '#44475a',
      },
      ticks: {
        color: '#ffffff',
      },
    },
  },
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
};

const tableData = [
  { id: 1, customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
  { id: 2, customer: 'Jane Cooper', orderNo: '48965786', amount: '$365.02', status: 'Delivered' },
  { id: 3, customer: 'Guy Hawkins', orderNo: '78958215', amount: '$45.88', status: 'Cancelled' },
  { id: 4, customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Pending' },
  { id: 5, customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
  { id: 6, customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
];

const getBadgeClass = (status) => {
  switch (status) {
    case 'Delivered':
      return 'success';
    case 'Cancelled':
      return 'danger';
    case 'Pending':
      return 'warning';
    default:
      return 'secondary';
  }
};

const Dashboard = () => {
  const chartRef = useRef(null);

  useEffect(() => {

  }, [chartRef]);

  return (
    <Container fluid className="px-4 pb-3">
      <div className="my-4"><h3 className="text-white">Dashboard</h3></div>
      <Row>
        <Col lg={8}>
           <Row>
              <Col lg={3}>
                <Card className="p-3 card-one mb-4">
                  <div className="align-items-center">
                    <div className="">
                      <div className="icon-container1">
                        <i class="bi bi-handbag-fill"></i>
                      </div>
                      <div className="mt-2"><h6 className="text-white font-14">Total Orders</h6></div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <h4 className="text-white mb-0">450</h4>
                        <small className="ms-1 text-success"><i class="bi bi-caret-up-fill"></i> 20.00%</small>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col lg={3}>
                <Card className="p-3 card-one mb-4">
                  <div className="align-items-center">
                    <div className="">
                      <div className="icon-container2">
                        <i class="bi bi-handbag-fill"></i>
                      </div>
                      <div className="mt-2"><h6 className="text-white font-14">Total Orders</h6></div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <h4 className="text-white mb-0">450</h4>
                        <small className="ms-1 text-danger"><i class="bi bi-caret-down-fill"></i> 20.00%</small>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col lg={3}>
                <Card className="p-3 card-one mb-4">
                  <div className="align-items-center">
                    <div className="">
                      <div className="icon-container3">
                        <i class="bi bi-handbag-fill"></i>
                      </div>
                      <div className="mt-2"><h6 className="text-white font-14">Total Orders</h6></div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <h4 className="text-white mb-0">450</h4>
                        <small className="ms-1 text-success"><i class="bi bi-caret-up-fill"></i> 20.00%</small>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col lg={3}>
                <Card className="p-3 card-one mb-4">
                  <div className="align-items-center">
                    <div className="">
                      <div className="icon-container4">
                        <i class="bi bi-handbag-fill"></i>
                      </div>
                      <div className="mt-2"><h6 className="text-white font-14">Total Orders</h6></div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <h4 className="text-white mb-0">450</h4>
                        <small className="ms-1 text-danger"><i class="bi bi-caret-down-fill"></i> 20.00%</small>
                    </div>
                  </div>
                </Card>
              </Col>
           </Row>
        </Col>

        <Col lg={4}>
          <Card className="p-3 mb-4">
            <div className="align-items-center">
              <div className="d-flex justify-content-between">
                <div>
                  <h6 className="card-heading mb-0 text-white">Net Profit</h6>
                  <div className="mt-3"><h2 className="text-white">$ 6600.25</h2></div>
                  <small className="ms-1 text-success"><i class="bi bi-caret-up-fill"></i> 20.00%</small>
                </div>

                <div style={{ height: '120px', width: '150px' }}>
                  <Doughnut data={pieData} options={pieOptions} plugins={[centerTextPlugin]} />
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
            <Card className="p-3 customer-card">
                <div className="align-items-center">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                    <h4 className="text-white mb-0">Activity</h4>
                    </div>

                    <div>
                      <select className="select-time-period">
                        <option value="this-week">Weekly</option>
                        <option value="last-week">Monthly</option>
                        <option value="this-month">Yearly</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-5">
                    <div className="bar-container">
                    <Bar data={barData} options={barOptions} />
                    </div>
                  </div>
                </div>
            </Card>

            <Card className="p-3 customer-card mt-4">
                <div className="align-items-center">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div>
                        <h4 className="text-white mb-0">Recent Orders</h4>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                  <Table responsive>
                    <thead>
                      <tr>
                        <th className="text-white">Customer</th>
                        <th className="text-white">Order No.</th>
                        <th className="text-white">Amount</th>
                        <th className="text-white">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((order) => (
                        <tr key={order.id}>
                          <td className="text-white">{order.customer}</td>
                          <td className="text-white">{order.orderNo}</td>
                          <td className="text-white">{order.amount}</td>
                          <td>
                            <Badge pill bg={getBadgeClass(order.status)}>{order.status}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  </div>
                </div>
            </Card>

        </Col>
        <Col lg={4}>
          <Card className="p-3 orders-card mb-4">
            <div>
              <div className="mt-3">
                 <div className="order-summary">
                    <div className="d-flex align-items-center">
                      <div className="dive-ico1"><i class="bi bi-crosshair"></i></div>
                      <div className="ms-3">
                        <h6 className="prod-name mb-1">Goals</h6>
                      </div>
                    </div>
                    <div className="dive-in"><i class="bi bi-chevron-right"></i></div>
                 </div>

                 <div className="order-summary">
                    <div className="d-flex align-items-center">
                      <div className="dive-ico2"><i class="bi bi-egg-fried"></i></div>
                      <div className="ms-3">
                        <h6 className="prod-name mb-1">Popular Dishes</h6>
                      </div>
                    </div>
                    <div className="dive-in"><i class="bi bi-chevron-right"></i></div>
                 </div>

                  <div className="order-summary">
                    <div className="d-flex align-items-center">
                      <div className="dive-ico3"><i class="bi bi-cake2"></i></div>
                      <div className="ms-3">
                        <h6 className="prod-name mb-1">Menus</h6>
                      </div>
                    </div>
                    <div className="dive-in"><i class="bi bi-chevron-right"></i></div>
                  </div>

              </div>
            </div>
          </Card>

          <Card className="p-3 orders-card mb-4">
            <div>
              <div className="d-flex justify-content-between align-items-center">
              <div><h4 className="text-white mb-0">Customer's Feedback</h4></div>
              </div>
              <div className="mt-3">
                 <div className="Feeback-box">
                    <div class="avatar">
                      <i class="fas fa-user-circle"></i>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="dive-ico2 me-3"><i class="bi bi-person-fill"></i></span>
                      <h5 class="username text-white">Johny Wilson</h5>
                    </div>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star"></i>
                    </div>
                    <p class="message">This is a feedback message. Great product, highly recommend!</p>
                 </div>

                 <div className="Feeback-box">
                    <div class="avatar">
                      <i class="fas fa-user-circle"></i>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="dive-ico2 me-3"><i class="bi bi-person-fill"></i></span>
                      <h5 class="username text-white">Johny Wilson</h5>
                    </div>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star"></i>
                    </div>
                    <p class="message">This is a feedback message. Great product, highly recommend!</p>
                 </div>

                 <div className="Feeback-box">
                    <div class="avatar">
                      <i class="fas fa-user-circle"></i>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="dive-ico2 me-3"><i class="bi bi-person-fill"></i></span>
                      <h5 class="username text-white">Johny Wilson</h5>
                    </div>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star"></i>
                    </div>
                    <p class="message">This is a feedback message. Great product, highly recommend!</p>
                 </div>

                 <div className="Feeback-box border-bottom-0">
                    <div class="avatar">
                      <i class="fas fa-user-circle"></i>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="dive-ico2 me-3"><i class="bi bi-person-fill"></i></span>
                      <h5 class="username text-white">Johny Wilson</h5>
                    </div>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star"></i>
                    </div>
                    <p class="message">This is a feedback message. Great product, highly recommend!</p>
                 </div>

              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
