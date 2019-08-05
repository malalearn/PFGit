commomFunctions=require('..\\pageobjects\\common');
var projectdetail_objects = function(){
    var EC =protractor.ExpectedConditions;
    this.projectTitle=element(by.css("div[class*='title-inside']"));
    //-----Edit project
    this.editProjecticon=$('i[class="glyphicon edit-icon"]');
    this.editProjectcontainer=$('div[class="container newProject"]');
    this.editProjectname=$('div[class="form-group box projectName"] div[class="input-wrapper"] input');
    var editClientnamepar=element(by.cssContainingText('div[class="form-group box"]','Client Name'));
    this.editClientname=editClientnamepar.$('div[class="custom-input form-group"] input');
    var editSectordropdownpar=element(by.cssContainingText('div[class="form-group box"]','Sector'));
    this.editSectordropdown=editSectordropdownpar.$('select[class*="form-control"]');
    this.editsectordrp=$('select[class*="form-control"]');
    this.editSector=$('select[class="form-control ng-pristine ng-valid ng-touched"]');
    var editDealtypedropdownpar=element(by.cssContainingText('div[class="form-group box"]','Deal Type'));
    this.editDealtypedropdown=editDealtypedropdownpar.$('select[class*="form-control"]');
    var editProjecttypedropdownpar=element(by.cssContainingText('div[class="form-group box"]','Project Type'));
    this.editProjecttypedropdown=editProjecttypedropdownpar.$('select[class*="form-control"]');
    var editMDnamepar=element(by.cssContainingText('div[class="form-group box"]','MD Name'));
    this.editMDname=editMDnamepar.$('div[class="custom-input form-group"] input');
    var editDuedatepar=element(by.cssContainingText('div[class="row datepickerWrapper"]','Due Date'));
    this.calendar=element(by.className("icon-calendar-icon"));
    this.editDatepicker=$('div[class="datepicker"] span[class="dateText"]');
    this.editMonthpicker=$('button[class="btn btn-default btn-secondary btn-sm"] strong');
    this.editMonthpickere=$('button[class="btn btn-default btn-sm"] strong');
    this.selectMonth=$('button[class="btn btn-default"] span');
    this.editYearpicker=$('th button[class="btn btn-default btn-sm"] strong');
    this.selectyear=$('button[class="btn btn-default"] span');
    this.yearpickertable=$('div[class*="well well-sm"] yearpicker table tbody');
    this.yeartable=element(by.xpath('//div[@class="well well-sm bg-faded p-a card"]//yearpicker//table//tbody'));
    //this.yearpicktab=element(by.xpath(' //div[@class="well well-sm bg-faded p-a card"]//yearpicker//table//tbody'))
    this.yearallRows=this.yeartable.$$('tr');
    this.yearallcells=this.yeartable.$$('td span');
    this.monthtable=element(by.xpath('//div[@class="well well-sm bg-faded p-a card"]//monthpicker//table//tbody'));
    this.monthallcells=this.monthtable.$$('td button[class="btn btn-default"]');
    this.datetable=element(by.xpath('//div[@class="well well-sm bg-faded p-a card"]//daypicker//table//tbody'));
    this.alldates=this.datetable.$$('td button[class="btn btn-sm btn-default"]');
    //this.datepicker=$('datepicker[class="picker ng-untouched ng-valid ng-dirty"]');
    this.nextdate=element(by.css("button[class='btn btn-default btn-secondary btn-sm pull-right float-right']"));
    var editSecuritypar=$('div[class="row datepickerWrapper"]','Security');
    this.editSecurity=editSecuritypar.$('select[class*="form-control"]');
    this.date = element(by.className('dateText'));
    this.datefield = element.all(by.css("button[class='btn btn-sm btn-default']"));
    this.projectstatusdropdown=$("select[name='ProjectStatus']");
    this.saveChanges=$('button[class="btn btn-success buildProject"]');
    this.cancelbtn=element(by.buttonText("Cancel"));
    //-------
    //---------slideshow
    this.slideshow=$('div[class="tile asSlidesShow"]');
    this.presentationmode=$('div[class="presentation-fullscreen row "]');
    this.slideshowcontainer=$('div[class*="presentation-fullscreen-container"]');
    this.slideshowimage=$$('div[class="image"] img');
    this.allslides=$("div[class='selected-slide-wrapper'] img");
    this.slideimage=$("ps-image[class='ps-image'] img");
    this.loader=this.slideimage.$("div[class='loading']");
    this.movetonextslide=$('div[class="right-arrow arrow"]');
    this.slidepanelbutton=$('button[class="slides-panel-btn button"]');
    this.slidepanelheader=$('div[class="panel-header"]');
    this.slidepanelBacktoDashboard=element(by.buttonText('Back to dashboard'));
    this.slidepanelBacktoList=element(by.buttonText('Back to list view'));
    //-------
    //---------slide Action
    this.slideviewimage=$("div[class='selected-slide-wrapper'] img");
    this.commentIcon=$("div[class='icons'] i[class='icon-comments-icon']");
    this.commenttrayclose=$("div[class='slide-details-container'] i[class='icon-close-thin']");
    this.slideDetailsContainer=$("div[class='slide-details-container']");
            //-----comments
    this.commentsclose=$("div[class='comments-details-footer'] button[class='button close-btn']");        
    this.viewAddComments=element(by.buttonText("View / Add Comments"));
    this.commentsButtonsContainer=$('div[class="comments-buttons-container"]');
    this.drawcomment=element(by.cssContainingText('div[class="comments-buttons-container"] span',"Draw"));
    this.annotatecomment=element(by.cssContainingText('div[class="comments-buttons-container"] span',"Annotate"));
    this.drawcolorselect=$('div[class="lineWrapper"] select');
    this.drawselectcolorpink=$("option[class='pink']");
    this.drawarea=$("canvas[class='draw-panel']");
    this.adddrawcomment=$("textarea[placeholder='Post Comment']");
    this.annotationscontainer=$('div[class="annotations-container"]');
    this.slideAnnotationscontainer=$('div[class="annotations-boxes-wrapper"]');
    this.commentsPostbtn=element(by.buttonText('Post'));
    this.commentTextArea=$('textarea[placeholder="Post Comment"]');
    this.allComments=this.annotationscontainer.all(by.tagName("ps-comment-box"));
    //this.markasresolve=this.annotationscontainer.element(by.cssContainingText('div[class="resolve-section"] span',"Mark as Resolved"));
    //this.opencomments=element.all(by.xpath("//div[@class='annotations-container']//div[@class='comments-box']//span[contains(text(),'Mark as Resolved')]"));
    this.opencomments=element.all(by.xpath("//div[@class='annotations-container']//div[@class='comments-box']//span[contains(text(),'Mark as Resolved')]/parent::div[@class='resolve-section']//label"));
    //div[@class='annotations-container']//div[@class='comments-box']//label
    this.commentdelete=element(by.xpath("//div[@class='annotations-container']//div[@class='comments-box']//button[@class='delete-button'][contains(text(),'Delete')]"));
    this.opencommentsonslide=$$("ps-slide-annotation-box div[class='annotation-number big']");
    this.annotationnum=element(by.xpath("//div[@class='annotations-container']//div//div[@class='annotation-number']"));

    this.addremovefavorites=$$("div[class='layouts-section layouts-section-border'] button").get(1);
    //this.addToFavorites=element(by.buttonText("Add to Favorites"));
    //this.removeFromFavorites=element(by.buttonText("Remove from Favorites"));
    this.viewHistory=element(by.buttonText("View History"));
    this.viewHistorypopupactive=element(by.xpath("//div[@class='row']//div//ps-history-popup//div[@class='modal fade in']"));
    this.viewHistorypopuphidden=element(by.xpath("//div[@class='row']//div//ps-history-popup//div[@class='modal fade']"));
    this.viewHistoryslide=$('canvas[class="draw-panel"]');
    this.viewHistoryVersions=$$("ul[class='versions-list'] li");
    this.viewHistorySave=$("button[class='button save-btn']");
    this.viewHistoryCancel=$("button[class='button close-btn']");
    this.slideVersion=$("div[class='firstColumn slide-preview']");
    this.versionloader=$('div[class="image"] img').$("div[class='loading']");
    this.loaderbar=$('div[class="bar"]');
    //------
    this.expandarrow = element.all(by.css("accordion-group[class*='accordion accordion-draggable panel']")).get(0);
    this.expandsection1=element(by.css("i[class*='pull-left glyphicon section-header-arrow menu-right']"));
    this.expandsection=element(by.css('div[class="accordion-header"] i'));
    this.Slide = element.all(by.css("div[class='slide-image']")).get(0);
    var downloadiconparent= element(by.css("div[class='pull-right rightOptions']"));
    this.downloadicon=element(by.css("i[class='icon-download']"));
    this.downloadiconchild= this.Slide.element(this.downloadicon.locator());
    this.downloadiconslide=downloadiconparent.element(this.downloadicon.locator());
    this.downloadiconall=$$("div[class='pull-right rightOptions'] i[class='icon-download']");
    this.assigniconchild=this.Slide.element(by.css("i[class='icon-assign']"));
    this.researchbutton = element(by.className("btn-research"));
    this.downloadppt= $('.downloadPresentation');
    this.exportmodaldialoge=$('div[class="export-container"]');
    //this.exportmodalsection=$('div[class="col-sm-4 col-md-5 section"]');
    this.exportselectall=$('input[id="selectAll"]');
    this.exportdownload=$('button[class="btn btn-info btn-download"]');
    this.exportfilename=$('.filename');
    this.exportdownload2=element(by.buttonText('Download'));
    this.exportfinish=element(by.buttonText('Finish'));
    this.typefile1=element(by.css('input[type="file"]'));
    this.typefile=element(by.css('input[class="hidden"]'));
    this.uploadButton = element(by.className("btn-upload"));
    this.uploadpanel=$('.row upload-panel');
    this.sectionthreedots=$$('i[class="pull-right glyphicon glyphicon-option-horizontal show"]');
    this.sectionicons=$("div[class='icons-container']");
    this.sectiondownloadicon=this.sectionicons.element(this.downloadicon.locator());
    this.sectionlabel=$('div[class="panel-heading card-header"]').$('div[class="custom-input form-group"] label');
    this.sectionlabel1=$('div[class="custom-input form-group"] label');
    this.sectionall=$('div[class="panel-heading card-header"]');
    this.sectionAll=$$('div[class="panel-heading card-header"] div[class="accordion-header"]');
    this.exportSectionall=this.exportmodaldialoge.all(by.css('div[class*="section-filters-wrapper"]'));
    this.section=$('input[class*="input-checkbox"]');
    this.exportsectiontest=$$('div[class*="section-filters-wrapper"] input[class*="input-checkbox"]');
    this.addsection=$('div[class="section-add row"]');
    this.deletesection=$('div[class="pull-right"] i[class="icon-trash-second"]');
    this.assignedmemsection=$('span[class="assignedMembers"]');
    this.assignsection=$('div[class="pull-right"] i[class="icon-assign"]');
    this.assignproject=$('div[title="Assign members"]');
    this.assignmembers=element(by.tagName('ps-assign-members'));
    this.assignedmemcss=$('span[class="resultsWrapper"] div[class="rot-item selected"]');
    this.assignedmemslide=$('div[class="assignMemberToSlide"]');
    this.assignavatar=element(by.css('div[class="avatar"] img'));
    //this.outsourceicon=$('div[class="evalueserve-assignment-icon"]');
    this.unassignsection=$('div[class="unassign"]');
    //this.unassignmember=$('div[class="unassign-icon-wrapper"] img');
    this.unassignslide=$('div[class="unassign-icon-container"]');
    this.allavailablemembers=element.all(by.css('span[class="resultsWrapper"]'));
    this.membername=element(by.css('div[class="credentials"] div[class="name"]'));
    this.assignconfirmdialog=element(by.cssContainingText('div[class="modal-body"]',"Assign all slides in this section to Pitchflow?"));
    this.assignprojconfirmdialog=element(by.cssContainingText('div[class="modal-body"]',"Assign all slides in this project to Pitchflow?"));
    this.unassignconfirmdialog=element(by.cssContainingText('div[class="modal-content"]',"Delete all assignments in this section?"));
    this.unassignprojconfirmdialog=element(by.cssContainingText('div[class="modal-content"]',"Delete all assignments in this project?"));
    this.assignconfirmYes=element(by.buttonText("Yes"));
    this.assigndialogclose=element(by.buttonText("Close"));
    this.delsecmodal=element(by.cssContainingText("div[class='modal-body']","Are you sure you want to trash the section?"));
    this.deletesecmodalOK=element(by.buttonText("OK"));
    this.deletesecmodalCancel=element(by.buttonText("Cancel"));
    this.toastsuccess=element(by.css('div[class="toast toast-success"]'));
    this.toastcontainer=element(by.css('div[id="toast-container"]'));
    this.toastclose=element(by.css('div[class="toast-close-button"]'));
    this.viewasSlide=$('div[class="row accordionTabs"]').$('div[class="col-md-12"]');
    this.viewasList=$('div[class="row accordionTabs"]').$('div[class="col-xs-4 col-sm-4 col-md-4 col-lg-3"]');
    this.viewasSlideicon=$('div[class="tile asSlides"] a','View as slides');
    this.viewasListicon=$('div[class="tile asList"] a','View as a list');
   
    this.openAll=element(by.cssContainingText("div[class='tile']","Open ALL"));
    this.collapseAll=element(by.cssContainingText("div[class='tile']","Collapse ALL"));
    this.expandedsections=$$('div[class="accordions project-presentation"] div[class="panel-collapse collapse in show"]');
    this.collapsedsections=$$('div[class="accordions project-presentation"] div[class="panel-collapse collapse"]');
    //--------extra
    this.exportallSection=$('div[class="col-sm-4 col-md-5 section"]').$('div[class*="section-filters-wrapper"] label');
    this.exportSectionall1=element.all(by.css('div[class*="section-filters-wrapper"]'));
    this.section1=$('label[class="checkbox-label"]');
    this.sectiontext=$('input[class*="input-checkbox"] label');
    this.checkbox=element(by.cssContainingText("label[class*='checkbox-label']","Empty"));
    this.editprojectdetails=new Object();
    this.updatedprojectdetails=new Object();
    
    this.isChecked = async function(element) {
        return element.isSelected().then(function(checked) {
             return checked;
        });
      } 

    this.getCheckedsectioninExport = async function(){
        await this.exportSectionall.reduce(function(result,elem,inx){
            return elem.element(section.locator()).isSelected().then(function(value){
              //console.log("value 1 " + value);
              if(value == true)
              return inx;
                });
           },-1).then(function(ind){
               //console.log("Ind 1: "+ ind);
               return this.exportSectionall.get(ind).getText();
                });
       } 

       this.selectDueDate=async function(selecteddate){
        var today=new Date();
        var currentselecteddate=new Date(selecteddate);
        var cyyyy=currentselecteddate.getFullYear();
        var cmm=currentselecteddate.getMonth();
        var cdd=currentselecteddate.getDate();
        var dd =String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        await browser.wait(EC.elementToBeClickable(this.editDatepicker),5000);
        //this.calendar.click();
        await this.editDatepicker.click();
        //browser.sleep(3000);
        await browser.wait(EC.visibilityOf(this.editMonthpicker),4000);
        if(cyyyy>yyyy){
            //break;
            /*await browser.wait(EC.visibilityOf(this.datetable),4000);
            this.alldates.filter(function(value){
                return value!=cdd;
            }).first().click(); */
        }
        else if(cyyyy==yyyy){
            if(cmm>=mm){
                //break;
                //console.log("in if:");
               /* await browser.wait(EC.visibilityOf(this.datetable),4000);
                this.alldates.filter(function(value){
                    return value!=cdd;
                }).first().click();*/  
            }
            else{
                //console.log("in else:");
                await browser.wait(EC.elementToBeClickable(this.editMonthpicker),4000);
                await this.editMonthpicker.click();
                await browser.wait(EC.visibilityOf(this.monthtable),4000);
                await this.monthallcells.get(0).click();
                /*await browser.wait(EC.visibilityOf(this.datetable),4000);
                //this.alldates.get(0).click();
                this.alldates.filter(function(value){
                    return value!=cdd;
                }).first().click();*/
            }
        }
        else{
            await this.editMonthpicker.click();
            await browser.wait(EC.elementToBeClickable(this.editYearpicker),4000);
            await this.editYearpicker.click();
            await browser.wait(EC.visibilityOf(this.yeartable),4000);
            //select current year
            await this.yearallcells.filter(async function(elem){
                return elem.getText().then(async function(value){
                  //console.log(" year: "+ value);
                  //await browser.wait(EC.refreshed(EC.visibilityOf(this.yearallcells)),4000);
                  return value==yyyy;
              });
             }).click();
                        
           await browser.wait(EC.visibilityOf(this.monthtable),4000);
           await this.monthallcells.get(0).click(); //Clicking first active month
           /*await browser.wait(EC.visibilityOf(this.datetable),4000);
           this.alldates.filter(function(value){
            return value!=cdd;
            }).first().click();*/
        }
        
        //-------selecting date
        await browser.wait(EC.visibilityOf(this.datetable),4000);
        await this.alldates.filter(function(value){
            return value!=cdd;
        }).first().click(); 

        /*
        this.editMonthpicker.click();
        browser.sleep(2000);
        let selectedyr;
        await browser.wait(EC.presenceOf(this.editYearpicker),4000);
        selectedyr = await this.editYearpicker.getText();
        
            console.log("selected year in: "+selectedyr);
        
        
            if(selectedyr < yyyy){
                console.log("selected year in: "+ selectedyr);
                
                //await browser.wait(EC.visibilityOf(this.editYearpicker),4000);
                this.editYearpicker.click();
                await browser.wait(EC.visibilityOf(this.yeartable),4000);
                //select current year
               await this.yearallcells.filter(async function(elem){
                      return elem.getText().then(async function(value){
                        console.log(" year: "+ value);
                        //await browser.wait(EC.refreshed(EC.visibilityOf(this.yearallcells)),4000);
                        return value==yyyy;
                    });
                }).click();
                              
                 await browser.wait(EC.visibilityOf(this.monthtable),4000);
                 this.monthallcells.get(0).click(); //Clicking first active month
                 await browser.wait(EC.visibilityOf(this.datetable),4000);
                 this.alldates.get(0).click();
                
              }*/
            
        
        //console.log("selected year out: "+ selectedyr);
        
       }
       

       this.getdatecount = async function(elem){
         return elem.count();
       }

       this.selectnextavailabledate=async function(){
        await this.calendar.click();
        let count;
        await this.alldates.count().then(function(value){
            count=value;
            if(count==0){
                this.nextdate.click();
                this.getdatecount();
            }
        });
        
        
       }
    
    this.editProjectdetails=async function(projectname,clientname,MDname){

        this.editprojectdetails.projectname=await commomFunctions.getrandomstring(projectname,4);
        this.editProjectname.clear();
        this.editProjectname.sendKeys(this.editprojectdetails.projectname);
        this.editprojectdetails.clientname=await commomFunctions.getrandomstring(clientname,4);
        this.editClientname.clear();
        this.editClientname.sendKeys(this.editprojectdetails.clientname);
        this.editprojectdetails.MDname=await commomFunctions.getrandomstring(MDname,4);
        this.editMDname.clear();
        this.editMDname.sendKeys(this.editprojectdetails.MDname);
        let sector = await commomFunctions.getunselecteddropdownvalue(this.editSectordropdown);//edit random sector
        this.editprojectdetails.sector=await sector.getText();//storing in object
        await sector.click(); 
    
        let dealType = await commomFunctions.getunselecteddropdownvalue(this.editDealtypedropdown);//edit random sector
        this.editprojectdetails.dealType=await dealType.getText();//storing in object
        await dealType.click();

        let securitytxt = await commomFunctions.getunselecteddropdownvalue(this.editSecurity);//edit random sector
        this.editprojectdetails.security=await securitytxt.getText();//storing in object
        await securitytxt.click();
        /*await this.editDatepicker.getText().then(async function(value){
            //console.log("Date value selected: " + value);
            await this.selectDueDate(value);
             //await browser.sleep(2000);
           });*/
        this.editprojectdetails.projectType=await this.editProjecttypedropdown.$('option:checked').getText(); //projecttype has only one option hence skipped
        await this.selectDueDate(await this.editDatepicker.getText());  
        this.editprojectdetails.duedate= await this.editDatepicker.getText();
        await browser.wait(EC.elementToBeClickable(this.saveChanges),5000);
        var selectedprojectstatus=await this.projectstatusdropdown.$('option:checked').getText();
        //console.log("selected dropdown:"+selectedprojectstatus );
        await this.projectstatusdropdown.click();
        var optionfilter=await this.projectstatusdropdown.$$("option[value]").filter(function(option){
            return option.getText().then(function(value){
                //console.log("option text: "+ value);
                if(value !== selectedprojectstatus && value !== "Archived" ){
                    return option
                }
            });
        }).first();
        this.editprojectdetails.projectstatus=await optionfilter.getText();
        await optionfilter.click();
        await this.saveChanges.click();
        await browser.wait(EC.visibilityOf(this.editProjecticon),6000);
        }
    this.readProjectdetails=async function(){
        await browser.wait(EC.visibilityOf(this.editProjectcontainer),6000);
        await browser.wait(EC.visibilityOf(this.editProjectname),6000);
        this.updatedprojectdetails.projectname=await this.editProjectname.getAttribute("value"); 
        this.updatedprojectdetails.clientname=await this.editClientname.getAttribute("value");
        this.updatedprojectdetails.sector= await this.editSectordropdown.$('option:checked').getText();
        this.updatedprojectdetails.dealType=await this.editDealtypedropdown.$('option:checked').getText();
        this.updatedprojectdetails.projectType=await this.editProjecttypedropdown.$('option:checked').getText();
        this.updatedprojectdetails.security=await this.editSecurity.$('option:checked').getText();
        this.updatedprojectdetails.projectstatus=await this.projectstatusdropdown.$('option:checked').getText();
        this.updatedprojectdetails.duedate=await this.editDatepicker.getText();
        this.updatedprojectdetails.MDname=await this.editMDname.getAttribute("value");
        this.cancelbtn.click();
    }
    this.addcommentonslide=async function(){
         // console.log("in add ");     
       // await browser.wait(EC.visibilityOf(this.slideAnnotationscontainer),5000); 
       var xoffset=await commomFunctions.getRandomNum(100,300);
                //console.log("x coordinate:"+xoffset);
       var yoffset=await commomFunctions.getRandomNum(100,200);
               //console.log("y coordinate:"+yoffset);     
        await browser.actions().mouseMove(this.slideAnnotationscontainer,{x :xoffset,y :yoffset})
                .click().perform();
        await browser.wait(EC.visibilityOf(this.commentTextArea),5000);
        this.commentTextArea.sendKeys("Added comment for testing");
        await browser.wait(EC.visibilityOf(this.commentsPostbtn),5000);
        this.commentsPostbtn.click().then(async function(){
            
           await browser.sleep(8000); 
        });
      }
      this.drawnewcommentonslide=async function(xoffset,yoffset){
        await browser.actions()
                .dragAndDrop(this.drawarea,{x:xoffset,y:yoffset})
                .perform(); 
        await browser.wait(EC.elementToBeClickable(this.adddrawcomment),5000);
        await this.adddrawcomment.sendKeys("Drew new comment");
        await this.commentsPostbtn.click();   
        await browser.sleep(6000);     
      }

    }
module.exports=new projectdetail_objects();