import * as React from 'react';

import { IEmployeecontactProps } from './IEmployeecontactProps';
import EmployeeDetailss from './Employee-Details/EmployeeDetails';


export default class Employeecontact extends React.Component<IEmployeecontactProps, {}> {
  public render(): React.ReactElement<IEmployeecontactProps> {
    

    return (
    <div >
         {/* <EmployeeDetails/> */}
       
         <EmployeeDetailss/>
    </div>
    );
  }
}
