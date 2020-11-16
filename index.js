$(document).ready(function(){
    
    let json_object=[
        {
          type:"text", // ---- text Input format
          value:"doe",
          placeholder:"Enter Name",
          name:"name",
          id:12,
          lable:"name"
        },
        {
          type:"number",
          value:1234, //---Number Input format
          placeholder:"Enter Number",
          name:"name",
          id:12,
          min:2,
          max:4,
          lable:"number"
        },
        {
          type:"password", 
          value:"", //---Paswword input format
          placeholder:"Enter Password",
          name:"name",
          id:12,
          lable:"password"
        },
        {
          type:"file", //---Files input format
          value:"",
          name:"name",
          id:12,
          lable:"file"
        },
        {
          lable:"date", //---Date input format
          type:"date",
          value:"",
          name:"name",
          id:12
        },
        {
          type:'checkbox', //--Checkbox input format
          value:['1','2','3'],
          name:'Number',
          lable:"Number"
        },
        {
          type:"textarea", //--TextArea format
          value:"",
          name:"name",
          id:12,
          lable:"textarea"
        },
        {
          type:'radio', //--Radio input format
          value:['mail','femail'],
          name:'gender',
          lable:"Gender"
        }
      ];

    // This function use tio make input type content 
    let replace_function=(object,type)=>{

            let type_Content=''; //to store content

            for (key in object) {
              type_Content+=key+"='"+object[key]+"' "; //<= This loop use to get keys and values and appen content
            } 
            console.log(type_Content);
            if(type==="textarea")
            {
                let data=new Array(type_Content,object["value"]); //Content and value [Because Textarea unable to use value attribute]
                return data;
            }
            else
            {
                return type_Content;
            }
      };


    let makeDynamicForm=data=>{

        for(let values of data)
        {
            let content='<tr><td style="width: 10%;text-align: center;"><br><i class="fas fa-check-circle" style="color: green;"></i></td>';
            content+='<td><small class="form-text text-muted" style="text-transform: capitalize;">'+values["lable"]+'</small>';
            
            if(values['type']=="textarea" || values['type']==="checkbox" || values['type']==="radio")
            {
                if(values['type']==="textarea")
                {
                  $("#Dyanamic_content").append(content+'<textarea class="form-control"'+replace_function(values,values['type'])[1]+'>'+replace_function(values,values['type'])[1]+'</textarea></td></tr>');
                }
                else if(values['type']==="radio")
                {
                  //---Create a content for radio button
                  for(let i=0;i<values['value'].length;i++)
                  {
                    content+='<div class="form-check form-check-inline">';
                      content+='<input class="form-check-input" type="radio" name='+values['name']+' value='+values['value'][i]+'>';
                      content+='<label class="form-check-label" for="inlineRadio1" style="text-transform: capitalize;">'+values['value'][i]+'</label>';
                    content+='</div>';
                  }

                  $("#Dyanamic_content").append(content+'</td></tr>');
                }
                else if(values['type']==="checkbox")
                {
                  //---Create a content for Check box
                  for(let i=0;i<values['value'].length;i++)
                  {
                    content+='<div class="form-check form-check-inline">';
                      content+='<input class="form-check-input" type="checkbox" name='+values['name']+' value='+values['value'][i]+'>';
                      content+='<label class="form-check-label" for="inlineRadio1" style="text-transform: capitalize;">'+values['value'][i]+'</label>';
                    content+='</div>';
                  }

                  $("#Dyanamic_content").append(content+'</td></tr>');
                }
            }
            else 
            {
                //--Here going to Edit object
                $("#Dyanamic_content").append(content+'<input class="form-control"'+replace_function(values,values['type'])+'></td></tr>');
            }
       }
    }
    
    makeDynamicForm(json_object);

});