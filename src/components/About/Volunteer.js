import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const Volunteer = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <ImPointRight />
            <span className="purple">
              SFC Head, Entrepreneurship Development Cell
            </span>
            : 06 / 2019 - 09 / 2019
            <br />
            Increased sales by 40 percent compared to last year by leading a
            team of 50 members where we provided basic engineering requirements
            to students
            <br />
            <br />
            <ImPointRight />
            <span className="purple">Sponsorship Head, Vishwapreneur</span>
            : 07/2019 - 02/2020
            <br />
            Headed the sponsorship team for Vishwapreneur'20 - National level E-
            Summit to raise funds by pitching to various industrial and market
            professionals.
            <br />
            <br />
            <ImPointRight />
            <span className="purple">
              Logistics Head, Associate Industrial Relations Head
            </span>
            : 07/2018 - 03/2019
            <br />
            Managed the logistics requirements along with all the vendors and
            the sponsors for the event - Vishwapreneur'19.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default Volunteer;
