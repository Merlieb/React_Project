import React from "react";
import classNames from "classnames";

import LinkedCalendar from "./LinkedCalendar";
import UnLinkedCalendar from "./UnLinkedCalendar";
import Calendar from "./Calendar";


class Index extends React.Component {
    render() {
      const { classes, ...rest } = this.props;
      return (
        <div>
            <LinkedCalendar/>
            <UnLinkedCalendar/>
            <Calendar/>

        </div>

      )};
    }
export default Index;