import * as React from 'react';
import Popup from 'reactjs-popup';
import { arraysEqual, Modal } from 'office-ui-fabric-react';
import 'reactjs-popup/dist/index.css';
import EditEmployeeContact from '../EditEmployeeContact';
import Tooltip from '../Tooltip/popup';
import '../../foundation.scss';
import 'reactjs-popup/dist/index.css';
import * as $ from 'jquery';
import Tabs from "../Tabs/Tabs"
import Tab from "../Tabs/Tab"
import '../Tabs/styles.css';
import * as Moment from 'moment';
import ImagesC from '../ImagesC/Images';
import EmployeeDetails from '../EmployeeDetails';
export default function CreateEmployee({arr}:any){
    
    const [data, setData] = React.useState([]);
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [modalIsOpen1, setModalIsOpen1] = React.useState(false);
    const [value, setValue] = React.useState("");
    const EditData = (e: any, Id: any) => {
        
        var spRequest = new XMLHttpRequest();
        spRequest.open('GET', "https://hhhhteams.sharepoint.com/sites/HHHH/_api/lists/getbyid('edc879b9-50d2-4144-8950-5110cacc267a')/items?$filter=Id eq'" + Id + "'", true);
        spRequest.setRequestHeader("Accept", "application/json");

        spRequest.onreadystatechange = function () {

            if (spRequest.readyState === 4 && spRequest.status === 200) {
                var result = JSON.parse(spRequest.responseText);

               

                    setData(result.value)

                    setModalIsOpenToTrue();
            }

            else if (spRequest.readyState === 4 && spRequest.status !== 200) {
                console.log('Error Occurred !');
            }
           

        };
        spRequest.send();
    }

    // Empty Data Popup 
    const EmptyPopup = (e: any) => {
        setModalIsOpenToTrue1();
    
    }







    const [Cdata, setCData] = React.useState([]);
    var LanguagesArray: any = [{ 'Title': 'English' }, { 'Title': 'German' }, { 'Title': 'French' }, { 'Title': 'Spanish' }];
    // React.useEffect(() => {
    //     var url = `https://hhhhteams.sharepoint.com/sites/HHHH/_api/lists/getbyid('edc879b9-50d2-4144-8950-5110cacc267a')/items?$select=Id,Title,Item_x0020_Cover,FirstName,FullName,Department,Company,JobTitle,WebPage,CellPhone,Email,LinkedIn,Created,Author/Title,Modified,Editor/Title,EmployeeID/Title,StaffID,EmployeeID/Id&$expand=EmployeeID,Author,Editor&$filter=(Id eq ${id})&$orderBy=%20Created%20asc`;
    //     var response: any = [];  // this variable is used for storing list items
    //     function GetListItems() {
    //         $.ajax({
    //             url: url,
    //             method: "GET",
    //             headers: {
    //                 "Accept": "application/json; odata=verbose"
    //             },
    //             success: function (data) {
    //                 response = response.concat(data.d.results);
    //                 if (data.d.__next) {
    //                     url = data.d.__next;
    //                     GetListItems();
    //                 } else setData(response);
    //                 console.log(response);
    //             },
    //             error: function (error) {
    //                 console.log(error);
    //                 // error handler code goes here
    //             }
    //         });
    //     }
    //     GetListItems();
    // },
    //     []);
        // React.useEffect(() => {
        //     var url = ("https://hhhhteams.sharepoint.com/sites/HHHH/_api/lists/getbyid('21107fb5-097e-4d04-8021-0424a64f2959')/items?$select=Id,dateOfBirth,placeOfBirth,Nationality,maritalStatus,highestSchoolDiploma,highestVocationalEducation,otherQualifications,Languages,HHHHContact/Id&$expand=HHHHContact&$filter= HHHHContact/Id eq'" + Id + "'");
        //     var response: any = [];  // this variable is used for storing list items
        //     function GetContactListItems() {
        //         $.ajax({
        //             url: url,
        //             method: "GET",
        //             headers: {
        //                 "Accept": "application/json; odata=verbose"
        //             },
        //             success: function (Cdata) {
        //                 response = response.concat(Cdata.d.results);
        //                 if (Cdata.d.__next) {
        //                     url = Cdata.d.__next;
        //                     GetContactListItems();
        //                 } else setCData(response);
        //                 console.log(response);
        //             },
        //             error: function (error) {
        //                 console.log(error);
        //                 // error handler code goes here
        //             }
        //         });
        //     }
        //     GetContactListItems();
        // },
        //     []);
            const setModalIsOpenToTrue = () => {
                setModalIsOpen(true)
            }
        
        
             
            const setModalIsOpenToFalse = () => {
                setModalIsOpen(false)
            }


            const setModalIsOpenToTrue1 = () => {
                setModalIsOpen1(true)
            }
        
        
             
            const setModalIsOpenToFalse1 = () => {
                setModalIsOpen1(false)
            }
   
    const onChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setValue(event.target.value);
      };
      const onSearch = (searchTerm: React.SetStateAction<string>) => {
        setValue(searchTerm);
    
        
        // our api to fetch the search result
        console.log("search ", searchTerm);
      };
    
    return(
        <>
   
        <Popup trigger={ 
            <i>Create Employee</i>
            } 
                                            modal
        contentStyle={{ position:"absolute",left:"28%",width: '40%'  ,top: "1%",
        keyboard: false}}

                                            >
                                                 {(close: React.MouseEventHandler<HTMLButtonElement>) => (
<div>
                  <div className="modal-header">
                      <h3 className="modal-title">Add Employee
                          {/* <page-settings-info webpartid="'CreateContactPopupItem'"></page-settings-info> */}
                      </h3>
                      <button type="button" className="close ml-2" style={{minWidth:"10px"}}
                           >
                      <Tooltip/>
                  </button>
                      <button type="button" className="close ml-2" style={{minWidth:"10px"}} data-dismiss="modal"
                           onClick={close}>
                      &times;
                  </button>
                  </div>
                  <div className="modal-body">
                      <div className="col-sm-12 tab-content bdrbox ">
                          <div className="form-group mt-10">
                              <input type="text" id="txtFirstName"  className="form-control"
                                  placeholder="Enter Contact Name" value={value} onChange={onChange}  onClick={() => onSearch(value)}/>
                          
<ul className="ui-menu ui-widget ui-widget-content ui-corner-all">
          {arr
            .filter((item:any) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.FullName!=null?item.FullName.toLowerCase():"Anubhav";
              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item:any) => (
              
              <li onClick={(e) => EditData(e,item.Id)}  className="ui-menu-item" key={item.FullName} >
               <a>{item.FullName}</a>
             {/* onClick={() =><EditEmployeeContact id={item.Id}/> */}
              </li>
            ))}
            </ul>
            
        </div>
                         </div>
                         
                         </div>
                  <div className="modal-footer">
                      <span >
                          <button type="button" className="btn btn-primary mt-10" ng-click="createContact()" onClick={(e) => EmptyPopup(e)}>
                              Save  
                          </button>
                      </span>
                      <button type="button" className="btn btn-default mt-10" onClick={close}>Cancel</button>
                  </div>
                  </div>
                                                 
            )} 
        </Popup>
        

        {
            data.map(employee =>
            <Modal
            isOpen={modalIsOpen}
            onDismiss={setModalIsOpenToFalse}
            isBlocking={false}>
    {/* <Popup trigger={ 
        <img title="Edit Details"  className="wid22"
                                        src="https://hhhhteams.sharepoint.com/_layouts/images/edititem.gif"/>} 
                                        modal
    nested
    contentStyle={{ position:"absolute",left:"10%",width: '80%'  ,top: "1%",backdrop:"false"}}
    closeOnDocumentClick={true} 
                                        > */}
                                                {/* {(close: React.MouseEventHandler<HTMLButtonElement>) => ( */}
    <div id="EditGrueneContactSearch" >
    <div ng-cloak >
        <div className="modal-header">
            <h3 className="modal-title">
                {employee.Item_x0020_Cover !=null &&
                <img style={{width: "22px"}} ng-if="selectedImaSgeUrl != undefined" id="selectedimage"
                    src={employee.Item_x0020_Cover.Url} />
                }
                {employee.Item_x0020_Cover ==null &&
                <img style={{width: "22px"}} ng-if="selectedImageUrl == undefined"
                    src="https://hhhhteams.sharepoint.com/sites/HHHH/SP/SiteCollectionImages/ICONS/32/icon_user.jpg" />}
                Edit Contact- {employee.FirstName +' '+ employee.Title}
                <span className="pull-right">
                    <Tooltip/>
                    {/* <page-settings-info webpartid="'sharewebContactPopup'"></page-settings-info> */}
                </span>
            </h3>
            <button type="button"  style={{width:"22px"}} className="close" data-dismiss="modal" onClick={setModalIsOpenToFalse}>
                &times;
            </button>
        </div>
        <div className="modal-body">
            <form name="ItemForm" noValidate role="form">
                <div id="table-wrapper">
                    <div id="table-scroll">
                        <div id="itemtabs" className="exTab3">
                        <Tabs>
                             <Tab title="BASIC INFORMATION" >
                            <div className="tab-content clearfix">
                                <div id="basicinfo" className="clearfix">
                                    <div className="col-sm-12 form-group clearfix">
                                        <fieldset className="fieldsett">
                                            <legend className="activity">General</legend>
                                            <div className="form-group clearfix">
                                                <div className="col-sm-2">
                                                    <label htmlFor="firstName">First Name</label>
                                                    <input defaultValue={employee.FirstName} type="text" className="form-control"
                                                        id="firstName" placeholder="Enter First Name"/>
                                                </div>
                                                <div className="col-sm-2">
                                                    <label htmlFor="lastName">Last Name</label>
                                                    <input  defaultValue={employee.Title!=undefined?employee.Title:""} type="text" className="form-control"
                                                        id="lastName" placeholder="Enter Last Name"/>
                                                </div>
                                                <div className="col-sm-2">
                                                    <label htmlFor="Organization">Organization</label>
                                                    <input  defaultValue={employee.Company} type="text" className="form-control"
                                                        id="Organization" placeholder="Enter Organization"/>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label htmlFor="Department ">Department</label>
                                                    <input  defaultValue={employee.Department} type="text" className="form-control"
                                                        id="Department" placeholder="Enter Department"/>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label htmlFor="Position">Position</label>
                                                    <input  defaultValue={employee.JobTitle} type="text" className="form-control"
                                                        id="Position" placeholder="Enter Position"/>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className="col-sm-12 form-group clearfix">
                                        <fieldset className="fieldsett">
                                            <legend className="activity">Social Media Accounts</legend>
                                            <div className=" form-group clearfix">
                                                <div className="col-sm-3 ">
                                                    <label className="full_width">
                                                        LinkedIn   <a className="hreflink" href={employee.LinkedIn!=null?employee.LinkedIn.url:""} 
                                                            target="_blank">
                                                            <span className="pull-right">
                                                                <i className="fa fa-linkedin"></i>
                                                            </span>
                                                        </a>
                                                    </label>
                                                    <input type="text" className="form-control" defaultValue={employee.LinkedIn!=null?employee.LinkedIn.url:""} />
                                                </div>
                                                <div className="col-sm-3">
                                                    <label className="full_width">
                                                        Website 
                                                        <a className="hreflink" href={employee.WebPage != null?employee.WebPage.Url:""} 
                                                            target="_blank">
                                                            <span className="pull-right">
                                                                <i className="fa fa-link"></i>
                                                            </span>
                                                        </a>
                                                    </label>
                                                    <input type="text" className="form-control" defaultValue={employee.WebPage != null? employee.WebPage.Url:""} />
                                                </div>
                                                <div className="col-sm-3">
                                                    <label htmlFor="Email">Email</label>
                                                    <input  defaultValue={employee.Email} type="email" className="form-control" id="Email"
                                                        placeholder="Enter Email"/>
                                                </div>
                                                <div className="col-sm-3">
                                                    <label htmlFor="Phone ">Phone</label>
                                                    <input  defaultValue={employee.CellPhone} type="text" className="form-control" id="Phone"
                                                        placeholder="Enter Phone Number"/>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12 smartToggler clearfix" ng-if="isHR || Myuser">
                                <div className="panel panel-default border-0">
                                    <label className="col-lg-12 mb0 pd5 bg-grey full_width" ng-click="filtershowHide()">
                                    HR Information
                                    <a ng-if="smartToggler.expanded">
                                        <img className=" pull-right hreflink wid22" title="Tap to Expand"
                                            src="https://hhhhteams.sharepoint.com/sites/hhhh/SiteCollectionImages/ICONS/24/Add-New.png"/>
                                        <a ng-if="!smartToggler.expanded">
                                            <img className="hreflink pull-right wid10  mr-5 mt-5 " title="Tap to Collapse"
                                                src="https://hhhhteams.sharepoint.com/sites/hhhh/SiteCollectionImages/ICONS/32/sub_icon.png"/>
                                        </a>
                                        </a>
                                    </label>
                                    {Cdata.map(Details =>
                                <div className="togglecontent" >
                                {/* style={{display:"none"}} */}
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <label htmlFor="dateOfBirth">Date of Birth</label>
                                            <input defaultValue={Details.dateOfBirth!=null?Moment(Details.dateOfBirth).format('DD/MM/YYYY'):""} type="text"
                                                className="form-control" id="dateOfBirth"
                                                placeholder="Enter Date of Birth" />
                                        </div>
                                        <div className="col-sm-2">
                                            <label htmlFor="placeOfBirth">Place of Birth</label>
                                            <input defaultValue={Details.placeOfBirth!=null?Details.placeOfBirth:""} type="text"
                                                className="form-control" id="placeOfBirth"
                                                placeholder="Enter Place of Birth"/>
                                        </div>
                                        <div className="col-sm-2">
                                            <label htmlFor="Nationality">Nationality</label>
                                            <input defaultValue={Details.Nationality!=null?Details.Nationality:""} type="text"
                                                className="form-control" id="Nationality"
                                                placeholder="Enter Nationality"/>
                                        </div>
                                        <div className="col-sm-3">
                                            <label htmlFor="Marital">Marital status</label>
                                            <select defaultValue={Details.maritalStatus!=null?Details.maritalStatus:""} className="form-control"
                                                id="Marital" required>
                                                <option value="none" disabled>Select an Option</option>
                                                <option value="Single">Ledig</option>
                                                <option value="Married">Verheiratet</option>
                                                <option value="Divorced">Geschieden</option>
                                                <option value="Widowed">Verwitwet</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-3">
                                            <label htmlFor="highestSchoolDiploma">Highest School Diploma</label>
                                            <input defaultValue={Details.highestSchoolDiploma!=null?Details.highestSchoolDiploma:""} type="text"
                                                className="form-control" id="highestSchoolDiploma"
                                                placeholder="Enter Highest School Diploma"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <label htmlFor="highestVocationalEducation">Highest Vocational
                                                Education</label>
                                            <input defaultValue={Details.highestVocationalEducation!=null?Details.highestVocationalEducation:""}
                                                type="text" className="form-control" id="highestVocationalEducation"
                                                placeholder="Enter Highest Vocational Education"/>
                                        </div>
                                        <div className="col-sm-3">
                                            <label htmlFor="otherQualifications">Other Qualifications</label>
                                            {/* defaultValue={Details.otherQualifications!=null?Details.otherQualifications:"NA"} */}
                                            <input  type="text" defaultValue={Details.otherQualifications!=null?Details.otherQualifications:"NA"}
                                                className="form-control" id="otherQualifications"
                                                placeholder="Enter Other Qualifications"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="Languages">Languages</label><br/>
                                            {LanguagesArray.map((obj: any) => 
                                            <span className="col-sm-3" ng-repeat="obj in LanguagesArray">
                                                {/* <input type="checkbox" defaultValue={Details.Languages!=null?Details.Languages[0]:""} id="English"
                                                    name="obj.Title"/> */}
                                                        <input type='checkbox' id="English" name="obj.name"/>
                                                <label htmlFor="English">{obj.Title}</label><br/>
                                            </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                    )}
                                </div>
                                </div>
                            </div>
                            </div>
                              </Tab>
<Tab title='IMAGE INFORMATION'>
       <ImagesC  id={data}/>
     </Tab>
</Tabs>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div className="modal-footer">
            <div className="col-sm-5 text-left pad0">
                <div className="text-left">
                    Created <span>{Moment(employee.Created).format('DD/MM/YYYY')}</span> by
                    <span className="footerUsercolor">
                        {/* {employee.Author.Title!=undefined?employee.Author.Title:""} */}
                        </span>
                </div>
                <div className="text-left">
                    Last modified <span >{Moment(employee.Modified).format('DD/MM/YYYY')}</span> by <span
                        className="footerUsercolor">
                            {/* {employee.Editor.Title!=undefined?employee.Editor.Title:""} */}
                            </span>
                </div>
                <div className="text-left">
                    <a className="hreflink" ng-click="removeItem(Item.Id)">
                        <img src="/_layouts/images/delete.gif"/> Delete this item
                    </a>
                </div>
            </div>
            <div className="col-sm-7 pull-right">
                <a className="hreflink" target="_blank"
                    href={`https://hhhhteams.sharepoint.com/sites/HHHH/HR//SitePages/EmployeeInfo.aspx?employeeId=${employee.Id}`}>
                    Go to profile page
                </a>
                <span> | </span>
                <a href={`https://hhhhteams.sharepoint.com/sites/HHHH/Lists/Contacts/EditForm.aspx?ID=${employee.Id}`}
                    target="_blank">
                    Open
                    out-of-the-box form
                </a>
                <button type="button" className="btn btn-primary" ng-click="SaveItem(Item)">Save</button>
                <button type="button" className="btn btn-default" onClick={setModalIsOpenToFalse}>Cancel</button>
            </div>
        </div>
    </div>
</div>
                                                {/* )}     */}
{/* </Popup> */}
 </Modal>
    )
   
                                                }
                                                
                                                
                                                
                                                
                                                
                                                <Modal
isOpen={modalIsOpen1}
onDismiss={setModalIsOpenToFalse1}
isBlocking={false}>
<div id="EditGrueneContactSearch" >
<div ng-cloak >
    <div className="modal-header">
        <h3 className="modal-title">
            {/* {employee.Item_x0020_Cover !=null && */}
            <img style={{width: "22px"}} ng-if="selectedImaSgeUrl != undefined" id="selectedimage"
               />
                 {/* src={employee.Item_x0020_Cover.Url} */}
            {/* } */}
            {/* {employee.Item_x0020_Cover ==null && */}
            <img style={{width: "22px"}} ng-if="selectedImageUrl == undefined"
                src="https://hhhhteams.sharepoint.com/sites/HHHH/SP/SiteCollectionImages/ICONS/32/icon_user.jpg" />
                {/* } */}
            Edit Contact- null null
            {/* {employee.FirstName +' '+ employee.Title} */}
            <span className="pull-right">
                {/* <Tooltip/> */}
                {/* <page-settings-info webpartid="'sharewebContactPopup'"></page-settings-info> */}
            </span>
        </h3>
        <button type="button"  style={{width:"22px"}} className="close" data-dismiss="modal" onClick={setModalIsOpenToFalse1}>
            &times;
        </button>
    </div>
    <div className="modal-body">
        <form name="ItemForm" noValidate role="form">
            <div id="table-wrapper">
                <div id="table-scroll">
                    <div id="itemtabs" className="exTab3">
                    <Tabs>
                         <Tab title="BASIC INFORMATION" >
                        <div className="tab-content clearfix">
                            <div id="basicinfo" className="clearfix">
                                <div className="col-sm-12 form-group clearfix">
                                    <fieldset className="fieldsett">
                                        <legend className="activity">General</legend>
                                        <div className="form-group clearfix">
                                            <div className="col-sm-2">
                                                <label htmlFor="firstName">First Name</label>
                                                {/* defaultValue={employee.FirstName} */}
                                                <input  type="text" className="form-control"
                                                    id="firstName" placeholder="Enter First Name"/>
                                            </div>
                                            <div className="col-sm-2">
                                                <label htmlFor="lastName">Last Name</label>
                                                {/* defaultValue={employee.Title} */}
                                                <input   type="text" className="form-control"
                                                    id="lastName" placeholder="Enter Last Name"/>
                                            </div>
                                            <div className="col-sm-2">
                                                <label htmlFor="Organization">Organization</label>
                                                {/* defaultValue={employee.Company} */}
                                                <input   type="text" className="form-control"
                                                    id="Organization" placeholder="Enter Organization"/>
                                            </div>
                                            <div className="col-sm-3">
                                                <label htmlFor="Department ">Department</label>
                                                {/* defaultValue={employee.Department} */}
                                                <input   type="text" className="form-control"
                                                    id="Department" placeholder="Enter Department"/>
                                            </div>
                                            <div className="col-sm-3">
                                                <label htmlFor="Position">Position</label>
                                                {/* defaultValue={employee.JobTitle} */}
                                                <input   type="text" className="form-control"
                                                    id="Position" placeholder="Enter Position"/>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="col-sm-12 form-group clearfix">
                                    <fieldset className="fieldsett">
                                        <legend className="activity">Social Media Accounts</legend>
                                        <div className=" form-group clearfix">
                                            <div className="col-sm-3 ">
                                                <label className="full_width">
                                                    LinkedIn   <a className="hreflink"  
                                                        target="_blank">
                                                            {/* href={employee.LinkedIn!=null?employee.LinkedIn.url:""} */}
                                                        <span className="pull-right">
                                                            <i className="fa fa-linkedin"></i>
                                                        </span>
                                                    </a>
                                                </label>
                                                <input type="text" className="form-control"  />
                                                {/* defaultValue={employee.LinkedIn!=null?employee.LinkedIn.url:""} */}
                                            </div>
                                            <div className="col-sm-3">
                                                <label className="full_width">
                                                    Website 
                                                    {/* href={employee.WebPage != null?employee.WebPage.Url:""} */}
                                                    <a className="hreflink"  
                                                        target="_blank">
                                                        <span className="pull-right">
                                                            <i className="fa fa-link"></i>
                                                        </span>
                                                    </a>
                                                </label>
                                                <input type="text" className="form-control"  />
                                                {/* defaultValue={employee.WebPage != null? employee.WebPage.Url:""} */}
                                            </div>
                                            <div className="col-sm-3">
                                                <label htmlFor="Email">Email</label>
                                                {/* defaultValue={employee.Email} */}
                                                <input   type="email" className="form-control" id="Email"
                                                    placeholder="Enter Email"/>
                                            </div>
                                            <div className="col-sm-3">
                                                <label htmlFor="Phone ">Phone</label>
                                                {/* defaultValue={employee.CellPhone} */}
                                                <input   type="text" className="form-control" id="Phone"
                                                    placeholder="Enter Phone Number"/>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="col-lg-12 smartToggler clearfix" ng-if="isHR || Myuser">
                            <div className="panel panel-default border-0">
                                <label className="col-lg-12 mb0 pd5 bg-grey full_width" htmlFor="identifiertxt"  ng-click="filtershowHide()">
                                HR Information
                                <a ng-if="smartToggler.expanded" id="identifiertxt">
                                    <img className=" pull-right hreflink wid22" title="Tap to Expand"  id="identifiertxt"
                                        src="https://hhhhteams.sharepoint.com/sites/hhhh/SiteCollectionImages/ICONS/24/Add-New.png"/>
                                    <a ng-if="!smartToggler.expanded">
                                        <img className="hreflink pull-right wid10  mr-5 mt-5 " title="Tap to Collapse" id="identifiertxt"
                                            src="https://hhhhteams.sharepoint.com/sites/hhhh/SiteCollectionImages/ICONS/32/sub_icon.png"/>
                                    </a>
                                    </a>
                                </label>
                                {Cdata.map(Details =>
                            <div className="togglecontent" >
                            {/* style={{display:"none"}} */}
                                <div className="row">
                                    <div className="col-sm-2">
                                        <label htmlFor="dateOfBirth">Date of Birth</label>
                                        {/* defaultValue={Details.dateOfBirth!=null?Moment(Details.dateOfBirth).format('DD/MM/YYYY'):""} */}
                                        <input  type="text"
                                            className="form-control" id="dateOfBirth"
                                            placeholder="Enter Date of Birth" />
                                    </div>
                                    <div className="col-sm-2">
                                        <label htmlFor="placeOfBirth">Place of Birth</label>
                                        {/* defaultValue={Details.placeOfBirth!=null?Details.placeOfBirth:""} */}
                                        <input  type="text"
                                            className="form-control" id="placeOfBirth"
                                            placeholder="Enter Place of Birth"/>
                                    </div>
                                    <div className="col-sm-2">
                                        <label htmlFor="Nationality">Nationality</label>
                                        {/* defaultValue={Details.Nationality!=null?Details.Nationality:""} */}
                                        <input  type="text"
                                            className="form-control" id="Nationality"
                                            placeholder="Enter Nationality"/>
                                    </div>
                                    <div className="col-sm-3">
                                        <label htmlFor="Marital">Marital status</label>
                                        {/* defaultValue={Details.maritalStatus!=null?Details.maritalStatus:""} */}
                                        <select  className="form-control"
                                            id="Marital" required>
                                            <option value="none" disabled>Select an Option</option>
                                            <option value="Single">Ledig</option>
                                            <option value="Married">Verheiratet</option>
                                            <option value="Divorced">Geschieden</option>
                                            <option value="Widowed">Verwitwet</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-3">
                                        <label htmlFor="highestSchoolDiploma">Highest School Diploma</label>
                                        {/* defaultValue={Details.highestSchoolDiploma!=null?Details.highestSchoolDiploma:""} */}
                                        <input  type="text"
                                            className="form-control" id="highestSchoolDiploma"
                                            placeholder="Enter Highest School Diploma"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <label htmlFor="highestVocationalEducation">Highest Vocational
                                            Education</label>
                                            {/* defaultValue={Details.highestSchoolDiploma!=null?Details.highestSchoolDiploma:""} */}
                                        <input 
                                            type="text" className="form-control" id="highestVocationalEducation"
                                            placeholder="Enter Highest Vocational Education"/>
                                    </div>
                                    <div className="col-sm-3">
                                        <label htmlFor="otherQualifications">Other Qualifications</label>
                                        {/* defaultValue={Details.otherQualifications!=null?Details.otherQualifications:"NA"} */}
                                        <input  type="text" 
                                            className="form-control" id="otherQualifications"
                                            placeholder="Enter Other Qualifications"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="Languages">Languages</label><br/>
                                        {LanguagesArray.map((obj: any) => 
                                        <span className="col-sm-3" ng-repeat="obj in LanguagesArray">
                                            {/* <input type="checkbox" defaultValue={Details.Languages!=null?Details.Languages[0]:""} id="English"
                                                name="obj.Title"/> */}
                                                    <input type='checkbox' id="English" name="obj.name"/>
                                            <label htmlFor="English">{obj.Title}</label><br/>
                                        </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                                )}
                            </div>
                            </div>
                        </div>
                        </div>
                          </Tab>
<Tab title='IMAGE INFORMATION'>
   <ImagesC  id={data}/>
 </Tab>
</Tabs>
                    </div>
                </div>
            </div>
        </form>
    </div>
    <div className="modal-footer">
        <div className="col-sm-5 text-left pad0">
            <div className="text-left">
                Created <span>{Moment().format('DD/MM/YYYY')}</span> by
                <span className="footerUsercolor">
                    {/* {employee.Author.Title} */}
                    </span>
            </div>
            <div className="text-left">
                Last modified <span >{Moment().format('DD/MM/YYYY')}</span> by <span
                    className="footerUsercolor">
                        {/* {employee.Editor.Title} */}
                        </span>
            </div>
            <div className="text-left">
                <a className="hreflink" ng-click="removeItem(Item.Id)">
                    <img src="/_layouts/images/delete.gif"/> Delete this item
                </a>
            </div>
        </div>
        <div className="col-sm-7 pull-right">
            <a className="hreflink" target="_blank"
                href={`https://hhhhteams.sharepoint.com/sites/HHHH/HR//SitePages/EmployeeInfo.aspx?`}>
                    {/* employeeId=${}employee.Id */}
                Go to profile page
            </a>
            <span> | </span>
            <a href={`https://hhhhteams.sharepoint.com/sites/HHHH/Lists/Contacts/EditForm.aspx?`}
            // id=employee.Id
                target="_blank">
                Open
                out-of-the-box form
            </a>
            <button type="button" className="btn btn-primary" ng-click="SaveItem(Item)">Save</button>
            <button type="button" className="btn btn-default" onClick={setModalIsOpenToFalse1}>Cancel</button>
        </div>
    </div>
</div>
</div>
                                                 
</Modal>
                                                
                                                </>
    )
        //----------------------------------End-----------------------------------------------------------
     
    
}



