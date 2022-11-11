import * as React from 'react';
import '../Tabs/styles.css';
export default function Dummy(){
    const [imgdata, setimgdata] = React.useState([]);
    React.useEffect(()=>{
           
        var url = `https://hhhhteams.sharepoint.com/sites/HHHH/_api/lists/getbyid('655B3B68-88EC-4F7F-9767-49C18EEDE5D5')/items?$select=Id,Title,Created,FileLeafRef,EncodedAbsUrl,FileDirRef,Modified,Author/Title,Editor/Title&$expand=Author,Editor&$top=4999&$filter=FSObjType%20eq%200&$orderby=Created%20desc`;
        var response: any = [];  // this variable is used for storing list items
        function GetImageItems() {
            $.ajax({
                url: url,
                method: "GET",
                headers: {
                    "Accept": "application/json; odata=verbose"
                },
                success: function (imgdata) {
                    response = response.concat(imgdata.d.results);
                    if (imgdata.d.__next) {
                        url = imgdata.d.__next;
                        GetImageItems();
                    } else setimgdata(response);
                    console.log(response);
                },
                error: function (error) {
                    console.log(error);
                    // error handler code goes here
                }
            });
        }
        GetImageItems();
    },
        []);
      
        
        function handleChange(e:any) {
            let itemName = e.target.name;
            let checked = e.target.checked;
            this.setState((prevState: { list: any; allChecked: any; }) => {
              let { list, allChecked } = prevState;
              if (itemName === "checkAll") {
                allChecked = checked;
                list = list.map((item: any) => ({ ...item, isChecked: checked }));
              } else {
                list = list.map((item: { name: any; }) =>
                  item.name === itemName ? { ...item, isChecked: checked } : item
                );
                allChecked = list.every((item: { isChecked: any; }) => item.isChecked);
              }
              return { list, allChecked };
            });
          };


          
    return(
   

<div>
 
 
        
        <div ng-show="existingcover && Images !=null && Images != undefined && Images.length>0">
        <div>
            <div className="panel-body">
                <div className="gallery"
                     id="coverImages"
                     ng-show="selectedImageType == 'cover'">
                    <ul className="imageinfo-gallery">
                        <li ng-repeat="img in Images | filter:searchImage">
                            <a className="hreflink preview"
                               rel="{{img.EncodedAbsUrl}}"
                               id="coverImages"
                               title="{{img.FileLeafRef}}">
                                <img ng-if="img.FileDirRef.indexOf('Covers/Default') == -1 && img.FileLeafRef != 'cover.png'"
                                     id="{{img.Id}}_cover"
                                     ng-src="{{img.EncodedAbsUrl}}?RenditionID=9"
                                     ng-click="selectImage(img)"
                                     className="coverimage"/>
                            </a>
                            <div className="img-bottom ">
                                <img className="pull-right setting-icon"
                                     ng-src="https://hhhhteams.sharepoint.com/sites/HHHH/SiteCollectionImages/ICONS/32/settings.png"
                                     ng-click="Replaceselectedimage(img);" />
                            </div>
                        </li>
                    </ul>
                    <div className="clearfix"></div>
                    <div className="text-center mt-3">
                        <button ng-show="imgLoadMore"
                                ng-click="LoadRestImages();"
                                className="btn btn-primary">
                            Load
                            More...
                        </button>
                    </div>
                    
                </div>

                <div className="gallery" id="logoImages"
                   
                     ng-show="selectedImageType == 'logo'">
                    <ul className="imageinfo-gallery">
                        <li ng-repeat="img in Images | filter:searchImage"
                            className="logos-list">
                            <a className="hreflink preview"
                               rel="{{img.FileLeafRef}}"
                               title="{{img.EncodedAbsUrl}}"
                               id="logoImages">
                                <img title="{{img.EncodedAbsUrl}}"
                                     id="{{img.Id}}_image"
                                     ng-src="{{img.EncodedAbsUrl}}?RenditionID=9"
                                     ng-click="selectImage(img)"
                                     className="logo-imgg" />
                            </a>
                        </li>
                    </ul>
                </div>

                <div id="pageImages"
                     ng-show="selectedImageType == 'image'">
                    <ul className="imageinfo-gallery">
                        <li ng-repeat="img in Images | filter:searchImage"
                            className="images-list">
                            <a className="hreflink preview"
                               rel="{{img.FileLeafRef}}"
                               title="{{img.EncodedAbsUrl}}"
                               id="pageImages">
                                <img id="{{img.Id}}_pageimage"
                                     ng-src="{{img.EncodedAbsUrl}}?RenditionID=9"
                                     ng-click="selectImage(img)"
                                     className="coverimage"/>
                            </a>
                            <div className="img-bottom ">
                                <img className="pull-right setting-icon"
                                     ng-src="{{baseUrl}}/SiteCollectionImages/ICONS/32/settings.png"
                                     ng-click="Replaceselectedimage(img);" />
                            </div>
                        </li>
                    </ul>
                    <div className="clearfix"></div>
                    <div className="text-center mt-3">
                        <button ng-show="imgLoadMore"
                                ng-click="LoadRestImages();"
                                className="btn btn-primary">
                            Load
                            More...
                        </button>
                    </div>
                   
                </div>

                <div id="potraitImages"
                     ng-show="selectedImageType == 'portrait'">
                    <ul className="imageinfo-gallery">
                        <li ng-repeat="img in Images | filter:searchImage">
                            <a className="hreflink preview"
                               rel="{{img.FileLeafRef}}"
                               
                               title="{{img.EncodedAbsUrl}}">
                                <img id="{{img.Id}}_potraitImage"
                                     ng-src="{{img.EncodedAbsUrl}}?RenditionID=9"
                                     ng-click="selectImage(img)"
                                     className="coverimage" />
                            </a>
                            <div className="img-bottom ">
                                <img className="pull-right setting-icon"
                                     ng-src="{{baseUrl}}/SiteCollectionImages/ICONS/32/settings.png"
                                     ng-click="Replaceselectedimage(img);" />
                            </div>
                        </li>
                    </ul>
                    <div className="clearfix"></div>
                    <div className="text-center mt-3">
                        <button ng-show="imgLoadMore"
                                ng-click="LoadRestImages();"
                                className="btn btn-primary">
                            Load
                            More...
                        </button>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    </div>
     
    )
}


