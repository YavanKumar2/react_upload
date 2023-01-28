import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table  from 'react-bootstrap/Table';
import "../assets/style_research.css";
function Tabular() {
  return (
    <div>
      <div id="researchTable">
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name of the Research</th>
          <th>University</th>
          <th>Mentor</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Download</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>abc</td>
          <td>Keshav Memorial Institute of Technology</td>
          <td>xxxxx</td>
          <td>01-01-2023</td>
          <td>--</td>
          <td><button class="btn btn-primary">Download</button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>abc</td>
          <td>Keshav Memorial Institute of Technology</td>
          <td>xxxxx</td>
          <td>01-01-2023</td>
          <td>--</td>
          <td><button class="btn btn-primary">Download</button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>abc</td>
          <td>Keshav Memorial Institute of Technology</td>
          <td>xxxxx</td>
          <td>01-01-2023</td>
          <td>--</td>
          <td><button class="btn btn-primary">Download</button></td>
        </tr>
        <tr>
          <td>4</td>
          <td>abc</td>
          <td>Keshav Memorial Institute of Technology</td>
          <td>xxxxx</td>
          <td>01-01-2023</td>
          <td>--</td>
          <td><button class="btn btn-primary">Download</button></td>
        </tr>
        <tr>
          <td>5</td>
          <td>abc</td>
          <td>Keshav Memorial Institute of Technology</td>
          <td>xxxxx</td>
          <td>01-01-2023</td>
          <td>--</td>
          <td><button class="btn btn-primary">Download</button></td>
        </tr>
        <tr>
          <td>6</td>
          <td>abc</td>
          <td>Keshav Memorial Institute of Technology</td>
          <td>xxxxx</td>
          <td>01-01-2023</td>
          <td>--</td>
          <td><button class="btn btn-primary">Download</button></td>
        </tr>
        <tr>
          <td>7</td>
          <td>abc</td>
          <td>Keshav Memorial Institute of Technology</td>
          <td>xxxxx</td>
          <td>01-01-2023</td>
          <td>--</td>
          <td><button class="btn btn-primary">Download</button></td>
        </tr>
        <tr>
          <td>8</td>
          <td>abc</td>
          <td>Keshav Memorial Institute of Technology</td>
          <td>xxxxx</td>
          <td>01-01-2023</td>
          <td>--</td>
          <td><button class="btn btn-primary">Download</button></td>
        </tr>
        <tr>
          <td>9</td>
          <td>abc</td>
          <td>Keshav Memorial Institute of Technology</td>
          <td>xxxxx</td>
          <td>01-01-2023</td>
          <td>--</td>
          <td><button class="btn btn-primary">Download</button></td>
        </tr>
        <tr>
          <td>10</td>
          <td>abc</td>
          <td>Keshav Memorial Institute of Technology</td>
          <td>xxxxx</td>
          <td>01-01-2023</td>
          <td>--</td>
          <td><button class="btn btn-primary">Download</button></td>
        </tr>
      </tbody>
    </Table>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Tabular;
