var t_data = require('..\\test_data\\testdata.json');
var login_page = require('..\\pageobjects\\loginOut_PO');
var myactivetabobject = require('..\\pageobjects\\activetab_PO');
var myprojectdetailobject = require('..\\pageobjects\\projectdetail_PO');
var mylandingpageobject = require('..\\pageobjects\\landing_PO');
var commomFunctions=require('..\\pageobjects\\common');
/*/*********Scenarios covered
1. Expand all sections
2. Collapse all sections
3. View as slides
4. Download presentation
5. Assign all slides in project to member
6. Unassign member from all slides of project
7. Downloading slide from section
8. Assign member to slide
9. UnAssign member to slide
10. Add Slide to Favorites
11. Slide-View History
12. Slide View History-Save
13. Slide View History-Cancel
14. Download slide from slide view 
15. View as List
16. Add comment as annotation
17. Markopen comment as Resolved
18. Download section without expanding 
19 .Download section by expanding
20. Add new section
21. Delete section
22. Assign member to section
23. Unassign member to section 

*/
describe('Verify actions on Project',function(){
    var glob = require("glob");
    var beforefilearray = glob.sync("./e2e/downloads/"+"*.pptx");
    let filecountbefore,filecountafter,index2;
    let selectedsection,sectionlbel;
    var EC =protractor.ExpectedConditions;


    beforeAll(async function(){
        
        //await browser.restart();
        //await browser.restartSync();
        await browser.waitForAngularEnabled(false);
        await login_page.get(t_data.loginurl);
        await browser.driver.manage().window().maximize().then(async function()
        {
        await browser.wait(EC.visibilityOf(await login_page.submitbtn),6000);
        await login_page.enterUname(t_data.username);
        await login_page.enterPassword(t_data.password);
        await login_page.clickSignIn(); 
        //await browser.wait(EC.visibilityOf(login_page.loggedinuser),8000);
        
        });
         //await browser.wait(EC.visibilityOf(myactivetabobject.projtitleall),8000);
        await browser.wait(EC.visibilityOf(mylandingpageobject.modalIwantto),8000);
        await browser.wait(EC.elementToBeClickable(mylandingpageobject.IwanttoManageProjects),8000);
        await mylandingpageobject.IwanttoManageProjects.click();
        //await mylandingpageobject.IwanttosearchKB.click();
        browser.sleep(2000);
        //await mylandingpageobject.activetab.click();
        await browser.wait(EC.visibilityOf(myactivetabobject.projcontainer),8000);
        browser.sleep(2000);
        await myactivetabobject.goToProject(t_data.actiononproject.projectname);         
        await browser.wait(EC.visibilityOf(await myprojectdetailobject.projectTitle),8000);
        console.log("Navigated to project");
        //done();
       });

      afterAll(async function(){
        console.log("Logging out from application")
        //browser.waitForAngularEnabled(false);
        await login_page.clicklogout();
        await browser.wait(EC.visibilityOf(login_page.submitbtn),8000);
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
       });

       it('Edit project details',async function(){
        //await browser.wait(EC.visibilityOf(await myactivetabobject.projcontainer),8000);
        //await myactivetabobject.goToProject(t_data.editprojectdata.projectname);         
        //await browser.wait(EC.visibilityOf(await myprojectdetailobject.projectTitle),8000);
        //console.log("Navigated to project");
        await myprojectdetailobject.editProjecticon.click();
        await browser.wait(EC.visibilityOf(myprojectdetailobject.editProjectcontainer),6000);
        await browser.wait(EC.visibilityOf(myprojectdetailobject.editProjectname),6000);
        //console.log("Project name:"+t_data.actiononproject.projectname);
        await myprojectdetailobject.editProjectdetails(t_data.actiononproject.projectname,t_data.editprojectdata.clientname,t_data.editprojectdata.MDname);
        //----------read values from Edit project
        //await myactivetabobject.goToProject(myprojectdetailobject.editprojectdetails.projectname);
        await myprojectdetailobject.editProjecticon.click();
        await browser.wait(EC.visibilityOf(myprojectdetailobject.editProjectcontainer),6000);
        await browser.wait(EC.visibilityOf(myprojectdetailobject.editProjectname),6000);
        await myprojectdetailobject.readProjectdetails();
        /*console.log("projectname"+ myprojectdetailobject.updatedprojectdetails.projectname);
        console.log("clientname"+ myprojectdetailobject.updatedprojectdetails.clientname);
        console.log("sector"+ myprojectdetailobject.updatedprojectdetails.sector);
        console.log("dealType"+ myprojectdetailobject.updatedprojectdetails.dealType);
        console.log("security"+ myprojectdetailobject.updatedprojectdetails.security);
        console.log("duedate"+ myprojectdetailobject.updatedprojectdetails.duedate);
        console.log("MDname"+ myprojectdetailobject.updatedprojectdetails.MDname);
        //----------------------------------------------------
        console.log("beforeprojectname"+ myprojectdetailobject.editprojectdetails.projectname);
        console.log("beforeclientname"+ myprojectdetailobject.editprojectdetails.clientname);
        console.log("beforesector"+ myprojectdetailobject.editprojectdetails.sector);
        console.log("beforedealType"+ myprojectdetailobject.editprojectdetails.dealType);
        console.log("beforesecurity"+ myprojectdetailobject.editprojectdetails.security);
        console.log("beforeduedate"+ myprojectdetailobject.editprojectdetails.duedate);
        console.log("beforeMDname"+ myprojectdetailobject.editprojectdetails.MDname);*/
        expect(myprojectdetailobject.editprojectdetails.projectname==myprojectdetailobject.updatedprojectdetails.projectname
        && myprojectdetailobject.editprojectdetails.clientname == myprojectdetailobject.updatedprojectdetails.clientname
        && myprojectdetailobject.editprojectdetails.MDname == myprojectdetailobject.updatedprojectdetails.MDname
        && myprojectdetailobject.editprojectdetails.sector == myprojectdetailobject.updatedprojectdetails.sector
        && myprojectdetailobject.editprojectdetails.dealType ==  myprojectdetailobject.updatedprojectdetails.dealType
        && myprojectdetailobject.editprojectdetails.projectType == myprojectdetailobject.updatedprojectdetails.projectType    
        && myprojectdetailobject.editprojectdetails.duedate == myprojectdetailobject.updatedprojectdetails.duedate
        && myprojectdetailobject.editprojectdetails.security == myprojectdetailobject.updatedprojectdetails.security
        && myprojectdetailobject.editprojectdetails.projectstatus == myprojectdetailobject.updatedprojectdetails.projectstatus).toBe(true);
        });

       it('Expand all sections',async function(){
        var expandedsectioncount;
        await browser.wait(EC.visibilityOf(await myprojectdetailobject.openAll),5000);
        await myprojectdetailobject.openAll.click().then(async function(){
            //console.log("clicked open");
            browser.sleep(3000);
        //check all sections are expanded .prop1:class,prop2: aria-expanded=true,aria-hidden=false
         
        expandedsectioncount = await myprojectdetailobject.expandedsections.count();
        //console.log("Expanded sections count" + expandedsectioncount);
        });
        var sectioncount= await myprojectdetailobject.sectionAll.count();
        //console.log("Sections count" + sectioncount);
        //console.log("Exit expand all");
        browser.sleep(3000);
        expect(await myprojectdetailobject.collapseAll.isDisplayed()).toBe(true);
        expect(sectioncount).toEqual(expandedsectioncount);
       });

      it('Collapse all sections',async function(){
        var collapsedsectioncount,displayed;
        //console.log("In collapse");
        /*await myprojectdetailobject.collapseAll.getText().then(function(text){
            console.log("text :"+text);
        })*/
        await myprojectdetailobject.openAll.isPresent().then(async function(result){
            displayed=result;
            //console.log("openall displayed:"+ result);
        });

            if(!displayed){
                //console.log("i am in if");
                await myprojectdetailobject.collapseAll.click();
                browser.sleep(3000);
                
                await browser.wait(EC.visibilityOf(myprojectdetailobject.openAll),5000);
                collapsedsectioncount = await myprojectdetailobject.collapsedsections.count();
            }else
            {   
                 //console.log("i am in else");
                await browser.wait(EC.visibilityOf(myprojectdetailobject.openAll),5000);
                //console.log("clicked open again");
                await myprojectdetailobject.openAll.click().then(async function(){
                browser.sleep(3000);
                await browser.wait(EC.presenceOf(myprojectdetailobject.expandedsections),4000);
                await myprojectdetailobject.collapseAll.click();
                
                  });
                browser.sleep(3000);
                         
                collapsedsectioncount = await myprojectdetailobject.collapsedsections.count();
                //console.log("Collpased sections count" + collapsedsectioncount);
            }
        
        var sectioncount= await myprojectdetailobject.sectionAll.count();
        //console.log("Sections count" + sectioncount);
       
        expect(await myprojectdetailobject.openAll.isDisplayed()).toBe(true);
        expect(sectioncount).toEqual(collapsedsectioncount);
    });
    it('View as List',async function(){
        await myprojectdetailobject.viewasListicon.isPresent().then(async function(result){
            if(result) {
                await myprojectdetailobject.viewasListicon.click();
                browser.sleep(3000);
                await browser.wait(EC.visibilityOf(await myprojectdetailobject.viewasSlideicon),3000);
                await browser.wait(EC.visibilityOf(await myprojectdetailobject.viewasSlide),3000);
                               
            }
            else {
                //await myprojectdetailobject.viewasSlideicon.click();  
                //browser.sleep(3000);
               // await browser.wait(EC.visibilityOf(myprojectdetailobject.viewasList),3000);
                //await myprojectdetailobject.viewasListicon.click();  
                //browser.sleep(3000);
                await browser.wait(EC.visibilityOf(await myprojectdetailobject.viewasSlide),3000);
            }
        });
        expect(myprojectdetailobject.viewasSlideicon.isDisplayed()
            && myprojectdetailobject.viewasSlide.isDisplayed()).toBe(true);
        //expect(myprojectdetailobject.viewasSlide.isDisplayed()).toBe(true);
    });
    //*******************Download presentation
    it('Download presentation',async function(){
        //---------count before 
        // var beforefilearray = glob.sync("./e2e/downloads/"+"*.pptx");
            filecountbefore=beforefilearray.length;
            // console.log("Counts of files before",beforefilearray.length);
             
         //------------
      await myprojectdetailobject.downloadppt.click(); 
      await browser.wait(EC.visibilityOf(await myprojectdetailobject.exportmodaldialoge),8000);
 
      expect(await myprojectdetailobject.isChecked(myprojectdetailobject.exportselectall)).toBe(true);
      await myprojectdetailobject.exportdownload.click();
      await browser.wait(EC.visibilityOf(await myprojectdetailobject.exportfilename),38000);
      await myprojectdetailobject.exportdownload2.click();
      await browser.sleep(56000);
      await myprojectdetailobject.exportfinish.click();
      browser.sleep(5000);
      expect(await myprojectdetailobject.exportmodaldialoge.isPresent()).toBe(false);
         await browser.driver.wait(function(){
             var filearray = glob.sync("./e2e/downloads/"+"*.pptx");
             
             if(typeof filearray !== 'undefined' && filearray.length > filecountbefore){
                 return filearray;
             }
         },160000).then(function(filearray){
             filecountafter = filearray.length;
             //console.log("count after in: "+ filecountafter);
             
         }).then(function(){
            // console.log("count after: "+ filecountafter);
            expect(filecountafter).toBeGreaterThan(filecountbefore);
         });
         
     });

     it('Download section without expanding downloads section in ppt format',async function(){
        
        //---------count before 
        filecountbefore=beforefilearray.length;
        //console.log("Counts of files for section before",beforefilearray.length);
        //await myprojectdetailobject.sectionlabel.getText().then(function(text){
           // sectionlbel = text;
          //  console.log(sectionlbel);
       // });
       //-----Click on action three dots
       
           // browser.wait(EC.visibilityOf(await myprojectdetailobject.exportdownload),8000);
            //browser.sleep(500);
            
         //browser.wait(EC.visibilityOf(await myprojectdetailobject.exportmodaldialoge),8000);
        //selectedsection = myprojectdetailobject.getCheckedsectioninExport();
        //-----Click on action three dots
        await myprojectdetailobject.sectionthreedots.get(0).click().then(async function(){
        await browser.wait(EC.elementToBeClickable(await myprojectdetailobject.sectiondownloadicon),5000);
        sectionlbel = await myprojectdetailobject.sectionlabel.getText();
        //console.log(sectionlbel);
        await myprojectdetailobject.sectiondownloadicon.click();
        await browser.wait(EC.visibilityOf(await myprojectdetailobject.exportmodaldialoge),8000);
        });
        await browser.wait(EC.elementToBeClickable(await myprojectdetailobject.exportdownload),8000);
        
        //-----------------------filter selected section and verify
         /*var titles=myprojectdetailobject.exportSectionall.map(function(elem){
            return elem.getText();

        });
        titles.then(function(text){
            console.log("length of array"+ text.length);
            for(var i = 0; i< text.length;i++){
            console.log("i element"+ text[i]);
            }
            console.log(text);
        });*/

        await myprojectdetailobject.exportSectionall.reduce(function(result,elem,inx){
            return elem.element(myprojectdetailobject.section.locator()).isSelected().then(function(value){
              //console.log("value 1 " + value);
             // console.log("Ind 2: "+ inx);
              if(value == true)
              index2=inx;
              return index2;
                });
           },-1).then(async function(ind){
               //console.log("Ind 1: "+ ind);
               await myprojectdetailobject.exportSectionall.get(ind).getText().then(function(text){
               //console.log("text 1:" + text);
               selectedsection=text;
               });
               }).then(function(){
                   //console.log("selected :" + selectedsection);
                    expect(selectedsection).toEqual(sectionlbel);
                   });      
         
        await myprojectdetailobject.exportdownload.click();
        await browser.wait(EC.visibilityOf(await myprojectdetailobject.exportfilename),8000);
        await myprojectdetailobject.exportdownload2.click();
        browser.sleep(59000);
        await myprojectdetailobject.exportfinish.click();
        browser.sleep(5000);
        expect(await myprojectdetailobject.exportmodaldialoge.isPresent()).toBeFalsy();
        await browser.driver.wait(function(){
        var filearray = glob.sync("./e2e/downloads/"+"*.pptx");
        
        if(typeof filearray !== 'undefined' && filearray.length > 0){
            return filearray;
            }
        },49000).then(function(filearray){
            filecountafter = filearray.length;
            //console.log("count after in: "+ filecountafter);
            }).then(function(){
                //console.log("count after: "+ filecountafter);
                expect(filecountafter).toBeGreaterThan(filecountbefore);
        });
        
        browser.sleep(8000);  
       
    })
    it('Add new section in project',async function(){
        await browser.wait(EC.visibilityOf(await myprojectdetailobject.addsection),8000);
         await myprojectdetailobject.sectionAll.count().then(function(value){
            //console.log(value);
            countbefore = value;
            //console.log("countbefore in:" + countbefore);
        });
        await myprojectdetailobject.addsection.click().then(async function(){
            await browser.wait(EC.visibilityOf(await myprojectdetailobject.toastsuccess,8000)).then(async function(){
               // myprojectdetailobject.toastclose.click();
               await browser.wait(EC.invisibilityOf(await myprojectdetailobject.toastsuccess,8000))
               await myprojectdetailobject.sectionAll.count().then(function(value){
                countafter = value;
                //console.log("countbefore in:" + countbefore);
                //console.log("countafter" + countafter)
            }).then(function(){
                expect(countafter).toBeGreaterThan(countbefore);
            });
            });
        });
               
        browser.sleep(2000);
        
    })
    it('Delete section in project',async function(){
        //console.log("Specs started");
       // browser.waitForAngular();
        await browser.wait(EC.elementToBeClickable(await myprojectdetailobject.addsection),8000);
        browser.sleep(2000);
        await myprojectdetailobject.sectionAll.count().then(function(value){
           // console.log(value);
            countbefore = value;
            //console.log("countbefore in:" + countbefore);
        });
        
       let last = await myprojectdetailobject.sectionAll.last();
       last.element(myprojectdetailobject.expandsection.locator()).click();
       await myprojectdetailobject.deletesection.click();
       await browser.wait(EC.visibilityOf(await myprojectdetailobject.deletesection),8000);
       await browser.executeScript("arguments[0].click();",myprojectdetailobject.deletesection).then(async function(){
       await browser.wait(EC.visibilityOf(await myprojectdetailobject.delsecmodal),8000);
       await myprojectdetailobject.delsecmodal.element(myprojectdetailobject.deletesecmodalOK.locator()).click()
      });
      
        /* 
        await myprojectdetailobject.delsecmodal.getText().then(function(confirmtext){
            console.log("confirmtext:"+ confirmtext);
        });
        
        myprojectdetailobject.delsecmodal.element(myprojectdetailobject.deletesecmodalOK.locator()).getText().then(function(value){
            console.log("button text" + value);
        })*/
        
        await browser.wait(EC.visibilityOf(myprojectdetailobject.toastsuccess),8000).then(async function(){
            //await myprojectdetailobject.toastclose.click();
            browser.sleep(2000);          
                await myprojectdetailobject.sectionAll.count().then(function(value){
                    countafter = value;
                    console.log("countafter" + countafter)
                }).then(function(){
                    expect(countafter).toBeLessThan(countbefore);
                });
                //await browser.wait(EC.not(EC.visibilityOf(myprojectdetailobject.toastsuccess)),8000);
        });
        //browser.wait(EC.not(EC.visibilityOf(myprojectdetailobject.delsecmodal.element(myprojectdetailobject.deletesecmodalOK.locator()))),8000)
              
        //await browser.wait(EC.not(EC.visibilityOf(myprojectdetailobject.toastcontainer)),18000);
              
       //browser.executeScript("arguments[0].click();",myprojectdetailobject.toastclose);
       //await myprojectdetailobject.toastclose.click();
       
        browser.sleep(3000);
                            
    })
    it('Assign Member to section',async function(){
        await browser.wait(EC.elementToBeClickable(await myprojectdetailobject.sectionthreedots.get(0)),5000);
        await myprojectdetailobject.sectionthreedots.get(0).click();
        await myprojectdetailobject.assignsection.click().then(async function(){
            //browser.wait(EC.visibilityOf(myprojectdetailobject.assignmembers),3000);
            await browser.wait(EC.visibilityOf(await myprojectdetailobject.assignavatar),3000);
        });
        await myprojectdetailobject.allavailablemembers.first().click().then(async function(){
             await browser.wait(EC.visibilityOf(await myprojectdetailobject.assignconfirmdialog),5000);
        });
        await myprojectdetailobject.assignconfirmYes.click();
        await browser.wait(EC.elementToBeClickable(myprojectdetailobject.assigndialogclose),5000);
        expect(await myprojectdetailobject.assignedmemcss.isPresent()).toBe(true);
        await browser.executeScript("arguments[0].click();",myprojectdetailobject.assigndialogclose);
        await browser.wait(EC.visibilityOf(await myprojectdetailobject.assignedmemsection),5000);
        //await myprojectdetailobject.assigndialogclose.click();
        await myprojectdetailobject.expandarrow.click();
        
        expect(await myprojectdetailobject.assignedmemsection.isDisplayed()).toBeTruthy();
        browser.sleep(5000);
    })

    it('Unassign Member to section',async function(){
        await browser.wait(EC.elementToBeClickable(await myprojectdetailobject.sectionthreedots.get(0)),4000);
        await myprojectdetailobject.sectionthreedots.get(0).click();
        await myprojectdetailobject.assignsection.click().then(async function(){
            //await browser.wait(EC.visibilityOf(myprojectdetailobject.unassignsection),3000);
            //browser.wait(EC.visibilityOf(myprojectdetailobject.assignavatar),5000);
            await myprojectdetailobject.unassignsection.click().then(async function(){
            await browser.wait(EC.visibilityOf(myprojectdetailobject.unassignconfirmdialog),5000);
                //await browser.wait(EC.elementToBeClickable(myprojectdetailobject.assignconfirmYes),5000);
            await myprojectdetailobject.unassignconfirmdialog.element(myprojectdetailobject.assignconfirmYes.locator()).click();
            });
            //await myprojectdetailobject.unassignsection.click();
            
        });
        await browser.executeScript("arguments[0].click();",myprojectdetailobject.assigndialogclose).then(async function(){
            await browser.wait(EC.not(EC.visibilityOf(await myprojectdetailobject.assignedmemsection)),5000);
            expect(myprojectdetailobject.assignedmemsection.isPresent()).toBe(false);
        });
                
        browser.sleep(5000);
    })
    

          
      describe('__expanded section', function(){
        beforeAll(async function(){
            console.log("beforeAll >> expanded section ");
            await browser.wait(EC.elementToBeClickable(await myprojectdetailobject.expandarrow),5000);
            await myprojectdetailobject.expandarrow.click(); 
            await browser.wait(EC.visibilityOf(await myprojectdetailobject.sectiondownloadicon),8000);
        });
         //***********************************Download Section by expanding
         it('Download section by expanding downloads section in ppt format',async function(){
       
            //---------count before 
            filecountbefore = beforefilearray.length;
            //console.log("Counts of files before",beforefilearray.length);
            //------------
    
            //----------------------expand section
            //await browser.wait(EC.elementToBeClickable(await myprojectdetailobject.expandarrow),5000);
           
                //await browser.wait(EC.visibilityOf(await myprojectdetailobject.sectiondownloadicon),8000);
                sectionlbel = await myprojectdetailobject.expandarrow.element(await myprojectdetailobject.sectionlabel.locator()).getText();
                //console.log("Section: "+ sectionlbel);
                await browser.wait(EC.elementToBeClickable(await myprojectdetailobject.sectiondownloadicon),8000);
                // click on download icon and download section
                await myprojectdetailobject.sectiondownloadicon.click().then(async function(){
                await browser.wait(EC.visibilityOf(await myprojectdetailobject.exportmodaldialoge),7000);
                await browser.wait(EC.elementToBeClickable(await myprojectdetailobject.exportdownload),8000);
            });
           
            
            
            //-----------------------filter selected section and verify 
                  
            await myprojectdetailobject.exportSectionall.reduce(function(result,elem,inx){
                return elem.element(myprojectdetailobject.section.locator()).isSelected().then(function(value){
                    
                 //console.log("value 1 " + value);
                // console.log("Ind 2: "+ inx);
                if(value == true)
                 index2=inx;
                return index2;
                });
                },-1).then(async function(ind){
                    //console.log("Ind 1: "+ ind);
                    await myprojectdetailobject.exportSectionall.get(ind).getText().then(function(text){
                   // console.log("text 1:" + text);
                     selectedsection=text;
                    });
                }).then(function(){
                       // console.log("selected :" + selectedsection);
                        expect(selectedsection).toEqual(sectionlbel);
                    });
       
            await myprojectdetailobject.exportdownload.click();
            await browser.wait(EC.presenceOf(await myprojectdetailobject.exportfilename),18000);
            
                   
            await myprojectdetailobject.exportdownload2.click();
            browser.sleep(59000);
            await myprojectdetailobject.exportfinish.click();
            browser.sleep(5000);
            expect(await myprojectdetailobject.exportmodaldialoge.isPresent()).toBeFalsy();
            await browser.driver.wait(function(){
            var filearray = glob.sync("./e2e/downloads/"+"*.pptx");
           
            if(typeof filearray !== 'undefined' && filearray.length > 0){
               return filearray;
                }
            },19000).then(function(filearray){
            filecountafter = filearray.length;
            //console.log("count after in: "+ filecountafter);
           
            }).then(function(){
                //console.log("count after: "+ filecountafter);
                expect(filecountafter).toBeGreaterThan(filecountbefore);
                });
                
        })
        
        it('Assign all slides in project to member',async function(){
            await myprojectdetailobject.assignproject.click();
            await browser.wait(EC.visibilityOf(myprojectdetailobject.assignmembers),3000);
            await myprojectdetailobject.allavailablemembers.first().click().then(function(){
                browser.wait(EC.visibilityOf(myprojectdetailobject.assignprojconfirmdialog),5000);
           });
           await myprojectdetailobject.assignconfirmYes.click().then(async function(){
            await browser.wait(EC.visibilityOf(myprojectdetailobject.assignedmemsection),5000);
           browser.sleep(4000);
           
           });
           await myprojectdetailobject.assignproject.click();
           expect(myprojectdetailobject.assignedmemcss.isPresent()).toBe(true);
           await browser.executeScript("arguments[0].click();",myprojectdetailobject.assigndialogclose);
           await myprojectdetailobject.expandarrow.click();
           browser.sleep(4000);
           expect(myprojectdetailobject.assignedmemsection.isDisplayed()).toBeTruthy().then(async function(){
            browser.sleep(4000);
            await myprojectdetailobject.expandarrow.click();
           });
          
        });
        
        it('Unassign member from all slides of project',async function(){
            await myprojectdetailobject.assignproject.click().then(async function(){
                await browser.wait(EC.visibilityOf(myprojectdetailobject.unassignsection),3000);
                //await browser.executeScript("arguments[0].click();",await myprojectdetailobject.unassignsection);
                await myprojectdetailobject.unassignsection.click();
            });
            await browser.wait(EC.visibilityOf(myprojectdetailobject.unassignprojconfirmdialog),3000);
            await myprojectdetailobject.unassignprojconfirmdialog.element(myprojectdetailobject.assignconfirmYes.locator()).click();
            await browser.wait(EC.not(EC.visibilityOf(myprojectdetailobject.assignedmemsection)),5000);
            browser.sleep(4000);
            await myprojectdetailobject.assignproject.click();
            expect(myprojectdetailobject.assignedmemcss.isPresent()).toBe(false);
            await browser.executeScript("arguments[0].click();",myprojectdetailobject.assigndialogclose);
            await myprojectdetailobject.expandarrow.click();
            expect(myprojectdetailobject.assignedmemsection.isPresent()).toBe(false).then(async function(){
                browser.sleep(4000);
                await myprojectdetailobject.expandarrow.click();
               });
        });
         //-------------------Download slide from section
        it('Downloading slide from section',async function(){
        //---------count before 
         var beforefilearray = glob.sync("./e2e/downloads/"+"*.pptx");
            filecountbefore=beforefilearray.length;
            // console.log("Counts of files before",beforefilearray.length);
             //------------
        //expand section
        //await myprojectdetailobject.expandarrow.element(myprojectdetailobject.expandsection.locator()).click();
        browser.sleep(8000);
         //move mouse to slide and click download
        await browser.actions().mouseMove(await myprojectdetailobject.Slide).perform();
        await browser.wait(EC.elementToBeClickable(await myprojectdetailobject.downloadiconchild),5000);
        await browser.actions().mouseMove(await myprojectdetailobject.downloadiconchild).click().perform();
        browser.sleep(18000); 
        await browser.driver.wait(function(){
         var filearray = glob.sync("./e2e/downloads/"+"*.pptx");
        
         if(typeof filearray !== 'undefined' && filearray.length > filecountbefore){
             return filearray;
         }
       },19000).then(function(filearray){
        
         filecountafter = filearray.length;
          
       }).then(function(){
        // console.log("count after: "+ filecountafter);
        expect(filecountafter).toBeGreaterThan(filecountbefore);
        });   
     });
     it('Assign member to slide',async function(){
        //await myprojectdetailobject.expandarrow.click();
        await browser.actions().mouseMove(await myprojectdetailobject.Slide).perform();
        await browser.wait(EC.elementToBeClickable(await myprojectdetailobject.assigniconchild),5000);
        await browser.actions().mouseMove(await myprojectdetailobject.assigniconchild).click().perform();
        await browser.wait(EC.visibilityOf(myprojectdetailobject.assignmembers),3000);
        await myprojectdetailobject.allavailablemembers.first().click();
        browser.sleep(3000);
        expect(myprojectdetailobject.Slide.element(myprojectdetailobject.assignedmemslide.locator()).isDisplayed()).toBe(true);

    });
    
    it('UnAssign member to slide',async function(){
        //await myprojectdetailobject.expandarrow.click();
        await browser.actions().mouseMove(await myprojectdetailobject.Slide).perform();
        await browser.wait(EC.elementToBeClickable(await myprojectdetailobject.assigniconchild),5000);
        await browser.actions().mouseMove(await myprojectdetailobject.assigniconchild).click().perform();
        await browser.wait(EC.elementToBeClickable(myprojectdetailobject.unassignslide),3000);
        await myprojectdetailobject.unassignslide.click();
        browser.sleep(3000);
        expect(myprojectdetailobject.Slide.element(myprojectdetailobject.assignedmemslide.locator()).isPresent()).toBe(false);

    });
     
    describe('__slide in section',function(){
        beforeAll(async function(){
            console.log("beforeALL >> slide in section");
            await browser.wait(EC.visibilityOf(myprojectdetailobject.viewasSlideicon),3000);
            await myprojectdetailobject.viewasSlideicon.click();
            await myprojectdetailobject.Slide.click();
            await browser.wait(EC.visibilityOf(await myprojectdetailobject.slideviewimage),5000);
            //await browser.actions().doubleClick(await myprojectdetailobject.Slide).perform();
            await browser.wait(function(){
                return myprojectdetailobject.slideviewimage.getAttribute('complete').then(function(value){
                    //console.log("image complete:" + value);
                    return value=='true';
                });
                },5000);
             });

        it('Slide View',async function(){
            await myprojectdetailobject.viewasSlideicon.isPresent().then(async function(result){
                if(result) {
                await myprojectdetailobject.viewasSlideicon.click();
                browser.sleep(3000);
                await browser.wait(EC.visibilityOf(myprojectdetailobject.viewasList),3000);
                await myprojectdetailobject.Slide.click();   
                //await browser.wait(EC.elementToBeClickable(myprojectdetailobject.downloadiconslide),6000);
                }
            });
            //await browser.wait(EC.elementToBeClickable(myprojectdetailobject.downloadiconslide),8000);
            expect(myprojectdetailobject.viewasListicon.isDisplayed()).toBe(true);
            expect(myprojectdetailobject.viewasList.isDisplayed()).toBe(true);
        })
        
        it('Download slide from Slide view',async function(){
            //expand section
            //await myprojectdetailobject.expandarrow.element(myprojectdetailobject.expandsection.locator()).click();
            //browser.sleep(8000);
            //open slide 
            //download slide
            
            //---------count before 
            var beforefilearray = glob.sync("./e2e/downloads/"+"*.pptx");
               filecountbefore=beforefilearray.length;
                //console.log("Counts of files before",beforefilearray.length);
                
            //------------
            //await browser.actions().doubleClick(await myprojectdetailobject.Slide).perform();
            await browser.wait(EC.elementToBeClickable(myprojectdetailobject.downloadiconslide),6000);
            await myprojectdetailobject.downloadiconslide.click();
            browser.sleep(18000);
            //await myprojectdetailobject.viewasListicon.click();
            browser.driver.wait(function(){
                var filearray = glob.sync("./e2e/downloads/"+"*.pptx");
                
                if(typeof filearray !== 'undefined' && filearray.length > 0){
                    return filearray;
                }
            },19000).then(function(filearray){
                
                filecountafter = filearray.length;
                //console.log("count after in: "+ filecountafter);
               }).then(function(){
                //console.log("count after: "+ filecountafter);
               expect(filecountafter).toBeGreaterThan(filecountbefore);
            });   
        });
        
        describe('__Comment tray',function(){
            beforeAll(async function(){
                await browser.wait(EC.visibilityOf(await myprojectdetailobject.commentIcon),5000);
                await myprojectdetailobject.commentIcon.click();
                await browser.wait(EC.visibilityOf(await myprojectdetailobject.slideDetailsContainer),5000);
            })
            afterAll(async function(){
                console.log("afterEach >> Comment tray");
                await browser.wait(EC.visibilityOf(await myprojectdetailobject.commenttrayclose),5000);
                await myprojectdetailobject.commenttrayclose.click();
                await browser.wait(EC.invisibilityOf(await myprojectdetailobject.slideDetailsContainer),5000);
                await browser.wait(EC.visibilityOf(await myprojectdetailobject.commentIcon),5000);
                
            });
            
            it('Add Slide to Favorites',async function(){
       
                // await myprojectdetailobject.expandarrow.element(myprojectdetailobject.expandsection.locator()).click();
                // await browser.actions().doubleClick(await myprojectdetailobject.Slide).perform();
                 await browser.wait(EC.visibilityOf(await myprojectdetailobject.commentIcon),5000);
                 await browser.wait(EC.visibilityOf(await myprojectdetailobject.allslides),4000);
                 await browser.wait(function(){
                     return myprojectdetailobject.allslides.getAttribute('complete').then(function(value){
                        //console.log("image complete:" + value);
                     return value=='true';
                     });
                     },5000);
                 //await myprojectdetailobject.commentIcon.click();
                 await browser.wait(EC.visibilityOf(await myprojectdetailobject.slideDetailsContainer),5000);
                 await browser.wait(EC.elementToBeClickable(await myprojectdetailobject.addremovefavorites),5000);
                 if(await myprojectdetailobject.addremovefavorites.getText()==="Add to Favorites"){
                    //await browser.wait(EC.elementToBeClickable(await myprojectdetailobject.addToFavorites),4000);
                 //await myprojectdetailobject.addToFavorites.click();
                 await myprojectdetailobject.addremovefavorites.click();
                 await browser.wait(EC.visibilityOf(await myprojectdetailobject.toastsuccess,8000));
                 await browser.wait(EC.invisibilityOf(await myprojectdetailobject.toastsuccess,8000));
                 }
                 else 
                 {
                    //await browser.wait(EC.elementToBeClickable(await myprojectdetailobject.removeFromFavorites),4000);
                    //await myprojectdetailobject.removeFromFavorites.click();
                    await myprojectdetailobject.addremovefavorites.click();
                    await browser.wait(EC.visibilityOf(await myprojectdetailobject.toastsuccess,8000));
                    await browser.wait(EC.invisibilityOf(await myprojectdetailobject.toastsuccess,8000));
                    await browser.wait(EC.elementToBeClickable(await myprojectdetailobject.addremovefavorites),4000);
                    //await myprojectdetailobject.addToFavorites.click();
                    await myprojectdetailobject.addremovefavorites.click();
                    await browser.wait(EC.visibilityOf(await myprojectdetailobject.toastsuccess,8000));
                    await browser.wait(EC.invisibilityOf(await myprojectdetailobject.toastsuccess,8000));
                 }
                 expect(await myprojectdetailobject.removeFromFavorites.isDisplayed()).toBe(true);
              });

              xit('Slide-View History',async function(){
                 //await myprojectdetailobject.expandarrow.element(myprojectdetailobject.expandsection.locator()).click();
                 //await browser.actions().doubleClick(await myprojectdetailobject.Slide).perform();
                 await browser.wait(EC.visibilityOf(await myprojectdetailobject.commentIcon),5000);
                 await browser.wait(function(){
                     return myprojectdetailobject.allslides.getAttribute('complete').then(function(value){
                        //console.log("image complete:" + value);
                        return value=='true';
                     });
                     },5000);
                 await myprojectdetailobject.commentIcon.click();
                 await browser.wait(EC.visibilityOf(myprojectdetailobject.slideDetailsContainer),5000);
                 await browser.wait(EC.elementToBeClickable(myprojectdetailobject.viewHistory),4000);
                 await myprojectdetailobject.viewHistory.click(); 
                 /*await browser.wait(function(){
                     return myprojectdetailobject.viewHistorypopup.isDisplayed();
                     },5000);*/
                 expect(myprojectdetailobject.viewHistorypopupactive.isDisplayed()).toBe(true);
                     
             });
     
             it('View History-Save ',async function(){
                // await myprojectdetailobject.expandarrow.element(myprojectdetailobject.expandsection.locator()).click();
                 //await browser.actions().doubleClick(await myprojectdetailobject.Slide).perform();
                 await browser.wait(EC.visibilityOf(myprojectdetailobject.commentIcon),5000);
                       
                 await browser.wait(function(){
                     return myprojectdetailobject.allslides.getAttribute('complete').then(function(value){
                        //console.log("image complete:" + value);
                        return value =='true';
                     });
                     },5000);
                 //var slidebefore=await myprojectdetailobject.slideshowimage.getAttribute('src');
                 var slideversionbefore=await myprojectdetailobject.slideVersion.getAttribute('data-dragula');
                 //console.log("version:"+slideversion);
                 //await myprojectdetailobject.commentIcon.click();
                 await browser.wait(EC.visibilityOf(await myprojectdetailobject.slideDetailsContainer),5000);
                 await browser.wait(EC.elementToBeClickable(await myprojectdetailobject.viewHistory),4000);
                 await myprojectdetailobject.viewHistory.click();
                 expect(await myprojectdetailobject.viewHistorypopupactive.isDisplayed()).toBe(true);
                 //await browser.wait(EC.presenceOf(await myprojectdetailobject.viewHistoryVersions),5000);
                 await browser.wait(EC.visibilityOf(await myprojectdetailobject.viewHistoryslide),5000);
                 await myprojectdetailobject.viewHistoryVersions.last().click();
                 await browser.wait(EC.elementToBeClickable(await myprojectdetailobject.viewHistorySave),5000);
                 await myprojectdetailobject.viewHistorySave.click();
                 await browser.wait(EC.visibilityOf(await myprojectdetailobject.viewHistorypopuphidden),5000);
                 
                 await browser.wait(EC.invisibilityOf(await myprojectdetailobject.versionloader),5000);
                 //await browser.wait(EC.stalenessOf(await myprojectdetailobject.versionloader),5000);
                 await browser.wait(async function(){
                     return await myprojectdetailobject.loaderbar.getAttribute('style').then(function(value){
                         //console.log("style:"+ value);
                         if(value.includes("transform: translate(-100%, 0px);")){
                           return true;  
                         }
                     });
                 },6000);
                 var slideversionafter=await myprojectdetailobject.slideVersion.getAttribute('data-dragula');
                 //var slideafter=await myprojectdetailobject.slideshowimage.getAttribute('src');
                 expect(slideversionafter==slideversionbefore).toBe(false);
             });
             
             it('View History-Cancel ',async function(){
                 //await myprojectdetailobject.expandarrow.element(myprojectdetailobject.expandsection.locator()).click();
                 //await browser.actions().doubleClick(await myprojectdetailobject.Slide).perform();
                 await browser.wait(EC.visibilityOf(await myprojectdetailobject.commentIcon),5000);
                       
                 await browser.wait(function(){
                     return myprojectdetailobject.allslides.getAttribute('complete').then(function(value){
                     return value=='true';
                     });
                     },5000);
                 //var slidebefore=await myprojectdetailobject.slideshowimage.getAttribute('src');
                 var slideversionbefore=await myprojectdetailobject.slideVersion.getAttribute('data-dragula');
                 //console.log("version:"+slideversionbefore);
                 //await myprojectdetailobject.commentIcon.click();
                 await browser.wait(EC.visibilityOf(await myprojectdetailobject.slideDetailsContainer),5000);
                 await browser.wait(EC.elementToBeClickable(await myprojectdetailobject.viewHistory),4000);
                 await myprojectdetailobject.viewHistory.click();
                 expect(await myprojectdetailobject.viewHistorypopupactive.isDisplayed()).toBe(true);
                 //await browser.wait(EC.presenceOf(await myprojectdetailobject.viewHistoryVersions),5000);
                 await browser.wait(EC.visibilityOf(await myprojectdetailobject.viewHistoryslide),5000);
                 await myprojectdetailobject.viewHistoryVersions.last().click();
                 await browser.wait(EC.elementToBeClickable(await myprojectdetailobject.viewHistoryCancel),5000);
                 await myprojectdetailobject.viewHistoryCancel.click();
                // await browser.wait(EC.visibilityOf(myprojectdetailobject.viewHistorypopuphidden),5000);
                 await browser.wait(async function(){
                     return await myprojectdetailobject.viewHistorypopuphidden.getAttribute('style').then(function(value){
                         //console.log("style:"+ value);
                         if(value.includes("display: none;")){
                           return true;  
                         }
                     });
                 },6000);
                 
                 //await browser.wait(EC.invisibilityOf(await myprojectdetailobject.versionloader),5000);
                 //await browser.wait(EC.stalenessOf(await myprojectdetailobject.versionloader),5000);
                 /*await browser.wait(async function(){
                     return await myprojectdetailobject.loaderbar.getAttribute('style').then(function(value){
                         //console.log("style:"+ value);
                         if(value.includes("transform: translate(-100%, 0px);")){
                           return true;  
                         }
                     });
                 },6000);*/
                 /*await myprojectdetailobject.slideVersion.getAttribute('data-dragula').then(async function(value){
                     var slideversionafter=value;
                     //console.log("version after:"+slideversionafter);
                     await browser.wait(EC.visibilityOf(myprojectdetailobject.slideDetailsContainer),5000);
                    // console.log("version after:"+slideversionbefore);
                     //var slideafter=await myprojectdetailobject.slideshowimage.getAttribute('src');
                     expect(slideversionafter==slideversionbefore).toBe(true);
                 });*/
                var  slideversionafter = await myprojectdetailobject.slideVersion.getAttribute('data-dragula'); 
                await browser.wait(EC.visibilityOf(myprojectdetailobject.slideDetailsContainer),5000); 
                expect(slideversionafter==slideversionbefore).toBe(true);          
             });

            it('Add comment as annotation',async function(){
                let commentscountafter,commentscountbefore;
                //await browser.wait(EC.visibilityOf(await myprojectdetailobject.commentIcon),5000);
                await browser.wait(EC.visibilityOf(await myprojectdetailobject.allslides),4000);
                await browser.wait(function(){
                    return myprojectdetailobject.allslides.getAttribute('complete').then(function(value){
                       //console.log("image complete:" + value);
                    return value=='true';
                    });
                    },8000);
                //await myprojectdetailobject.commentIcon.click();
                await browser.wait(EC.visibilityOf(await myprojectdetailobject.slideDetailsContainer),5000);
                await browser.wait(EC.elementToBeClickable(await myprojectdetailobject.viewAddComments),5000);
                await myprojectdetailobject.viewAddComments.click();
                await browser.wait(EC.visibilityOf(await myprojectdetailobject.commentsButtonsContainer),5000);
                await browser.wait(EC.visibilityOf(await myprojectdetailobject.commentsclose),5000);
                await browser.wait(EC.visibilityOf(await myprojectdetailobject.annotationscontainer),5000).then(async function(){
                commentscountbefore = await myprojectdetailobject.opencomments.count();
                //console.log("Comments count before:"+commentscountbefore);
                });
                              
                await browser.wait(EC.visibilityOf(await myprojectdetailobject.slideAnnotationscontainer),5000);
                //var xoffset=await commomFunctions.getRandomNum(100,300);
                //console.log("x coordinate:"+xoffset);
                //var yoffset=await commomFunctions.getRandomNum(100,200);
                //console.log("y coordinate:"+yoffset);
               await myprojectdetailobject.addcommentonslide().then(async function(){
                await browser.wait(async function(){
                    return myprojectdetailobject.loaderbar.getAttribute('style').then(function(value){
                        //console.log("style:"+ value);
                        if(value.includes("transform: translate(-100%, 0px);")){
                          return true;  
                        }
                    });
                },6000);
                  }).then(async function(){
                    commentscountafter=await myprojectdetailobject.opencomments.count();
                    //console.log("Comments count after:"+commentscountafter);
                  });;
                  expect(commentscountafter).toEqual(commentscountbefore+1);
                  //console.log("exit from add annotation");
                  await myprojectdetailobject.commentsclose.click();
                                    
               });

               it('Draw new comment should be in open state ',async function(){
                let commentscountafter,commentscountbefore;
                await browser.wait(EC.visibilityOf(await myprojectdetailobject.commentIcon),5000);
                await browser.wait(EC.visibilityOf(await myprojectdetailobject.allslides),4000);
                await browser.wait(function(){
                    return myprojectdetailobject.allslides.getAttribute('complete').then(function(value){
                       //console.log("image complete:" + value);
                    return value=='true';
                    });
                    },8000);
                //await myprojectdetailobject.commentIcon.click();
                await browser.wait(EC.visibilityOf(await myprojectdetailobject.slideDetailsContainer),5000);
                await browser.wait(EC.elementToBeClickable(await myprojectdetailobject.viewAddComments),5000);
                await myprojectdetailobject.viewAddComments.click();
                await browser.wait(EC.visibilityOf(await myprojectdetailobject.commentsButtonsContainer),5000);
                await browser.wait(EC.visibilityOf(await myprojectdetailobject.annotationscontainer),5000);
                commentscountbefore =await myprojectdetailobject.opencomments.count();
                var commentsonslidebefore =await myprojectdetailobject.opencommentsonslide.count();
                //console.log("Comments count before:"+commentscountbefore);
                //console.log("Comments on slide before:"+commentsonslidebefore);
                await browser.wait(EC.elementToBeClickable(await myprojectdetailobject.drawcomment),5000);
                await myprojectdetailobject.drawcomment.click();
                await browser.wait(EC.elementToBeClickable(await myprojectdetailobject.drawcolorselect),4000);
                await myprojectdetailobject.drawcolorselect.click();
                await browser.wait(EC.presenceOf(await myprojectdetailobject.drawselectcolorpink),2000);
                await myprojectdetailobject.drawselectcolorpink.click();
                await browser.wait(EC.visibilityOf(await myprojectdetailobject.drawarea),5000);
                              
                var xoffset=await commomFunctions.getRandomNum(100,300);
                //console.log("x coordinate:"+xoffset);
                var yoffset=await commomFunctions.getRandomNum(100,100);
               
                await myprojectdetailobject.drawnewcommentonslide(xoffset,yoffset);
                commentscountafter=await myprojectdetailobject.opencomments.count(); 
                //console.log("Comments count after:"+commentscountafter); 
                expect(commentscountafter).toEqual(commentscountbefore+1);
                await browser.wait(EC.elementToBeClickable(await myprojectdetailobject.annotatecomment),4000);
                await myprojectdetailobject.annotatecomment.click();
                var commentsonslideafter =await myprojectdetailobject.opencommentsonslide.count();
                //console.log("comments on slide"+commentsonslideafter);
                expect(commentsonslideafter).toEqual(commentsonslidebefore+1);
               // await browser.sleep(6000);
               await myprojectdetailobject.commentsclose.click();
               });

               it('Mark comment as resolved',async function(){
                //console.log("Entered Mark as resolved");
                await browser.wait(EC.visibilityOf(await myprojectdetailobject.commentIcon),5000);
                await browser.wait(EC.visibilityOf(await myprojectdetailobject.allslides),4000);
                await browser.wait(async function(){
                    return myprojectdetailobject.allslides.getAttribute('complete').then(function(value){
                       //console.log("image complete:" + value);
                    return value=='true';
                    });
                    },5000);
               // await myprojectdetailobject.commentIcon.click();
                await browser.wait(EC.visibilityOf(await myprojectdetailobject.slideDetailsContainer),5000);
                await browser.wait(EC.elementToBeClickable(await myprojectdetailobject.viewAddComments),5000);
                await myprojectdetailobject.viewAddComments.click();
                await browser.wait(EC.visibilityOf(await myprojectdetailobject.commentsButtonsContainer),5000);
                await browser.wait(EC.visibilityOf(await myprojectdetailobject.annotationscontainer),5000);
                await browser.wait(EC.visibilityOf(await myprojectdetailobject.slideAnnotationscontainer),5000);
                filecountbefore = await myprojectdetailobject.opencomments.count();
                // console.log("Comments count before:"+filecountbefore);
                     
                              
               await browser.sleep(6000);
               if(filecountbefore!=0){
                await browser.executeScript("arguments[0].click();",myprojectdetailobject.opencomments.get(0).getWebElement()).then(async function(){
                    
                    //console.log("Comments inside");
                    await browser.wait(async function(){
                        return await myprojectdetailobject.loaderbar.getAttribute('style').then(function(value){
                            //console.log("style:"+ value);
                            if(value.includes("transform: translate(-100%, 0px);")){
                              return true;  
                            }
                        });
                    },6000);
                }).then(async function(){
                    filecountafter = await myprojectdetailobject.opencomments.count();
                    //console.log("Comments countafter1 :"+filecountafter);
                });
               }
               else{
                   //add comment
                   //console.log("Comments not existing");
                 await myprojectdetailobject.addcommentonslide().then(async function(){
                    await browser.wait(async function(){
                        return await myprojectdetailobject.loaderbar.getAttribute('style').then(function(value){
                            //console.log("style:"+ value);
                            if(value.includes("transform: translate(-100%, 0px);")){
                              return true;  
                            }
                        });
                    },6000);
                    //await browser.sleep(6000);
                }).then(async function(){
                    filecountbefore =await myprojectdetailobject.opencomments.count();
                    console.log("Comments countbefore recalculate :" +filecountbefore);
                });
                                
                //mark as resolve
                await browser.executeScript("arguments[0].click();",myprojectdetailobject.opencomments.get(0).getWebElement()).then(async function(){
                    await browser.wait(async function(){
                        return await myprojectdetailobject.loaderbar.getAttribute('style').then(function(value){
                            //console.log("style:"+ value);
                            if(value.includes("transform: translate(-100%, 0px);")){
                              return true;  
                            }
                        });
                    },6000);
                    await browser.sleep(8000);
                    
                }).then(async function(){
                    filecountafter = await myprojectdetailobject.opencomments.count();
                    //console.log("Comments count after :"+filecountafter);
                    //console.log("Comments inside");
                });
               }
                expect(filecountafter).toEqual(filecountbefore-1);
                await myprojectdetailobject.commentsclose.click();
                //await browser.sleep(8000);
                //console.log("Exit Mark as resolved");
            });
            
        })//....end of describe-actions on Comment tray
        
     
    })//......end of describe-slide in section

    }) //......end of describe-expanded section


})