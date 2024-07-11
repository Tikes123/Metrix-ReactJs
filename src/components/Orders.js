import React, { useState } from "react";
import { Container, Card, Table, Form, InputGroup, Button, Dropdown, DropdownButton,Badge, Tab, Nav, Pagination, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../styles/Orders.css';
import OrdersIcon from "../assets/icons/orders.png";
import cartIcon from "../assets/icons/cart.png";

const dummyData = Array.from({ length: 20 }, (_, index) => ({
  customerName: `Customer ${index + 1}`,
  orderDate: `2023-07-${(index % 30) + 1}`,
  orderType: index % 2 === 0 ? "Home Delivery" : "Pick Up",
  trackingId: `TRK${index + 1}`,
  orderTotal: (Math.random() * 100).toFixed(2),
  status: index % 3 === 0 ? "Pending" : index % 3 === 1 ? "Completed" : "In-progress",
}));

const Orders = () => {
  const [data, setData] = useState(dummyData);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderType, setOrderType] = useState([]);
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [activeTab, setActiveTab] = useState("fromTab"); // State to manage active tab
  const [rangeStartDate, setRangeStartDate] = useState(null);
  const [rangeEndDate, setRangeEndDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const orderTypes = ["Home Delivery", "Pick Up"]; // Options for order types

  const filteredData = data.filter(
    item =>
      item.customerName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (orderType.length === 0 || orderType.includes(item.orderType)) &&
      (!status || item.status === status) &&
      (!startDate || new Date(item.orderDate) >= startDate) &&
      (!endDate || new Date(item.orderDate) <= endDate) &&
      (!rangeStartDate || new Date(item.orderDate) >= rangeStartDate) &&
      (!rangeEndDate || new Date(item.orderDate) <= rangeEndDate)
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleOrderTypeChange = (type) => {
    if (orderType.includes(type)) {
      setOrderType(orderType.filter(t => t !== type));
    } else {
      setOrderType([...orderType, type]);
    }
  };

  const handleTabSelect = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Container fluid className="px-4 py-3">
      <Row className="mb-3">
        <div className="d-flex justify-content-between align-items-center">
            <div><h6>Orders Summary</h6></div>
            <div><Button variant="primary"><i class="bi bi-plus-lg me-2"></i> Create a New Order</Button></div>
        </div>
      </Row>
      <Row>

        <Col>
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

        <Col>
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
                  <h6 className="mb-1 text-muted font-14">Canceled</h6>
                  <div className="d-flex align-items-center">
                      <h4 className="font-one mb-0">20%</h4>
                      <small className="ms-1 text-danger">+00.0%</small>
                  </div>
                </div>
                <div>
                  <h6 className="mb-1 text-muted font-14">Returned</h6>
                  <h4 className="font-one mb-0">5</h4>
                </div>
                <div>
                  <h6 className="mb-1 text-muted font-14">Damaged</h6>
                  <h4 className="font-one mb-0">445</h4>
                </div>
              </div>
            </div>
          </Card>
        </Col>

        <Col md={3}>
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
                        <h4 className="font-one mb-0">20%</h4>
                        <small className="ms-1 text-success">+00.0%</small>
                      </div>
                    </div>
                    <div className="text-right">
                      <h6 className="mb-1 text-muted font-14">Customers</h6>
                      <div className="d-flex align-items-center">
                        <h4 className="font-one mb-0">30</h4>
                      </div>
                    </div>
                  </div>
                </div>
            </Card>
        </Col>
      </Row>
      
      <Card className="p-3 mb-4 x-scroll">
      <div className="d-flex justify-content-between align-items-center">
        <div className="ms-3"><h6>Customer Orders</h6></div>
        
        <div className="filter-container">
          <div className="filter-scroll d-flex">

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" className="border-r"><i className="bi bi-search" id="search-icon"></i></InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search"
              className="border-l box-none"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3 filter-button">
            <InputGroup.Text id="basic-addon1" className="border-r"><i className="bi bi-funnel" id="filter-icon"></i></InputGroup.Text>
            <DropdownButton
              variant="outline-secondary"
              title="Filter"
              className="border-none box-none"
              id="input-group-dropdown-1">
              
              <Dropdown>
                <div className="filter-box px-3 pt-2 pb-0">
                  <div><h6 className="fw-6">Filter</h6></div>
                  <div className="checkbox-group">
                    <div><p className="font-12 mb-1">Order Type</p></div>
                    <div className="d-flex justify-content-between">
                      {orderTypes.map((type, index) => (
                        <Form.Check
                          key={index}
                          type="checkbox"
                          label={type}
                          checked={orderType.includes(type)}
                          onChange={() => handleOrderTypeChange(type)}
                        />
                      ))}
                    </div>

                    <div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label className="font-12">Status</Form.Label>
                      <Form.Control
                        as="select"
                        value={status}
                        onChange={e => setStatus(e.target.value)}
                        >
                        <option value="">All</option>
                        <option value="Pending">Pending</option>
                        <option value="In-progress">In-progress</option>
                        <option value="Completed">Completed</option>
                      </Form.Control>
                    </Form.Group>
                    </div>

                    <div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label className="font-12">Customers</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>All</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                    </div>

                  </div>
                </div>
              </Dropdown>      
              <Dropdown.Divider />
              <div className="px-3"><Button className="btn-primary w-100 justify-content-center">Filter</Button></div>
            </DropdownButton>
          </InputGroup>

          <InputGroup className="mb-3 filter-button">
            <InputGroup.Text id="basic-addon2" className="border-r"><i className="bi bi-calendar4-week"></i></InputGroup.Text>
            <DropdownButton
              variant="outline-secondary"
              title="Filter"
              className="border-none box-none"
              id="input-group-dropdown-2">
              
              <Dropdown>
                <div className="filter-box px-3 pt-2 pb-0">
                  <div><h6 className="fw-6">By Date</h6></div>

                  <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
                    <Row className="mt-4">
                      <Col md={12}>
                        <Card>
                          <Card.Header>
                            <Nav variant="tabs">
                              <Nav.Item>
                                <Nav.Link eventKey="fromTab">Range From</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="toTab">Range To</Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </Card.Header>
                          <Card.Body className="mb-2">
                          <Tab.Content>
                            <Tab.Pane eventKey="fromTab">
                              <DatePicker
                                selected={rangeStartDate}
                                onChange={(date) => setRangeStartDate(date)}
                                selectsStart
                                startDate={rangeStartDate}
                                endDate={rangeEndDate}
                                placeholderText="Range From"
                                dateFormat="dd/MM/yyyy"
                              />
                            </Tab.Pane>
                            <Tab.Pane eventKey="toTab">
                              <DatePicker
                                selected={rangeEndDate}
                                onChange={(date) => setRangeEndDate(date)}
                                selectsEnd
                                startDate={rangeStartDate}
                                endDate={rangeEndDate}
                                placeholderText="Range To"
                                dateFormat="dd/MM/yyyy"
                              />
                            </Tab.Pane>
                          </Tab.Content>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Tab.Container>

                </div>
              </Dropdown>      
            </DropdownButton>
          </InputGroup>

          <InputGroup className="mb-3 filter-button">
            <InputGroup.Text id="basic-addon2" className="border-r"><i className="bi bi-send"></i></InputGroup.Text>
            <DropdownButton
              variant="outline-secondary"
              title="Share"
              className="border-none box-none"
              id="input-group-dropdown-2">    
            </DropdownButton>
          </InputGroup>

          </div>
        </div>
      </div>

      {/* Table Section */}
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th><Form.Check type="checkbox" placeholder="check"/></th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Order Type</th>
            <th>Tracking ID</th>
            <th>Order Total</th>
            <th>Action</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={index}>
              <td><Form.Check type="checkbox" placeholder="check" /></td>
              <td>{item.customerName}</td>
              <td>{item.orderDate}</td>
              <td>{item.orderType}</td>
              <td>{item.trackingId}</td>
              <td>₦{item.orderTotal}</td>
              <td>
              <Form.Select className="action-bx" aria-label="Default select example">
                <option>{item.status}</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              </td>
              <td>
                <Badge pill bg={item.status === "Pending" ? "warning" : item.status === "Completed" ? "success" : "primary"}>
                  {item.status}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex ms-auto">
      <Pagination>
        <Pagination.Prev
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        />
        {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }, (_, index) => (
          <Pagination.Item
            key={index}
            active={index + 1 === currentPage}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredData.length / itemsPerPage)))}
          disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)}
        />
      </Pagination>
      </div>
      </Card>

    </Container>
  );
};

export default Orders;
