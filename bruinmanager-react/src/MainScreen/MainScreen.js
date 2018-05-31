import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RMS from './ResponsiveMainScreen.js';
import CalendarDrawer from './CalendarTab/CalendarDrawer/CalendarDrawer';
import SummaryDrawer from './SummaryTab/SummaryDrawer/SummaryDrawer';
//import GenericContent from '../Components/GenericContent/GenericContent';
import CalendarContent from './CalendarTab/CalendarContent/Calendar';
import SummaryContent from './SummaryTab/SummaryContent/Summary';
import IntermediateContent from '../Components/IntermediatePage/IntermediatePage.js';
import './MainScreen.scss';



const SummaryScreen = () => {
  return(<RMS specificContent={<SummaryContent/>} specificDrawer={<SummaryDrawer/>}/>);
}
const CalendarScreen = () => {
  return(<RMS specificContent={<CalendarContent/>} specificDrawer={<CalendarDrawer/>}/>);
}
const IntermediateScreen = () => {
  return(<RMS specificContent={<IntermediateContent/>}/>);
}
export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveDashboard: true,
      fbdata: this.props.fbdata
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/dashboard" component={SummaryScreen} />
          <Route path="/calendar" component={CalendarScreen} />
          <Route path="/settings" component={SummaryScreen} />
          <Route path="/help" component={SummaryScreen} />
          <Route path="/inter" component={IntermediateScreen} />
        </Switch>
      </Router>
		);
	}
}

// const SummaryScreen = (props) => {
//   return(
//     <div className="mainScreen-style-wrapper">
//       <NewDrawer
//         variant="permanent"
//         anchor="left"
//         className={props.classes.drawer}>
//         <div className="generic-drawer-style-wrapper">
//           <div className="padding-wrapper">
//             <div className="logo-wrapper">
//               <img src={Logo} alt="BruinHub" className="logo-style"/>
//             </div>
//               <SummaryDrawer />
//             <div />
//           </div>
//         </div>            
//       </NewDrawer>
//       <GenericContent activeItem="dashboard"><SummaryContent /></GenericContent>
//     </div>
//   );
// }

// const CalendarScreen = (props) => {
//   return (
//     <div className="mainScreen-style-wrapper">
//       <NewDrawer
//         variant="permanent"
//         anchor="left"
//         className={props.classes.drawer}>
//         <div className="generic-drawer-style-wrapper">
//           <div className="padding-wrapper">
//             <div className="logo-wrapper">
//               <img src={Logo} alt="BruinHub" className="logo-style"/>
//             </div>
//               <CalendarDrawer />
//             <div />
//           </div>
//         </div>
//       </NewDrawer>
//       <GenericContent activeItem="calendar"><CalendarContent /></GenericContent>
//     </div>
//   );
// }

// const IntermediateScreen = () => {
//   return (
//     <IntermediateContent />
//     <ResponsiveDrawer specificDrawer="" specificContent=""/>
//   );
// }