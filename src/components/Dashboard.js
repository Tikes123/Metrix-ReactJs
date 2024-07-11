import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Dashboard.css";
import "../styles/chart.css";
import SalesIcon from "../assets/icons/sales.png";
import CustomersIcon from "../assets/icons/customers.png";
import OrdersIcon from "../assets/icons/orders.png";
import folderIcon from "../assets/icons/Folder.png";
import cartIcon from "../assets/icons/cart.png";
import iphone13 from "../assets/icons/iphone1.png";
import iphone14 from "../assets/icons/iphone2.png";


Chart.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Acquisition', 'Purchase', 'Retention'],
  datasets: [
    {
      data: [30, 50, 20],
      backgroundColor: ['#A2D2FF', '#6B73FF', '#FFD700'],
      hoverBackgroundColor: ['#A2D2FF', '#6B73FF', '#FFD700'],
      borderWidth: 0,
    },
  ],
};

const options = {
  cutout: '70%',
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const Bardata = {
  labels: ["Sept 10", "Sept 11", "Sept 12", "Sept 13", "Sept 14", "Sept 15"],
  datasets: [
    {
      label: "Sales 2023",
      backgroundColor: "rgb(85, 112, 241)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(75,192,192,0.4)",
      hoverBorderColor: "rgba(75,192,192,1)",
      data: [65, 59, 80, 81, 56, 80]
    },
  ]
};

const Dashboard = () => {
  const chartRef = useRef(null);
  const [isChartReady, setIsChartReady] = useState(false);

  useEffect(() => {
    if (chartRef.current) {
      setIsChartReady(true);
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [chartRef]);

  return (
    <Container fluid className="px-4 py-3">
      <Row>
        <Col>
          <Card className="p-3 card-one mb-4">
            <div className="align-items-center">
              <div className="d-flex justify-content-between align-items-center">
                <div className="icon-container1">
                  <img src={SalesIcon} alt="Sales" className="cardIcon" />
                </div>

                <div>
                  <select className="select-time-period">
                    <option value="this-week">This Week</option>
                    <option value="last-week">Last Week</option>
                    <option value="this-month">This Month</option>
                  </select>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-5">
                <div>
                  <h6 className="mb-1 text-muted font-14">Sales</h6>
                  <div className="d-flex align-items-center">
                    <h4 className="font-one mb-0">₦4,000,000.00</h4>
                  </div>
                </div>
                <div className="text-right">
                  <h6 className="mb-1 text-muted font-14">Volume</h6>
                  <div className="d-flex align-items-center">
                    <h4 className="font-one mb-0">450</h4>
                    <small className="ms-1 text-success">+20.00%</small>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>

        <Col>
          <Card className="p-3 card-one mb-4">
            <div className="align-items-center">
              <div className="d-flex justify-content-between align-items-center">
                <div className="icon-container2">
                  <img
                    src={CustomersIcon}
                    alt="Customers"
                    className="cardIcon"
                  />
                </div>

                <div>
                  <select className="select-time-period">
                    <option value="this-week">This Week</option>
                    <option value="last-week">Last Week</option>
                    <option value="this-month">This Month</option>
                  </select>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-5">
                <div>
                  <h6 className="mb-1 text-muted font-14">Customers</h6>
                  <div className="d-flex align-items-center">
                    <h4 className="font-one mb-0">1,250</h4>
                    <small className="ms-1 text-success">+15.80%</small>
                  </div>
                </div>
                <div className="text-right">
                  <h6 className="mb-1 text-muted font-14">Active</h6>
                  <div className="d-flex align-items-center">
                    <h4 className="font-one mb-0">1,180</h4>
                    <small className="ms-1 text-success">85%</small>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>

        <Col lg={5}>
          <Card className="p-3 mb-4">
            <div className="align-items-center">
              <div className="d-flex justify-content-between align-items-center">
                <div className="icon-container2">
                  <img src={OrdersIcon} alt="Orders" className="cardIcon" />
                </div>

                <div>
                  <select className="select-time-period">
                    <option value="this-week">This Week</option>
                    <option value="last-week">Last Week</option>
                    <option value="this-month">This Month</option>
                  </select>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-5">
                <div>
                  <h6 className="mb-1 text-muted font-14">All Orders</h6>
                  <h4 className="font-one mb-0">1,250</h4>
                </div>
                <div>
                  <h6 className="mb-1 text-muted font-14">Pending</h6>
                  <h4 className="font-one mb-0">5</h4>
                </div>
                <div>
                  <h6 className="mb-1 text-muted font-14">Completed</h6>
                  <h4 className="font-one mb-0">445</h4>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col md={6}>
              <Card className="marketing-card p-3 mb-4">
                <div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h5 className="card-heading mb-0">Marketing</h5>
                    </div>
                    <div>
                      <select className="select-time-period">
                        <option value="this-week">This Week</option>
                        <option value="last-week">Last Week</option>
                        <option value="this-month">This Month</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="text-center">
                      <div className="legend-item">
                        <span className="legend-color acquisition"></span>
                        <span className="legend-label">Acquisition</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="legend-item">
                        <span className="legend-color purchase"></span>
                        <span className="legend-label">Purchase</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="legend-item">
                        <span className="legend-color retention"></span>
                        <span className="legend-label">Retention</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center mt-4">
                      <div className="chart-container">
                      {/* {isChartReady && (
                        <Doughnut ref={chartRef} data={data} options={options} />
                      )} */}
                        <Doughnut data={data} options={options} ref={chartRef} />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="p-3 prodCard mb-4">
                <div className="align-items-center">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="icon-container3">
                        <img src={folderIcon} alt="Folder" className="cardIcon" />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-5">
                    <div>
                      <h6 className="mb-1 text-white font-14">All Products</h6>
                      <div className="d-flex align-items-center">
                        <h4 className="mb-0 text-white font-20">45</h4>
                      </div>
                    </div>
                    <div className="text-right">
                      <h6 className="mb-1 text-white font-14">Active</h6>
                      <div className="d-flex align-items-center">
                        <h4 className="mb-0 text-white font-20">32</h4>
                        <small className="font-small ms-1">+24%</small>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-3 card-one mb-4">
                <div className="align-items-center">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="icon-container2">
                    <img src={cartIcon} alt="Cart" className="cardIcon" />
                    </div>

                    <div>
                      <select className="select-time-period">
                        <option value="this-week">This Week</option>
                        <option value="last-week">Last Week</option>
                        <option value="this-month">This Month</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-5">
                    <div>
                      <h6 className="mb-1 text-danger font-14">Abandoned Cart</h6>
                      <div className="d-flex align-items-center">
                        <h4 className="mb-0">20%</h4>
                        <small className="ms-1 text-success">+00.0%</small>
                      </div>
                    </div>
                    <div className="text-right">
                      <h6 className="mb-1 text-muted font-14">Customers</h6>
                      <div className="d-flex align-items-center">
                        <h4 className="mb-0">30</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card className="p-3 customer-card">
                <div className="align-items-center">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div>
                        <h5 className="card-heading mb-0">Summary</h5>
                      </div>
                      <div className="select-sales ms-3">
                        <select className="text-primary px-2">
                          <option value="this-week">Sales</option>
                          <option value="last-week">One</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <select className="select-time-period">
                        <option value="this-week">This Week</option>
                        <option value="last-week">Last Week</option>
                        <option value="this-month">This Month</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-5">
                    <div className="bar-container">
                      <Bar
                        data={Bardata}
                        options={{
                          maintainAspectRatio: false, // Disable aspect ratio for responsive resizing
                          scales: {
                            xAxes: [{ stacked: true }],
                            yAxes: [{ stacked: true }]
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col lg={5}>
          <Card className="p-3 orders-card mb-4">
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="card-heading">Recent Orders</h5>
                </div>
              </div>
              <div className="mt-3">
                 <div className="order-summary">
                    <div className="d-flex align-items-center">
                      <div><img src={iphone13} alt="Iphone13" className="prod-img" /></div>
                      <div className="ms-3">
                        <p className="prod-name mb-1">iPhone 13</p>
                        <p className="prod-price mb-0">₦730,000.00 x 1</p>
                      </div>
                    </div>

                    <div>
                    <p className="purchase-on mb-1">12 Sept 2022</p>
                    <Badge pill bg="danger">Pending</Badge>
                    </div>
                 </div>

                 <div className="order-summary">
                    <div className="d-flex align-items-center">
                      <div><img src={iphone14} alt="Iphone13" className="prod-img" /></div>
                      <div className="ms-3">
                        <p className="prod-name mb-1">iPhone 13</p>
                        <p className="prod-price mb-0">₦730,000.00 x 1</p>
                      </div>
                    </div>

                    <div>
                    <p className="purchase-on mb-1">12 Sept 2022</p>
                    <Badge pill bg="success">Completed</Badge>
                    </div>
                 </div>

                 <div className="order-summary">
                    <div className="d-flex align-items-center">
                      <div><img src={iphone13} alt="Iphone13" className="prod-img" /></div>
                      <div className="ms-3">
                        <p className="prod-name mb-1">iPhone 13</p>
                        <p className="prod-price mb-0">₦730,000.00 x 1</p>
                      </div>
                    </div>

                    <div>
                    <p className="purchase-on mb-1">12 Sept 2022</p>
                    <Badge pill bg="danger">Pending</Badge>
                    </div>
                 </div>

                 <div className="order-summary">
                    <div className="d-flex align-items-center">
                      <div><img src={iphone14} alt="Iphone13" className="prod-img" /></div>
                      <div className="ms-3">
                        <p className="prod-name mb-1">iPhone 13</p>
                        <p className="prod-price mb-0">₦730,000.00 x 1</p>
                      </div>
                    </div>

                    <div>
                    <p className="purchase-on mb-1">12 Sept 2022</p>
                    <Badge pill bg="success">Completed</Badge>
                    </div>
                 </div>

                 <div className="order-summary">
                    <div className="d-flex align-items-center">
                      <div><img src={iphone14} alt="Iphone13" className="prod-img" /></div>
                      <div className="ms-3">
                        <p className="prod-name mb-1">iPhone 13</p>
                        <p className="prod-price mb-0">₦730,000.00 x 1</p>
                      </div>
                    </div>

                    <div>
                    <p className="purchase-on mb-1">12 Sept 2022</p>
                    <Badge pill bg="success">Completed</Badge>
                    </div>
                 </div>

                 <div className="order-summary">
                    <div className="d-flex align-items-center">
                      <div><img src={iphone14} alt="Iphone13" className="prod-img" /></div>
                      <div className="ms-3">
                        <p className="prod-name mb-1">iPhone 13</p>
                        <p className="prod-price mb-0">₦730,000.00 x 1</p>
                      </div>
                    </div>

                    <div>
                    <p className="purchase-on mb-1">12 Sept 2022</p>
                    <Badge pill bg="danger">Pending</Badge>
                    </div>
                 </div>

                 <div className="order-summary">
                    <div className="d-flex align-items-center">
                      <div><img src={iphone13} alt="Iphone13" className="prod-img" /></div>
                      <div className="ms-3">
                        <p className="prod-name mb-1">iPhone 13</p>
                        <p className="prod-price mb-0">₦730,000.00 x 1</p>
                      </div>
                    </div>

                    <div>
                    <p className="purchase-on mb-1">12 Sept 2022</p>
                    <Badge pill bg="danger">Pending</Badge>
                    </div>
                 </div>

                 <div className="order-summary">
                    <div className="d-flex align-items-center">
                      <div><img src={iphone14} alt="Iphone13" className="prod-img" /></div>
                      <div className="ms-3">
                        <p className="prod-name mb-1">iPhone 13</p>
                        <p className="prod-price mb-0">₦730,000.00 x 1</p>
                      </div>
                    </div>

                    <div>
                    <p className="purchase-on mb-1">12 Sept 2022</p>
                    <Badge pill bg="success">Completed</Badge>
                    </div>
                 </div>

                 <div className="order-summary">
                    <div className="d-flex align-items-center">
                      <div><img src={iphone13} alt="Iphone13" className="prod-img" /></div>
                      <div className="ms-3">
                        <p className="prod-name mb-1">iPhone 13</p>
                        <p className="prod-price mb-0">₦730,000.00 x 1</p>
                      </div>
                    </div>

                    <div>
                    <p className="purchase-on mb-1">12 Sept 2022</p>
                    <Badge pill bg="danger">Pending</Badge>
                    </div>
                 </div>

                 <div className="order-summary">
                    <div className="d-flex align-items-center">
                      <div><img src={iphone14} alt="Iphone13" className="prod-img" /></div>
                      <div className="ms-3">
                        <p className="prod-name mb-1">iPhone 13</p>
                        <p className="prod-price mb-0">₦730,000.00 x 1</p>
                      </div>
                    </div>

                    <div>
                    <p className="purchase-on mb-1">12 Sept 2022</p>
                    <Badge pill bg="success">Completed</Badge>
                    </div>
                 </div>

                 <div className="order-summary">
                    <div className="d-flex align-items-center">
                      <div><img src={iphone13} alt="Iphone13" className="prod-img" /></div>
                      <div className="ms-3">
                        <p className="prod-name mb-1">iPhone 13</p>
                        <p className="prod-price mb-0">₦730,000.00 x 1</p>
                      </div>
                    </div>

                    <div>
                    <p className="purchase-on mb-1">12 Sept 2022</p>
                    <Badge pill bg="success">Completed</Badge>
                    </div>
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
